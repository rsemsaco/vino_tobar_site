import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import assert from 'node:assert/strict';
const prefix = '/vino_tobar_site';
function walk(dir) { return readdirSync(dir, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(join(dir,e.name)) : [join(dir,e.name)]); }
assert.ok(existsSync('out/index.html'));
assert.ok(existsSync('out/privacidade/index.html'));
let count = 0;
for(const file of walk('out').filter(f=>/\.(html|css)$/.test(f))) {
 const source = readFileSync(file,'utf8');
 const refs = [...source.matchAll(/(?:src|href)="([^"#]+)"|url\(["']?([^\s"')]+)["']?\)/g)].map(m=>m[1]||m[2]);
 for(const ref of refs) {
  if(!ref.startsWith('/') || ref.startsWith('//'))continue;
  assert.ok(ref.startsWith(prefix+'/'), `${file}: missing basePath: ${ref}`);
  assert.ok(!ref.includes(prefix+prefix), `${file}: duplicate basePath: ${ref}`);
  const path = 'out'+ref.slice(prefix.length).split(/[?#]/)[0];
  assert.ok(existsSync(path)||existsSync(join(path,'index.html')),`${file}: missing ${path}`);count++;
 }
}
const html=readFileSync('out/index.html','utf8');
assert.match(html,/Bons vinhos/);assert.match(html,/wa\.me\/5511988045646/);
assert.ok(existsSync('out/robots.txt'));assert.ok(existsSync('out/sitemap.xml'));
console.log(`Static export verified: ${count} local references; home, privacy, robots and sitemap present.`);

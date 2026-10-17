import { test } from 'node:test';
import assert from 'node:assert/strict';
import { upcoming, whatsapp, eventDate } from '../lib/content.ts';
import { catalog, experience, events } from '../content/site.ts';
test('apenas eventos futuros, validados e com fuso explícito são publicáveis',()=>{
 const event={title:'Teste',start:'2026-10-17T21:00:00-03:00',end:'2026-10-17T23:00:00-03:00',validado:true};
 assert.equal(upcoming([event],new Date('2026-10-18T00:00:00Z')).length,0);
 assert.equal(upcoming([event],new Date('2026-10-17T12:00:00Z')).length,1);
 assert.equal(upcoming([{...event,validado:false},{...event,start:'2026-10-17T21:00:00'},{...event,end:'inválido'}],new Date('2026-10-17T12:00:00Z')).length,0);
 assert.match(eventDate(event.start),/21:00/);
});
test('mensagens preservam texto e usam o número informado',()=>{
 const message='Olá! Seleção 01 & consulta?';const url=new URL(whatsapp(message));
 assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/5511988045646');assert.equal(url.searchParams.get('text'),message);
});
test('dados versionados respeitam o contrato editorial',()=>{
 if(!experience.validado) assert.equal(experience.preco,null);
 assert.ok(catalog.every(c=>c.validatedName===null || typeof c.validatedName==='string'));
 assert.ok(events.every(e=>typeof e.validado==='boolean' && Number.isFinite(Date.parse(e.start)) && Number.isFinite(Date.parse(e.end))));
});

test('caminhos locais recebem exatamente um prefixo', async()=>{
 const { localPath } = await import('../lib/paths.ts');
 assert.equal(localPath('/privacidade/'),'/vino_tobar_site/privacidade/');
 assert.equal(localPath('/vino_tobar_site/images/a.webp'),'/vino_tobar_site/images/a.webp');
 assert.equal(localPath('#catalogo'),'#catalogo');
 assert.equal(localPath('https://wa.me/5511988045646'),'https://wa.me/5511988045646');
});

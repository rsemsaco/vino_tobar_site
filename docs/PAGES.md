# GitHub Pages

Destino: https://rsemsaco.github.io/vino_tobar_site/

## Configuração

Next.js exporta arquivos estáticos em `out`, com `basePath: '/vino_tobar_site'`, `trailingSlash: true` e imagens sem otimizador de servidor. O helper `localPath` aplica exatamente um prefixo em imagens e links HTML. Fontes locais e CSS são processados pelo Next, que aplica o prefixo aos arquivos gerados. O favicon reutiliza a logo recebida. Nenhuma alteração visual ou de textos comerciais foi necessária.

A rota `force-dynamic` foi removida. Não existem API routes ou reservas no servidor. Reservas continuam sendo consultas pelo WhatsApp.

## Publicação

1. Settings → Pages → Build and deployment → Source → **GitHub Actions**. A pasta `/docs` contém documentação, não o site compilado.
2. O workflow `.github/workflows/pages.yml` roda em push na main ou por **Actions → Publish Vino Tobar to GitHub Pages → Run workflow → main**.
3. Instala com `npm ci`, executa testes e TypeScript, build e verificação da exportação, faz upload de `out` e deploy no ambiente `github-pages`.
4. Permissões: `contents: read`, `pages: write`, `id-token: write`. Proteções de branch/ambiente permanecem respeitadas.
5. Verifique o resultado em Actions e a URL pública. `deployment.txt` contém o SHA do commit publicado, permitindo conferir a versão sem confundir cache com deploy atual.

Não configurar secrets de token manualmente nem ampliar permissões para contornar políticas. Se a origem ainda estiver em branch, um administrador deve selecionar GitHub Actions. O workflow não muda configurações administrativas por conta própria.

## Atualizar agenda

Edite `events` em `content/site.ts` com dados aprovados pela operação. Cada objeto usa `title`, `start`, `end` e `validado`. Datas devem ser ISO 8601 com offset explícito; para horários de São Paulo nas condições atuais, use `-03:00`. A exibição usa `America/Sao_Paulo`. Não inferir preço ou inclusões. Eventos com `validado: false`, inválidos, já iniciados ou encerrados não são mostrados como próximos.

Faça commit/merge na main. O workflow recompila e republica automaticamente. Não é necessário servidor para atualizar o site; alterações só ficam públicas após novo deploy. Para impedir exibição de eventos expirados entre deploys, o navegador refiltra a lista ao carregar, a cada 30 segundos e ao retornar à aba. Sem JavaScript, permanece apenas o convite de consulta pelo WhatsApp.

As cinco dimensões da experiência permanecem em rascunho até aprovação operacional. A capacidade nunca representa vagas disponíveis automaticamente.

## Verificações

- `npm test`: fuso, filtro temporal, WhatsApp, contrato editorial e prefixo idempotente.
- `npm run typecheck`: TypeScript.
- `npm run build`: exportação estática.
- `npm run verify:export`: presença de `out/index.html`, privacidade, robots e sitemap; integridade dos links locais, CSS, fontes e imagens referenciadas no HTML/CSS.
- Após deploy: HTTP 200 em home e `/privacidade/`, assets válidos, `deployment.txt` igual ao commit do workflow, menu e WhatsApp em navegador.

A revisão de layout em celular requer navegador com viewport móvel. Não confundir inspeção de CSS com teste visual real.

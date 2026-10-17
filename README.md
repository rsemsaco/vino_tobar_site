# Vino Tobar — site artístico

Next.js 16.4.2, App Router, TypeScript e CSS. Adaptado para GitHub Pages a partir da main. Destino: https://rsemsaco.github.io/vino_tobar_site/. O status de cada publicação é verificável em Actions e em `/vino_tobar_site/deployment.txt`. Nenhuma configuração Vercel ou domínio personalizado é necessária.

## Executar e revisar

Node.js 24 recomendado (testes usam execução nativa de TypeScript), npm:

```sh
npm ci
npm run dev
```

Abra http://localhost:3000/vino_tobar_site/. Para revisão do build:

```sh
npm test
npm run typecheck
npm run build
npm run verify:export
```

`npm run build` gera `out/index.html`. Para prévia de produção, sirva `out` sob `/vino_tobar_site/` com qualquer servidor HTTP estático. `next start` não serve exportações estáticas. Confira 360, 390, 768 e 1440 px. O workflow publica automaticamente a cada push na main e também aceita execução manual.

## Estrutura

- `app/`: página e privacidade; texto HTML vivo, fontes locais e CSS responsivo.
- `content/site.ts`: dados, agenda e catálogo.
- `lib/content.ts`: links e filtro temporal.
- `components/Interactions.tsx`: menu e eventos locais sem analytics externo.
- `assets/originals/`: os cinco arquivos originais recebidos, sem alteração.
- `public/images/`: WebP responsivos em 480, 800 e 1254 px; logo em 360/720 px.
- `assets/fonts/`: fontes e licenças OFL do pacote anterior.
- `docs/OPERACAO.md`: atualização e checklist de publicação.
- `docs/VERIFICACAO.md`: evidências e limitações da revisão.

## Agenda

A agenda usa dados estáticos versionados em `content/site.ts`. Cada atualização na main gera um novo deploy; no navegador, eventos passados são removidos ao abrir a página, a cada 30 segundos e ao retornar à aba. Sem JavaScript, permanece o convite para consulta, sem divulgar agenda desatualizada. As datas devem conter offset explícito (ex. `-03:00`), e são exibidas em `America/Sao_Paulo`. Uma experiência já iniciada não é listada como próxima. Não há reserva automática.

## Referências de implementação

- https://nextjs.org/docs/app/getting-started/installation
- https://developers.google.com/search/docs/appearance/structured-data/local-business

Não há dados estruturados de ofertas, produtos ou eventos pendentes. Canonical, sitemap e metadados usam a URL real do Pages. Uma imagem social depende da confirmação de autorização específica. Leia `docs/PAGES.md` para publicação e operação.

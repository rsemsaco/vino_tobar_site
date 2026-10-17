# Vino Tobar — site artístico

Next.js 16.4.2, App Router, TypeScript e CSS. Desenvolvimento na branch `feat/artistic-experience`. Não publicado em produção; domínio e Vercel não foram alterados.

## Executar e revisar

Node.js 24 recomendado (testes usam execução nativa de TypeScript), npm:

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Para revisão do build:

```sh
npm test
npm run typecheck
npm run build
npm start
```

A prévia é local. Não é um endereço hospedado. Confira 360, 390, 768 e 1440 px antes da publicação. Não há configuração de contas, deploy ou integração externa automática neste projeto.

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

A rota principal é dinâmica: eventos passados são removidos a cada requisição. As datas devem conter offset explícito (ex. `-03:00`), e são exibidas em `America/Sao_Paulo`. Uma experiência já iniciada não é listada como próxima. Não há reserva automática.

## Referências de implementação

- https://nextjs.org/docs/app/getting-started/installation
- https://developers.google.com/search/docs/appearance/structured-data/local-business

Não há dados estruturados de ofertas, produtos ou eventos pendentes. Canonical, sitemap, imagem social e indexação devem ser configurados após confirmação da URL pública e autorizações de imagem.

# Operação e publicação

## Atualizar conteúdo

Edite `content/site.ts`. A ficha mestra anterior foi localizada e lida, mas continua rascunho sem formato, frequência, preço, inclusões ou capacidade aprovados. Por isso `experience` mantém esses campos nulos e `validado: false`. Esse rascunho não é renderizado como oferta. Para divulgar uma experiência detalhada, primeiro validar todas as dimensões com a operação e implementar seu bloco de oferta, sem expor capacidade como disponibilidade.

Agenda: adicionar objetos em `events` somente após confirmação, com `title`, `start`, `end` (ISO com offset explícito) e `validado: true`. Não colocar dados de clientes. Testar novamente. O workflow republica automaticamente ao atualizar a main. O navegador filtra datas na montagem, a cada 30 segundos e ao voltar à aba; sem JavaScript, só o convite para consultar programação aparece.

Catálogo: cada composição tem um identificador estável 01/02/03. Substituir `validatedName: null` somente pela nomenclatura comercial validada pela operação. O nome é reutilizado na legenda e na consulta. Não deduzir dados a partir dos rótulos pintados. Identificadores de trabalho: 01 Ariano/Familia Deicas; 02 Bayanegra/Mayor de Castilla; 03 Jean Claude Mas/Mon Grenache e Paul Mas/Syrah. Esses identificadores não foram publicados em HTML.

Loja: `storeUrl` deve permanecer nulo até confirmar e testar a URL HTTPS da loja externa. Ao preencher, aparece “Ver na loja”. Fotografias transacionais devem ser fiéis aos produtos.

Imagens: originais preservados em `assets/originals`. Versões WebP conservam proporções e transparência. Não ampliar nem substituir pessoas/garrafas. Ao trocar imagens, revisar todos os recortes, textos alternativos, dimensões e srcset.

Fontes: Cormorant Garamond e DM Sans locais, com licenças OFL copiadas do pacote anterior. Não há chamada para Google Fonts no navegador.

## Medição

A página dispara `CustomEvent('vino:interest', {detail: {event}})` exclusivamente local. Eventos: `view_experience` (uma vez por montagem e visibilidade), `click_whatsapp`, `click_catalog_inquiry`, `click_store` e `click_directions`. Nenhum provedor está instalado; nenhum ID foi inventado. Payload contém somente nome do evento, sem mensagem, URL ou dados pessoais. Cliques são interesse, não reservas nem receita. Para conectar analytics: definir finalidade, provedor, base aplicável e consentimento quando necessário; atualizar a política real antes de ativar. Nunca emitir `reservation_confirmed` por clique.

## Checklist antes de produção

- [ ] Aprovar composição e recortes no navegador em 360/390/768/1440 px; gerar capturas.
- [ ] Testar navegação com teclado, Escape no menu, foco, FAQ e movimento reduzido.
- [ ] Confirmar direito de uso das imagens, inclusive pessoas e imagem social.
- [ ] Confirmar endereço, horários, responsável pelo atendimento e dados de privacidade.
- [ ] Validar os cinco campos da ficha mestra e condições de reserva antes de anunciar oferta.
- [ ] Validar nomes comerciais e disponibilidade; usar fotos fiéis na loja transacional.
- [ ] Testar recebimento no número de WhatsApp com a operação, sem envio automático.
- [ ] Confirmar URL da loja e acesso ao Instagram/Maps nos dispositivos reais.
- [ ] Definir URL pública, hospedagem e autorização de publicação. O domínio anterior não teve acesso confirmado.
- [x] Configurados metadataBase/canonical, sitemap e robots para https://rsemsaco.github.io/vino_tobar_site/. Indexação habilitada nesta publicação autorizada.
- [ ] Adicionar imagem Open Graph autorizada e dados estruturados apenas com fatos confirmados.
- [ ] Rever privacidade conforme logs/serviços efetivamente utilizados.
- [ ] Rodar testes, typecheck e build; medir desempenho real, sem prometer métricas.
- [ ] Publicar somente após autorização. Publicação no GitHub Pages autorizada nesta etapa; sem configuração de Vercel ou domínio personalizado.

## Arquitetura comercial

Preservado: futuro Linktree → loja / site da experiência / WhatsApp. Não foi criado Linktree, checkout, carrinho, estoque, CMS, pagamento ou área de usuário.

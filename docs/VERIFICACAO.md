# Verificação — 17/10/2026

## Estado do repositório

Origem: https://github.com/rsemsaco/vino_tobar_site. Branch inicial main, commit 008a3f0d29d2e28362517badb5b68704a90c288d, apenas README. Checkout limpo, sem instruções AGENTS.md ou integrações presentes. Implementação isolada em feat/artistic-experience. Main preservada.

## Concluído

- Cinco imagens inspecionadas visualmente; sem setas/pontos de interface visíveis. Quatro quadradas 1254×1254; logo 2048×684. Dimensões e canal alpha em assets.json.
- Originais preservados; versões WebP responsivas, eager/high para encontro e lazy para catálogo.
- Fontes locais e licenças reutilizadas do pacote anterior.
- Next.js 16.4.2 confirmado no npm e documentação oficial; lockfile mantido.
- Build Next.js e TypeScript aprovados.
- Três testes de conteúdo aprovados: exclusão temporal/validação/fuso, número e codificação WhatsApp, ausência de ofertas pendentes.
- npm audit de dependências de produção: zero vulnerabilidades reportadas nesta execução.
- Contraste calculado da paleta opaca: carvão/marfim, oliva/marfim, texto secundário/marfim e carvão/vidro acima de 4,5:1. Transparências e estados renderizados ainda exigem revisão visual.
- Conteúdo sem preço, datas, estoque ou nomenclatura comercial inferida.
- Filtro da agenda executado a cada requisição; exibição em America/Sao_Paulo.
- Skip link, foco visível, menu com aria-expanded/aria-controls/Escape, FAQ nativa e reduced-motion implementados.
- Nenhum analytics externo, formulário, pagamento ou envio automático.

## Limitações reais

Não houve revisão renderizada em desktop/mobile nem capturas. O ambiente está em modo Sites managed-linux e não expõe a skill control-browser exigida para iniciar sua prévia. Nenhum servidor ou navegador alternativo foi improvisado. O código responsivo foi revisado, mas isso não comprova ausência de overflow, recortes inadequados ou problemas de foco em execução.

A prévia revisável é executável localmente pelo README; nenhum URL de prévia hospedada foi criado. Não há publicação de produção confirmada, nem alteração de contas ou domínio.

WhatsApp: número e mensagem validados estruturalmente por teste; não foi enviada mensagem nem confirmado o recebimento pela operação. A ferramenta de consulta não conseguiu abrir wa.me. Instagram retornou erro de acesso e vinotobar.com.br retornou timeout. Isso não prova indisponibilidade pública. Maps usa o endereço informado em link oficial de pesquisa; trajeto não foi validado no navegador.

Sem medição de Lighthouse/Core Web Vitals. Não há alegação de performance medida.

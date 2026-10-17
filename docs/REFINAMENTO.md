# Refinamento visual

A paleta, as fontes, a logo, os arquivos fotográficos, os textos comerciais e a arquitetura Pages foram preservados.

## Correção de leitura

Na versão anterior, a anotação “O vinho aproxima. A mesa reúne.” usava posição absoluta e rotação; sua caixa invadia a fotografia do encontro em desktop. As duas anotações agora ocupam uma faixa de legenda em fluxo normal, abaixo da fotografia. No celular, ficam empilhadas, sem reduzir a tipografia nem esconder os textos. A altura acompanha texto ampliado.

## Pintura e movimento

Uma máscara SVG vetorial leve, com bordas fragmentadas e traços de cerdas, aplica as cores já existentes nas laterais da abertura, transições, espaços do catálogo, casa, chamada final e rodapé. As camadas são decorativas, não capturam cliques e ficam atrás do conteúdo. Os originais recebidos não foram editados.

As entradas usam opacity/transform por 760 ms e diferenças de 80–120 ms entre elementos. Pinceladas entram em 900 ms; botões e links respondem em 220 ms e imagens em 260 ms. Não há movimento contínuo. A animação não altera dimensões ou o fluxo de layout. Todo o conteúdo é visível por padrão, sem JS e se o observador não executar. `prefers-reduced-motion` desativa entradas e microdeslocamentos.

## Revisão responsiva

`/vino_tobar_site/review/responsive.html` é uma ferramenta auxiliar de QA, sem link na navegação e com `noindex,nofollow`. Ela carrega o próprio site em iframe de 360, 390, 768 ou 1440 pixels reais de viewport. Quando necessário, apenas a apresentação externa do quadro é reduzida para caber na tela; o layout interno usa a largura escolhida.

Permite percorrer as seções, ampliar os textos a 150%/200%, pausar movimento e medir colisões entre caixas de texto e imagens, conteúdo fora da largura e rolagem horizontal. Pausar movimento é um teste de fallback visual, não substitui a emulação da preferência de sistema. A ferramenta não modifica o site persistido, não envia dados e não é um novo serviço.

Os resultados da execução em navegador e o estado do deploy são comunicados na entrega. Verificações automáticas de geometria complementam a inspeção visual; não garantem acessibilidade completa nem equivalem a teste em aparelho físico.

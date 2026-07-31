# 808 — Identidade Visual

## Conceito

**Inteligência operacional em movimento.**

A marca 808 representa um ecossistema que recebe eventos, organiza decisões e mantém toda a operação fluindo. O sistema visual não descreve restaurantes ou meios de pagamento. Ele comunica continuidade, precisão e evolução operacional.

## Símbolo: 808 Flow Mark

O símbolo é formado por quatro segmentos geométricos que constroem duas câmaras conectadas por um núcleo central.

- As duas câmaras representam os diferentes ambientes do ecossistema.
- Os vazios representam tecnologia invisível: a infraestrutura existe sem competir com a operação.
- O núcleo central representa o evento ativo atravessando o sistema.
- A construção sugere o número 8 sem depender de um numeral literal.
- A repetição modular permite reconhecer o símbolo em 16 px e ampliá-lo em fachadas ou materiais impressos.

O verde deve ocupar apenas o núcleo. Quando a reprodução exigir uma cor, todo o símbolo se torna monocromático.

## Wordmark

Na assinatura horizontal, `808` representa a plataforma e recebe maior peso. O nome do produto utiliza peso intermediário:

- **808**Pay
- **808**Live
- **808**Voxx
- **808**KDS

O símbolo nunca muda entre produtos. A arquitetura da família é construída exclusivamente pelo sufixo.

## Paleta

| Token | Hex | Uso |
|---|---|---|
| Carbon | `#09090B` | Fundo principal e versão monocromática |
| Graphite | `#18181B` | Superfícies e aplicações digitais |
| Surface | `#202024` | Elevação discreta |
| Line | `#3F3F46` | Bordas e divisores |
| Muted | `#A1A1AA` | Texto secundário |
| Mineral | `#F4F4F5` | Símbolo e texto principal |
| White | `#FAFAFA` | Realces editoriais |
| Pulse | `#22C55E` | Núcleo ativo e estados de energia |
| Pulse Soft | `#4ADE80` | Iluminação e movimento, nunca grandes massas |

Proporção recomendada em interfaces: **80% neutros escuros, 15% brancos/cinzas e até 5% verde**.

## Tipografia

- Display e comunicação de marca: **Inter Tight**, pesos 650–780.
- Produto e interfaces: **Inter**, pesos 400–700.
- Numerais e métricas: Inter com algarismos tabulares quando disponíveis.

Títulos utilizam tracking negativo e poucas linhas. Textos de interface preservam espaçamento neutro. Caixa-alta fica restrita a pequenos indicadores operacionais.

## Linguagem visual

1. Superfícies silenciosas, sem excesso de caixas.
2. Bordas sugeridas por luz, não por contornos pesados.
3. Verde reservado para o evento que está acontecendo agora.
4. Espaço negativo como parte ativa da composição.
5. Fluxos representados por progressão e continuidade, nunca por setas genéricas.
6. Imagens e mockups com luz controlada, carvão e materiais foscos.

## Motion

O movimento da 808 é contínuo e preciso. Não há bounce elástico ou efeitos chamativos.

- Controles: `160–260 ms`.
- Superfícies: `420–520 ms`.
- Narrativa e passagem de fluxo: `700–900 ms`.
- Curva principal: `cubic-bezier(0.16, 1, 0.3, 1)`.

O núcleo verde pode percorrer os segmentos do símbolo para indicar inicialização, sincronização ou carregamento. A animação deve concluir um ciclo e repousar; não deve pulsar indefinidamente em contextos institucionais.

## Área de proteção

Use como margem mínima a largura do núcleo central em cada lado do símbolo. Em assinaturas horizontais, a distância entre símbolo e wordmark é duas vezes essa unidade.

## Tamanho mínimo

- Símbolo digital: `16 px`.
- Símbolo impresso: `6 mm`.
- Assinatura horizontal digital: `96 px` de largura.
- Abaixo desses limites, use apenas o símbolo.

## Usos incorretos

- Não preencher todo o símbolo com verde na versão principal.
- Não aplicar sombras, bevel, contornos ou gradientes no símbolo.
- Não alterar a posição do núcleo.
- Não inclinar, esticar ou arredondar novamente a construção.
- Não inserir ícones setoriais dentro do símbolo.
- Não criar símbolos diferentes para cada produto.
- Não usar o wordmark sobre fundos sem contraste.

## Aplicações

- Aplicativo e favicon: ícone carvão com símbolo mineral e núcleo verde.
- Dashboard: assinatura horizontal mineral; núcleo indica estado ao vivo.
- Impressos e uniformes: versão monocromática.
- Cartões e adesivos: verniz localizado no símbolo ou núcleo, sem brilho neon.
- Redes sociais: símbolo isolado e composição editorial com grande espaço negativo.
- Loading: o núcleo percorre as quatro câmaras em sequência e retorna ao centro.

## Arquivos

- `assets/808-flow-mark.svg`: símbolo principal para fundos escuros.
- `assets/808-flow-mark-mono-dark.svg`: reprodução monocromática escura.
- `assets/808-flow-mark-mono-light.svg`: reprodução monocromática clara.
- `assets/808-flow-app-icon.svg`: ícone de aplicativo.
- `assets/808pay-logo-horizontal-dark.svg`: assinatura para fundos escuros.
- `assets/808pay-logo-horizontal-light.svg`: assinatura para fundos claros.
- `tokens.css`: tokens-base de cor, forma, tipografia e movimento.

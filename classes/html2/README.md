# HTML - Parte 2

---
## Na última aula...

- HTML e CSS são 2 das linguagens que usamos para criar páginas web
- Servidores web armazenam e servem páginas web. Navegadores recuperam e
  renderizam seu conteúdo baseado no HTML e no CSS
- **HTML** é uma abreviatura para HyperText Markup Language e é usado para
  **estruturar sua página web**
- **CSS** é uma abreviatura para Cascading Style Sheets e é usado para **controlar
  a apresentação (aparência)** do seu HTML

---
## Na última aula... (cont.)

- Um **elemento** é composto por uma tag de abertura, seu conteúdo e uma tag
  de fechamento: `<p>conteúdo</p>`
  - Alguns elementos são exceção, pois não têm conteúdo nem precisam ser
  fechados
    - `<img>`
    - `<br>`
- Tags de abertura (e.g., `<h1>`) podem conter atributos (e.g., `class='nome'`)

---
## Na última aula... (cont.)

- Toda página começa com uma tag `html`, que contém um cabeçalho -
  `head` - e um corpo - `body`
- O elemento de cabeçalho (`head`) contém meta-informações sobre a página
- O que se coloca no corpo (`body`) é o que se pode ver no navegador (todo
  o conteúdo da página)

---
## Na última aula... (cont.)

- A grande maioria do **espaçamento** (espaço, quebra de linha, _tabs_) é
  **ignorada** pelos navegadores, o que nos possibilita indentar o código para
  que fique mais legível
- Você especifica as características de aparência (cor, espaçamento, posição
  etc.) do seu arquivo HTML usando CSS
- Você pode adicionar CSS em um arquivo HTML dentro de um elemento `<style>`
  - Os elementos `<style>` devem estar sempre dentro do `<head>`

---
# Hoje vamos

- Aprender sobre plantas carnívoras
- Praticar `html`: imagens, hiperlinks, tabelas, citações
- Praticar `css`: _margin_, _inline_, _block_ etc.
- Exercícios 1, 2 e 3 a serem entregues ao final da aula via Moodle

---
# Atividade de Hoje

Você tem um novo _hobby_: **criar plantas carnívoras**. Você encontrou um documento
solto em um antigo livro do seu tio e, depois de lê-lo, decidiu **criar uma página
web com seu conteúdo**. Além disso, você também tem uma **pequena loja de sementes**
dessas plantas e deseja divulgá-la em uma página web.

<figure class="portrait">
  <img src="images/piranha-mario.png" alt="Planta carnívora do jogo Mario Bros">
</figure>

---
## Exercício 1

- Você deve pegar o [documento do seu tio][doc-tio] e criar uma página web com
  o mesmo conteúdo e formatação. Você pode salvar o arquivo como `plantas.html`.

- Você vai precisar saber como:
  - **incluir uma imagem** em `html`
  - incluir **hiperlinks** em `html`
  - incluir **2 tipos diferentes de citações** em `html`


[doc-tio]: https://docs.google.com/document/d/1uzLcB7UeaCLw4HQKvMHbJCeKHlNCmCxXm63GHWJVD8k/edit

---
## Exercício 1 (cont.)

Algumas informações sobre o documento do seu tio:
- Hiperlink no final do parágrafo 5 (_"Há mais de 500 espécies..."_):
  - lista extensa de espécies na Wikipedia: http://en.wikipedia.org/wiki/List_of_carnivorous_plants
- Imagens:
  - Dionaea: [link para baixar][dionaea]
  - Nepenthes: [link para baixar][nepenthes]

[dionaea]: http://www.infoescola.com/wp-content/uploads/2009/12/dionaea.jpg
[nepenthes]: http://www.infoescola.com/wp-content/uploads/2009/12/Nepenthes_villosa-225x300.jpg

---
## Exercício 2

Criar a página da loja seguindo [este modelo][loja] e usando
[esta tabela de preços][precos]. Depois de criada, salve o arquivo como
`loja.html`. Você deve também criar um hiperlink da página `plantas.html` para
sua nova `loja.html`.

[loja]: https://docs.google.com/document/d/1C9Lrug5MwR4WOxCgTaOoFwAyDjnI6LwBQYzyd15bBLM/edit
[precos]: https://docs.google.com/spreadsheets/d/1b6kCBYo_v07gK1qU1waAfgJaa7io0_v_oTdcLS3rez0/edit?usp=sharing

---
## Exercício 3

Agora que você já criou as duas páginas e estilizou as duas, deve ter criado
regras de formatação em `CSS` dentro de elementos `<style>` nas duas páginas.

Por exemplo, as regras da borda verde nas imagens está repetida nos dois
arquivos.

Para **evitar repetição de código**, é possível escrever código **`CSS` em um
arquivo separado** e **incluí-lo** em cada arquivo `html`:

(continua...)

---
## Exercício 3 (cont.)

- Em vez de:
  ```
    ...
    &lt;style&gt;
      ...
    &lt;/style&gt;
  &lt;/head&gt;
  ```
- Você pode:
  ```
    &lt;link rel="stylesheet" href="arquivo-de-estilos.css" /&gt;
  ```

- E mover suas regras `CSS` dentro de `<style>` para o novo `arquivo-de-estilos.css`.

---
# Referências

1. Capítulos 1, 2 e 3 do livro
1. [Artigo sobre plantas carnívoras do site InfoEscola][info-escola]
1. Darwin, C. [Insectivorous Plants][darwin-carnivoras]. John Murray, 1875.

[info-escola]: http://www.infoescola.com/plantas/plantas-carnivoras/
[darwin-carnivoras]: http://darwin-online.org.uk/content/frameset?itemID=F1217&viewtype=text&pageseq=1

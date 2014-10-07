# CSS - Parte 1

---
# Roteiro de hoje

1. História
1. A sintaxe
1. Classes e IDs
1. Seletores (Exercício)
1. A cascata (Exercício)

---
# A sintaxe

---
# História

<figure class="portrait">
  <img src="images/howcome.jpg" alt="Foto de Håkon Wium Lie">
  <figcaption>**Håkon Wium Lie**, "pai" do CSS</figcaption>
</figure>

---
## História

<dl>
  <dt class="bullet-old">1989 - 1993</dt><dd class="bullet-old">Tim Berners-Lee
    cria a WWW em CERN (_European Organization for Nuclear Research_) e a deixa
    aberta ao público geral</dd>
  <dt>1994</dt><dd>Håkon propõe uma linguagem para dar conta da responsabilidade
   de alterar a aparência de páginas web chamada CSS</dd>
  <dt>1996</dt><dd>Juntamente com Bert Bos, Håkon publica a especificação do
    **CSS1**</dd>
  <dt>1998</dt><dd>Já gerenciado pela W3C, a especificação do **CSS2** foi
  publicada</dd>
  <dt>1998 - 2014</dt><dd>Desenvolvimento da especificação do **CSS3** (_living
    standard_)</dd>
  <dt>2013</dt><dd>Håkon tornou-se CTO na _Opera Software_</dd>
</dl>

---
# Recapitulando a **sintaxe**

---
## Sintaxe: **regra**

![Regra CSS](images/css-rule.png)

---
## Sintaxe: **seletor** e **declaração**

![Regra CSS](images/css-selector.png)

---
## Sintaxe: **propriedade** e **valor**

![Regra CSS](images/css-property-value.png)

---
# Classes e IDs

---
## Classe

- Até agora, estilizamos elementos `html` da seguinte forma:
  ```css
  p {
    color: blue;
  }
  ```
  - Isso faz com que **todos** os parágrafos sejam estilizados com a cor azul
  - Como fazemos, então, para estilizar apenas um ou um subconjunto de
    parágrafos da forma como queremos?
    - Resposta: usando **classes**

---
## Classe (cont.)

- Dada a seguinte estrutura de um `&lt;body&gt;`:
  ```html
  <p>Primeiro</p>
  <p>Segundo</p>
  <p>Terceiro</p>
  ```
- Para criar uma regra `CSS` para, digamos, os dois primeiros parágrafos, podemos
  alterar a estrutura `html` para:
  ```html
  <p class="destacado">Primeiro</p>
  <p class="destacado">Segundo</p>
  <p>Terceiro</p>
  ```
- continua...

---
## Classe (cont.)

- E, em um arquivo `CSS`, podemos escrever o nome da _tag_, seguido por um ponto
   "`.`", seguido pelo nome da classe:
  ```css
  p.destacado {
    font-weight: bold; /* negrito */
  }
  ```
- Ou, se quisermos usar a classe `destacado` para outros elementos que não
  `<p></p>`, podemos omitir o nome da _tag_:
  ```css
  .destacado {
    font-weight: bold;
  }
  ```

---
## ID

- Caso soubermos que um elemento deve aparecer apenas uma vez no arquivo `html`
  (por exemplo, o menu principal, o logotipo etc.), podemos usar **um
  identificador único** que chamamos de **id**
  ```html
  <img src="..." id="logotipo">
  ```
- Para criar uma regra `CSS` para esse elemento, podemos utilizar seu id
  precedido por `#`, opcionalmente precedido pelo nome da _tag_:
  ```css
  #logotipo {
    width: 250px;
  }
  ```

---
# Seletores

---
## Seletores

- Até agora, já sabemos selecionar elementos:
  1. Pelo nome de sua _tag_
  1. Por (uma de) suas classes
  1. Por seu id
- Contudo, a vida não para por aí...

---
## Seletor: **Descendente**

- Formato: `X Y`
- Exemplo
  ```css
  li a {
    text-decoration: none;
  }
  ```
- Descrição: seleciona todos os elementos `a` que têm um `li` como antecedente

---
## Seletor: **Filho** direto

- Formato: `X` &gt; `Y`
- Exemplo
  ```
  #menu-principal > ul {
    padding: 20px;
  }
  ```
- Descrição: seleciona todos os elementos `ul` que têm `#menu-principal` como
  elemento pai

---
## Seletor: **Adjacente**

- Formato: `X + Y`
- Exemplo
  ```css
  ul + p {
    color: red;
  }
  ```
- Descrição: seleciona o `p` que é imediatamente antecedido por um `ul`

---
## Seletor: **Irmão**

- Formato: `X ~ Y`
- Exemplo
  ```css
  ul ~ p {
    color: red;
  }
  ```
- Descrição: seleciona todos os `p`s que aparecem no mesmo nível de um `ul`,
  após este último

---
## Seletor: por **Atributo**

- Formato: `X[atributo]`
- Exemplo
  ```css
  img[alt] {
    border: 1px solid blue;
  }
  ```
- Descrição: seleciona toda `img` que contém o atributo `alt`

---
## Seletor: por **valor** de **atributo**

- Formato: `X[atributo="valor"]`
- Exemplo
  ```css
  a[href="http://google.com/"] {
    color: blue;
  }
  ```
- Descrição: seleciona todo `a` que tem um atributo `href` igual a http://google.com/

---
## Seletor: por **trecho de valor** de **atributo**

- Formato: `X[atributo*="trecho"]`
- Exemplo
  ```css
  a[href*="goo"] {
    color: white;
  }
  ```
- Descrição: seleciona todo `a` cujo atributo `href` contenha a _string_ `"goo"`

---
## Seletor: por **trecho inicial de valor** de **atributo**

- Formato: `X[atributo^="trecho"]`
- Exemplo
  ```css
  a[href^="http"] {
    background: url(globo.png) no-repeat;
  }
  ```
- Descrição: seleciona todo `a` cujo atributo `href` comece com a _string_
  `"http"`

---
## Seletor: por **trecho final de valor** de **atributo**

- Formato: `X[atributo$="trecho"]`
- Exemplo
  ```css
  img[src$=".jpg"] {
     color: red;
  }  
  ```
- Descrição: seleciona toda `img` cujo atributo `src` termine com a _string_
  `".jpg"`

---
## Seletor: elemento **no estado selecionado**

- Formato: `X:checked`
- Exemplo
  ```css
  input[type="radio"]:checked {
     border: 1px solid black;
  }  
  ```
- Descrição: seleciona o elemento _radio_ em seu estado "marcado"

---
## Seletor: **after** e **before**

- Formato: `X:after` ou `X:before`
- Exemplo
  ```css
  a:before {
    content: " ";
    width: 20px;
    background: url(globe.png) no-repeat;
  }
  ```
- Descrição: seleciona (e cria) um elemento anterior (`before`) ou posterior
  (`after`) quaisquer `a`s

---
## Seletor: **hover**

- Formato: `X:hover`
- Exemplo
  ```css
  tr:hover {
    background-color: red;
  }
  ```
- Descrição: seleciona o estado "com mouse em cima" do elemento (no caso, `tr`s)

---
## Seletor: **Negação**

- Formato: `X:not(seletor)`
- Exemplo
  ```css
  p:not(.destacado) {
    color: gray;
  }
  ```
- Descrição: seleciona todos os elementos (`p`) que não passem pelo teste do
  `seletor` (têm a classe `destacado`)

---
## Seletor: **pseudo elemento**

- Formato: `X::pseudoElemento`
- Exemplo
  ```css
  p::first-letter {
    font-size: 5em;
  }
  ```
- Descrição: seleciona um fragmento (`first-letter`) do elemento (`p`)

---
## Outros seletores

- `X:nth-child(n)`
- `X:nth-last-child(n)`
- `X:nth-of-type(n)`
- `X:nth-last-of-type(n)`

---
## Outros seletores (cont.)
- `X:first-child`
- `X:last-child`
- `X:only-child`
- `X:only-of-type`
- `X:first-of-type`

---
## **Exercício 1**

1. Dando continuidade 

---
# A Cascata

---
## Cascata

-

---
# Referências

1. Capítulo 7 do livro
1. [Os 30 seletores CSS que você precisa memorizar (inglês)][css-selectors-30]

[css-selectors-30]: http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048
[Print a Book in CSS]: http://alistapart.com/article/boom

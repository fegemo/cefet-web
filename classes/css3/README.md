# CSS - Parte 3

---
## Na última aula (cont.)

- Podemos precisar agrupar alguns elementos logicamente semelhantes ou por
  questões de estilização
- Podemos usar os elementos `div` (`block`) e `span` (`inline`) para criar
  grupos
  ```html
  <div>
    <h1>Título</h1>
    <h2>Subtítulo</h2>
  </div>
  ```

---
# Na última aula...

- Aprendemos sobre o **_box model_**
  - Todo elemento de conteúdo (dentor do `body`) é representado por uma caixa
  - Podemos especificar, para a caixa
    - Espaço do conteúdo
    - Espaço de preenchimento (`padding`)
    - Borda (`border`)
    - Espaço externo (`margin`)
  - Quando definios `width` ou `height`, estamos definindo o tamanho do
    **conteúdo**, e não da caixa inteira
  - É possível alterar o significado de `width` e `height` usando `box-sizing`

---
## Na última aula (cont.)

- Aprendemos que os elementos podem flutuar
  ```css
  img#principal {
    float: left; /* right, none */
  }
  ```
  - Elementos flutuantes alteram o fluxo dos elementos posteriores
    - `blocks` fingem que os flutuantes não estão ali
    - `inlines` adequam sua forma aos flutuantes

---
# Roteiro de hoje

1. Divitite - doença e cura com **_tags_ semânticas**
1. Propriedade **background**
1. Propriedade **border**
1. Cores e gradientes
1. Layout e posicionamento (introdução)

---
# Divitite e _Tags_ Semânticas

---
## Divitite

- Sintomas
  - Um acúmulo grande de elementos `div` e `span` aninhados
- Muitas páginas Web usam `div`/`span` como, por exemplo:
  ```html
  <div id="header">...</div>
  <div id="footer">...</div>
  <div class="article">...</div>
  <span class="time">...</div>
  <div id="navigation">...</div>
  ```

---
![](../../images/divitities.png)

---
## A cura da Divitite: **_tags_ semânticas**

- O Dr. html5 propôs elementos idênticos às `divs`/`spans`, mas que possuem
  sentido para o navegador. Por exemplo:
  ```html
  <header></header>
  <footer></footer>
  <article></article>
  <time></time>
  <nav></nav>
  ```

---
## Elementos semânticos (1/3)

- [`<header></header>`](http://www.w3.org/TR/html-markup/header.html)
  - Cabeçalho da página ou de seções (`section`) ou artigos (`article`)
- [`<footer></footer>`](http://www.w3.org/TR/html-markup/footer.html)
  - Análogo ao `header`, porém recomendado para que contenha informação típica
    de um rodapé de página
- [`<article></article>`](http://www.w3.org/TR/html-markup/article.html)
  - Um componente "completo" (ou auto-contido) da página
    - Em um blog, seria um _post_
    - Em uma loja, seria um produto

---
## Elementos semânticos (2/3)

- [`<section></section>`](http://www.w3.org/TR/html-markup/section.html)
  - Uma seção lógica da página, tipicamente contendo um título
- [`<nav></nav>`](http://www.w3.org/TR/html-markup/nav.html)
  - Uma seção da página que contenha _links_ de navegação
  - Exemplos:
    - O menu principal da página
    - Tabela de conteúdo (<abbr title="Table of Contents">TOC</abbr>) com
      _links_ internos

---
## Elementos semânticos (3/3)

- [`<aside></aside>`](http://www.w3.org/TR/html-markup/aside.html)
  - Uma seção de conteúdo periférico na página
  - Exemplos:
    - Barras laterais
    - _Widgets_ periféricos
    - Conteúdo à parte do principal
- [`<time></time>`](http://www.w3.org/TR/html-markup/time.html) (`inline`)
  - Representa uma data e/ou horário
- [`<mark></mark>`](http://www.w3.org/TR/html-markup/mark.html) (`inline`)
  - Representa uma marcação no texto (tipo <mark style="background-color: yellow">caneta marcadora</mark>)

---
## Elementos semânticos **pré-html5**

- [`<address></address>`](http://www.w3.org/TR/html-markup/address.html)
- [`<abbr title=""></abbr>`](http://www.w3.org/TR/html-markup/abbr.html)
- [`<blockquote></blockquote>`](http://www.w3.org/TR/html-markup/blockquote.html), [`<q></q>`](http://www.w3.org/TR/html-markup/q.html)
- [`<cite></cite>`](http://www.w3.org/TR/html-markup/cite.html)
- [`<code></code>`](http://www.w3.org/TR/html-markup/code.html)
- [`<kbd></kbd>`](http://www.w3.org/TR/html-markup/kbd.html)
- E outros...

---
# Layout e posicionamento

---
## Layout e posicionamento

- Além do fluxo normal visto na última aula, também podemos dar fluxos alternativos
   aos elementos
  - Propriedades envolvidas:
    - ```css
      position: static; /* relative, absolute, fixed */
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      z-index: 1;
      ```
---
## **position**

- `static`
  - Comportamento padrão. O elemento é posicionado no fluxo normal.
  - As propriedades `left`, `right`, `top`, `bottom` e `z-index` são ignoradas
- `absolute`
  - O elemento não tem espaço reservado para ele. Em vez disso, ele fica
    exatamente na posição especificada por `left`, `right`, `top`, `bottom`
    relativo ao seu mais próximo antecessor posicionado
  - Margens se aplicam, porém elas não fazem _margin collapse_ com outras

---
## **position** (cont.)

- `relative`
  - O elemento continua no fluxo normal, a menos que tenha suas propriedades
    `left`, `right`, `top` e `bottom` ajustadas.
  - A posição do elemento será ajustada com relação à sua posição original (
    caso ele fosse `static`)
  - Os elementos posteriores **não são ajustados** para ocupar eventuais
    "buracos" na página
- `fixed`
  - Bem semelhante ao `absolute`, porém o elemento é ajustado na posição
    `left`, `right`, `top`, `bottom` **no espaço da tela** (_viewport_), e não
    da página

---
## **top, right, bottom e left**

- Usadas para definir a posição (offset) do elemento
- Sua interpretação depende de qual valor de `position` estamos usando para aquele elemento

---
## **z-index**

- Define a ordem "no eixo Z" com a qual elementos que se tocam deve ser exibida
- Útil apenas para elementos `position: absolute` ou `position: fixed`

---
# Referências

- Capítulo 12 do livro
- [Capítulo _semantics_](http://diveintohtml5.info/semantics.html) do livro
  diveintohtml5.org
- [Propriedade **position** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Um breve e interessante tutorial sobre posicionamento](http://learnlayout.com/position.html)
- [Origem da cor `rebeccapurple`](http://lists.w3.org/Archives/Public/www-style/2014Jun/0312.html)

# CSS - Parte 4

---
# Roteiro de hoje

1. Criar a página da <span style="font-family: Ravie, serif; color: #e90c0c">Lanchonete do Coral 55</span>
1. Layout e posicionamento
1. A propriedade **line-height**
1. A propriedade **display**
1. Centralizando as coisas
1. Alterando a visibilidade

---
<h2 style="font-family: Ravie, serif; color: #e90c0c">Lanchonete do Coral 55</h2>

<img class="portrait" src="../../images/siri.png" style="border: 1px solid rgba(0,0,0,.2)" alt="Bolhas de ar na água">

---
## <abbr title="Comprehensive Layout">Comp</abbr> / <abbr title="Specifications">Specs</abbr>

[![](../../images/coral55-comp-thumb.png)](../../images/coral55-comp.png)
[![](../../images/coral55-specs-thumb.png)](../../images/coral55-specs.png)

---
## Passos para o exercício

1. Instalar o git na máquina, caso ele não esteja instalado
1. Criar um _fork_ do repositório do professor em `https://github.com/fegemo/cefet-web-coral55`
1. Fazer o exercício e fazer _commits_ e _push_ no seu repositório
1. Enviar, via **Moodle**, o link do seu repositório até o final da aula

---
## Detalhes sobre o exercício

1. O objetivo é treinar **_Layout_ e posicionamento** em `CSS`
  - `position`, `float`, `clear` etc.
1. O _layout_ que usamos no exercício dos Unicórnios se chama **fluido**. Hoje,
   você vai fazer um **_layout_ de tamanho fixo**
   1. O conteúdo da página deve ter `800px` de largura e deve estar centralizado

---
# _Layout_ e posicionamento

---
## _Layout_ e posicionamento (recapitulando)

- Vimos que o navegador **posiciona** elementos `block` e elementos `inline`
  usando algumas **regras de fluxo**
  - `block`s são colocados de cima para baixo e ocupam toda a largura
  - `inline`s são dispostos da esquerda para a direita
- Podemos alterar a posição de elementos de algumas formas
  - `width`, `height`
  - `margin`
  - `float`, `clear`
- Contudo, se quisermos um controle maior sobre a posição dos elementos,
  precisamos sair do fluxo padrão do navegador

---
## _Layout_ e posicionamento

- A propriedade `position` possibilita definir que tipo de fluxo um elemento
  terá
- O valor `static` equivale ao fluxo padrão do navegador e é o valor inicial de
  qualquer elemento
- Outros valores são:
  - `position: relative;`
  - `position: absolute;`
  - `position: fixed;`

---
## Posição estática

- Valor padrão - usa o posicionamento do fluxo padrão
  ```html
  <div class="estatico">Conteúdo</div>
  ```
  ```css
  .estatico {
    position: static;
  }
  ```
- Resultado
  <div style="position: static; border: 3px dashed rebeccapurple">Conteúdo</div>

---
## Posição relativa

- O elemento é posicionado como se estivesse no fluxo padrão, mas pode ser
  **deslocado** com as propriedades `top`, `right`, `bottom` e `left`
  ```html
  <div class="relativo1">Comporta-se como static.</div>
  <div class="relativo2">Mas pode ter um deslocamento.</div>
  ```
  ```css
  .relativo1 { position: relative; }
  .relativo2 { position: relative; width: 50%;
               left: 30px; top: -10px; }
  ```
- Resultado:
  <div style="position: relative; border: 3px dashed rebeccapurple; background: white;">Comporta-se como <code>static</code>.</div>
  <div style="position: relative; width: 50%; left: 30px; top: -10px; border: 3px dashed green; background: white;">Mas pode ter um deslocamento.</div>

---
## Posição absoluta

- O elemento é posicionado de acordo com os valores das propriedades `top`,
  `right`, `bottom` e `left`, considerando como ponto de partida **o ancestral
  mais próximo que é posicionado não estaticamente** (`relative`, `absolute` ou
  `fixed`)
- Não ocupa espaço, já que o elemento é removido do fluxo
  ```html
  <div class="relativo">Este é um recipiente relativo.
    <div class="absoluto">Este é absoluto.</div>
  </div>
  ```

---
## Posição absoluta (cont.)

- ```css
  .relativo { position: relative; }
  .absoluto { position: absolute; width: 50%;
               right: 30px; bottom: 10px; }
  ```
- Resultado:
  <div style="position: relative; height: 150px; border: 3px dashed rebeccapurple; background: white">Este é um recipiente relativo.
    <div style="position: absolute; right: 30px; bottom: 10px; border: 3px dashed green; background: white">Este é absoluto.</div>
  </div>

---
## Posição fixa

- O elemento é posicionado de acordo com os valores das propriedades `top`,
  `right`, `bottom` e `left`, assim como `absolute`, porém **seu ponto de
  partida é o canto superior esquerdo da _viewport_ (tela)
- Não acompanha a rolagem da página
- Não ocupa espaço, já que o elemento é removido do fluxo
  ```html
  <div class="fixo">Este é um elemento fixo.</div>
  ```

---
## Posição fixa (cont.)

- ```css
  .fixo { position: fixed; right: 0; bottom: 10px; }
  ```
- Resultado:
  <iframe width="100%" height="300" src="http://jsfiddle.net/fegemo/s01Lc3a8/2/embedded/result,html,css,js/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

---
# A propriedade **line-height**

---
## A propriedade **line-height** ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height))

- Define a altura de uma linha de texto.
- Inicialmente, `line-height: 1em;`, mas qualquer valor de medida de tamanho
  pode ser usado
  - Exemplo:
    ```css
    .espacamento-simples { line-height: 1em; }
    .espacamento-duplo   { line-height: 2em; }
    ```

    <p style="float: left; width: 45%; line-height: 1em; height: 100px; overflow: auto; border: 3px solid black">
      Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Curabitur mauris eros, fermentum eget dolor sit amet.</p>

    <p style="float: right; width: 45%; line-height: 2em; height: 100px; overflow: auto; border: 3px solid black">
    Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Curabitur mauris eros, fermentum eget dolor sit amet.</p>

---
# A propriedade **display**

---
## A propriedade **display** (na [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display))

- Define o **tipo de visualização** de um elemento e também seu
  **comportamento** no fluxo da página
- Os valores mais comuns
  - `block`, para definir um elemento com comportamento `block`
  - `inline`, similarmente, para `inline`
  - `inline-block`, similar a `block`, porém sem quebra de linha
  - `none`, sem renderização
- Ao todo, são 25 valores, dos quais apenas 15 são suportados pelos principais
  navegadores (Outubro/2014)

---
## A propriedade **display** (cont.)

- É possível, por exemplo:
  ```css
  div { display: inline; }
  span { display: block; }
  ```

  - Mas é claro que você não vai fazer isso... :)
- Para remover um elemento do fluxo e não renderizá-lo de forma alguma:
  ```css
  a[href*="xxx"] { display: none; }
  ```

---
## Display: **inline-block**

- Une a capacidade de se definir dimensões de `block` e a possibilidade de ter
  um fluxo lateral (sem quebra de linha), como `inline`
- Exemplo:
  ```html
  <div class="passo">1<br>Instalar</div>
  <div class="passo">2<br>Aprender</div>
  <div class="passo">3<br>Programar</div>
  ```
  ```css
  .passo { display: inline-block; width: 150px;
          height: 100px; /* ... */ }
  ```

---
## Display: **inline-block**

- Resultado:

  <style>.passo { display: inline-block; width: 150px; height: 150px; border: 2px inset rebeccapurple; background: rgba(255, 255, 255, .5); font-size: 26px; font-family: "Comic Sans MS"; text-align: center; line-height: 50px; border-radius: 75px; }</style>
  <div class="passo">1<br>Instalar</div>
  <div class="passo">2<br>Aprender</div>
  <div class="passo">3<br>Programar</div>

---
## Display: **table-* **

- Alguns valores são para a criação de _layouts_ em formato de tabelas:
  - `table, table-cell, table-column, table-column-group, table-footer-group,
     table-header-group, table-row, table-row-group, inline-table`


---
# Centralizando as coisas

---
## Centralizando horizontalmente

- Existem várias formas para centralizar elementos que se aplicam a situações
  diferentes
- Centralizando conteúdo `inline`:
  ```css
  .centraliza { text-align: center; }
  ```
- Centralizando um elemento com largura definida
  ```css
  .centraliza-definida { margin: 0 auto; }
  ```

---
## Centralizando horizontalmente (cont.)

- Centralizando um elemento com `position` `absolute` ou `fixed`
  ```css
  .centraliza-position { left: (LARGURA_P - LARGURA_E)/2; }
  ```
  - Onde `LARGURA_P` é a largura do recipiente e LARGURA_E é a largura
    conhecida do elemento que queremos centralizar
- Centralizando um elemento com `position` `absolute` ou `fixed` em um
  recipiente fluido (largura pode variar)
  ```css
  .centraliza-fluido { left: 50%; margin-left: -(LARGURA_E / 2); }
  ```
- [Um guia sobre como centralizar qualquer elemento no site designshack.net](http://designshack.net/articles/css/how-to-center-anything-with-css/)

---
# Alterando a visibilidade

---
## Usando **display**

- É possível tornar um elemento invisível usando `display: none;`
- O elemento é **removido do fluxo**, ou seja, o espaço onde ele seria
  posicionado é liberado
- ```css
  img#logotipo {
    display: none;
  }
  ```

---
## A propriedade **visibility** ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility))

- Usada para alterar a visibilidade de elementos
- ```css
  img#logotipo {
    visibility: hidden; /* visible */
  }
  ```
- Os elementos invisíveis (`hidden`) continuam ocupando espaço
- Descendentes de elementos invisíveis herdam o valor `hidden`, mas podem
  tornar-se visíveis usando `visibility: visible;`

---
## A propriedade **overflow** ([na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow))

- Controla se conteúdo que extrapola o elemento deve ser cortado, se deve ser
  mostrado ou se deve ser criada uma barra de rolagem
- ```css
  div {
    overflow: scroll; /* visible, hidden, scroll, auto */
  }
  ```

---
# Referências

- Capítulo 11 do livro
- [Propriedade **line-height** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [Propriedade **display** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [Propriedade **visibility** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility)
- [Propriedade **overflow** na MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow)
- [Um breve e interessante tutorial sobre posicionamento](http://learnlayout.com/position.html)
- [Técnicas para alinhamento vertical na smashingmagazine.com](http://www.smashingmagazine.com/2013/08/09/absolute-horizontal-vertical-centering-css/)

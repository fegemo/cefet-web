<!-- {"layout": "title"} -->
# **JavaScript** parte 2
## JS no navegador, DOM, Eventos e o Espaço 👽

---
<!-- {"layout": "centered"} -->
# Roteiro de hoje

1. [JavaScript no navegador](#javascript-no-navegador)
1. [O DOM](#o-dom)
   1. Seleção de elementos
   1. Alteração de atributos
   1. Alteração de conteúdo
   1. Alteração de classes
1. [Eventos](#eventos)
1. [Exploração Espacial 👽](#exploracao-espacial)

---
<!-- {"layout": "section-header", "hash": "javascript-no-navegador"} -->
# JavaScript no navegador
## API do navegador

1. Objeto `window`
1. Utilitários
1. Objetos notáveis em `window`
<!-- {ol:.content} -->

---
<!-- {"hash": "o-objeto-global-window"} -->
# O objeto global: **window**

- O navegador **expõe um único objeto** por janela chamado `window`
- Ele possui informações e utilidades sobre a janela corrente.
  Exemplos:
  ```js
  window.alert('mensagenzinha feia 🔥');                  // retorna undefined
  window.confirm('janela pedindo confirmacao');           // retorna true, false
  window.prompt('escreva seu nome, champz', 'b. verde');  // retorna uma string
  ```
  ```js
  // url, título, opções
  window.open('/popup.html', 'Enquete', 'resizable,scrollbars');  // #feioDemais!
  ```

---
## O objeto global: **window** (cont.)

- Mais algumas utilidades de **window**
  ```js
  window.setTimeout(f, 200);   // chama daqui a 200ms, 1x. retorna um id do timer
  window.setInterval(f, 1000); // chama a cada 1s, forever. retorna um id
  window.clearTimeout(id);
  window.clearInterval(id);
  ```
  ```js
  window.eval('window.alert("eval is evil!");');    // nao fazer em casa
  ```
  - `window.eval(textoComCodigo)` executa o `textoComCodigo` que é uma String que pode conter código JavaScript

---
## Objetos notáveis dentro de **window**

- Além de utilidades, o objeto `window` também possui outros objetos muito
  importantes
  - **`window.document`**
   - Acesso à estrutura `html` da página
  - `window.navigator`
    - Acesso a características do navegador
  - `window.console`
    - Objeto de acesso à saída de terminal
  - `window.history`
    - Funções de manipulação do histórico da página (botões Voltar/Avançar)

---
## Objetos notáveis dentro de **window** (cont.)

- Mais alguns objetos:
  - `window.Math`
    - **Funções matemáticas**
  - `window.JSON`
    - Funções de conversão entre string e JSON
  - `window.localStorage`
    - _Cache_ de informações locais à página
  - `window.sessionStorage`
    - _Cache_ com duração de apenas uma sessão
  - `window.location`
    - Informações acerca do endereço da página

*[JSON]: JavaScript Object Notation*

---
# Convenção: omitir ~~window~~

- Como o objeto `window` é o único objeto global, **podemos acessar
  suas propriedades <u>sem usar `"window."`</u>** :scream:. Por exemplo:
  ```js
  window.console.log('JS >> Python');
  ```
  É o mesmo que:
  ```js
  console.log('JS >> Python');    // sucesso!!
  ```
- Podemos omitir `window` para que o código fique menorzinho

---
<!-- {"layout": "section-header", "hash": "o-dom"} -->
# O DOM
## Dando comportamento à página

- Conhecendo o DOM
- Selecionando elementos
- Navegando na árvore
- Alterando o DOM
  - Atributos
  - Conteúdo
  - Classes
<!-- {ul^1:.content} -->
*[DOM]: Document Object Model

---
<!-- {"hash": "conhecendo-o-dom"} -->
# Conhecendo o DOM

- O DOM é uma **visão dos elementos** HTML da página **como uma árvore**:
- <!-- {.code-split-2.compact-code} -->
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>HTML</title>
  </head>
  <body>
    <!-- Add your content here -->
  </body>
  </html>
  ```
  ![](../../images/dom-tree.svg) <!-- {.full-width} -->
- DOM: _Document Object Model_
  - É a versão "viva" do código HTML da página 
*[DOM]: Document Object Model*

---
<!-- {"classes": "compact-code-more"} -->
## O objeto **document**

- O objeto `document` dá acesso ao **Document Object Model**, ou DOM <!-- {ul:.bulleted-0} -->
- DOM !== código fonte
  - É a visão viva da árvore de elementos HTML gerada pelo navegador
  - Vivo: pode ser alterado, interagido, aumentado/reduzido
- Ao interagir com o DOM, precisamos de uma referência ao elemento
  - Por exemplo, para pegar um elemento a partir de seu `id`:
    ```js
    let botaoDeliciaEl = document.querySelector('#botao-delicia');
    ```
    - Agora é possível fazer várias coisas com o botão, como:
      1. Associar um evento de clique
      1. Pegar ou alterar seus atributos
      1. Alterar seu conteúdo (texto)
      1. Alterar suas classes ou estilo

---
<!-- {"hash": "recuperando-elemento-dom"} -->
# Selecionando um elemento

- A função `document.querySelector(seletor)` permite que, a partir de um código
  JavaScript, recuperemos uma referência a um elemento do DOM
  - Ela recebe um único **argumento** que é um **seletor CSS**. Exemplo:
    ```js
    let logoEl = document.querySelector('#logomarca');
    let tabelaEl = document.querySelector('#tesouros-pirata');
    let principalEl = document.querySelector('main');
    ```
    - Ela retorna um elemento HTML com que podemos interagir
  - Também existe `document.querySelectorAll(seletor)` (repare o **`all`**),
    que retorna mais de um elemento

---
<!-- {"hash": "evento-clique"} -->
# **Exemplo**: clique em um botão

- Para **executar alguma coisa quando um botão** (ou qualquer elemento, na verdade)
  **é clicado**, precisamos **registrar uma função para ser chamada** quando um
  clique for feito nele:
  ```js
  // recupera o elemento do botão no DOM
  let botaoDeliciaEl = document.querySelector('#botao-delicia');

  // atrela uma função ao evento de 'click' do botão
  botaoDeliciaEl.addEventListener('click', function() { /* ... */ });
  ```
  - Chamamos essa função de **_callback_**

---
## Exemplo de _callback_

- Uma _callback_ é só um nome especial para quando uma função passada
  como argumento:
  ```js
  // recupera o elemento do botão no DOM
  let botaoDeliciaEl = document.querySelector('#botao-delicia');

  // atrela uma callback ao evento de 'click' do botão
  botaoDeliciaEl.addEventListener('click', function() {
    alert('O botão delícia foi clicado!!');
    // pode fazer várias coisas aqui
  });
  ```
- Mas e se quisermos selecionar vários elementos? <!-- {ul:.bulleted-0} -->

---
<!-- {"hash": "selecionando-varios-elementos"} -->
# Selecionando vários elementos <small>(1/3)</small>

- O `document.querySelector` retorna **apenas 1 elemento**
  - Se tiver mais de um, retorna o primeiro encontrado
- O `document.querySelectorAll` retorna **todos** que forem selecionados:
  ```js
  let inputs = document.querySelectorAll('input');  // retornou um 'NodeList'
                                                    // com todos inputs da página

  console.log(`Quantidade de inputs na página: ${inputs.length}`);
  let primeiroInputEl = inputs[0];
  ```

---
## Selecionando vários elementos <small>(2/3)</small>

- Para **atribuir um evento a todos** os elementos retornados:
  ```js
  let imagens = document.querySelectorAll('img');  // retornou um 'NodeList'

  // INCORRETO: um NodeList não possui um método "addEventListener"
  imagens.addEventListener('click', function() { });

  // CORRETO: cada item do NodeList (array) é um elemento HTML, logo,
  // possui a propriedade "addEventListener"
  for (let imagemEl of imagens) {
    imagemEl.addEventListener('click', function() { });
  }
  ```

---
<!-- {"embeddedStyles": ".codigos-com-pouco-espaco-vertical pre { margin-top: 0.2em !important;}"} -->
## Selecionando vários elementos <small>(3/3)</small>

- <!-- {ul:.compact-code.bulleted-pre} -->
  Um `NodeList` é **"praticamente um _array_"** - ele possui os métodos essenciais: 
  ```js
  let inputs = document.querySelectorAll('input');      // inputs é um 'NodeList'
  ```
- <!-- {.no-bullets.codigos-com-pouco-espaco-vertical style="margin-top: 1em;"} -->
  ```js
  // propriedade .length (igual um array)
  console.log(`Quantidade de elementos: ${inputs.length}`);
  ```
  ```js
  // método 'forEach' (igual um array)
  inputs.forEach(function(el) {
    // ...
  });
  ```
  ```js
  // pegando um elemento como se fosse um array
  let primeiroEl = inputs[0];
  ```

---
## `NodeList` vs Vetor

- Um **`NodeList`** é praticamente um _array_, mas **não possui todos os métodos**. Por exemplo:
- <!-- {.code-split-2.compact-code-more} -->
  ```js
  umNodeList.length        ✅
  umNodeList[5]            ✅
  umNodeList.forEach(...)  ✅

  umNodeList.indexOf(...)  ❌
  umNodeList.sort()        ❌
  umNodeList.reverse()     ❌
  umNodeList.filter()      ❌
  umNodeList.find()        ❌
  ```
  ```js
  umVetor.length          ✅
  umVetor[5]              ✅
  umVetor.forEach(...)    ✅
  
  umVetor.indexOf(...)    ✅
  umVetor.sort()          ✅
  umVetor.reverse()       ✅
  umVetor.filter()        ✅
  umVetor.find()          ✅
  ```
- Se quiser transformar um `NodeList` em um vetor, use<br>`vetor = Array.from(umNodeList)`:
  ```js
  let todosParagrafos = document.querySelectorAll('p');   // é um 'NodeList'
  todosParagrafos = Array.from(todosParagrafos);          // agora é um 'Array'
  ```

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
# Caminhando na árvore

---
<!-- {"classes": "compact-code-more"} -->
## DOM como uma árvore

- Cada elemento do DOM é chamado de **nó** (_node_) (estrutura de árvore)
- O tipo de cada elemento "herda" de um tipo chamado [`HTMLElement`][mdn-html-element]
- É possível acessar os atributos HTML dos elementos:
  - `id`
    ```js
    console.log(calcularEl.id);
    ```
  - `class`
    ```js
    console.log(menuEl.className); // className equivale a class
                                   // - não pode 'class' pq é reservado em js
    ```
    - Mas usar `el.classList` é melhor (mais adiante)
  - qualquer atributo:
    ```js
    console.log(logoEl.src);
    ```

*[DOM]: Document Object Model*
[mdn-html-element]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

---
## Caminhando pela árvore

- É possível fazer um caminhamento pela árvore toda ou começando a partir de
  um nó específico
  - Por exemplo: você pode querer visitar todos os nós para excluir textos
    proibidos ('Bolossauro', 'Bolsonauro', 'Biroliro')
- Se for necessário percorrer a árvore, pode-se usar **apontadores para filhos,
  pais e irmãos de cada nó**
  - <!-- {ul:.code-split-2.no-bullets.no-padding.no-margin.compact-code-more} -->
    ```js
    no.firstChild;            // primeiro filho
    no.lastChild;             // último filho
    no.childNodes;            // array de filhos
    no.nextSibling;           // próximo irmão
    no.previousSibling;       // irmão anterior
    no.parentNode;            // nó pai
    ```
  - ```js
    no.firstElementChild;       // primeiro filho
    no.lastElementChild;        // último filho
    no.children;                // array de filhos
    no.nextElementSibling;      // próximo irmão
    no.previousElementSibling;  // irmão anterior
    no.parentElement;           // nó pai
    ```
- ⬆️ considera todos tipos de nós&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;⬆️ apenas nós de elementos 

---

::: figure .figure-slides.clean.centered
![](../../images/dom-traversal.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![](../../images/dom-traversal-2.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
![](../../images/dom-traversal-3.png) <!-- {.bullet.figure-step.bullet-no-anim} -->
:::

---
<!-- {"layout": "centered-horizontal"} -->
## Exemplo: imprimindo o nome das _tags_

```js
function caminhaNoDOM(no, visitaNo) {
  visitaNo(no);
  no = no.firstChild;
  while (no) {
    caminhaNoDOM(no, visitaNo);
    no = no.nextSibling;
  }
}

function imprimeNomeDaTag(no) {
  // apenas imprime o nome da tag (e.g., BODY, H1, P)
  console.log(no.tagName);
}

function substitui(no) {
  // se for um nó de texto da árvore, substitui seu textContent
  if (no.nodeType === Node.TEXT_NODE) {
    no.textContent = no.textContent.replace(/antigo/g, 'novo');
  }
}

// chama o algoritmo de caminhamento com a função de visita
// imprimindo o nome da tag corrente
caminhaNoDOM(document.body, imprimeNomeDaTag);
```

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
# Alterando o DOM

---
<!-- {"backdrop": "oldtimes"} -->
## Anatomia de uma _tag_

![Anatomia de uma tag mostrando que ela consiste de seu nome envolto por sinais de "menor que" e "maior que"](../../images/anatomia-tag.svg) <!-- {p:.flex-align-center.invert-colors-dark-mode} -->

- Tags de abertura podem ter **atributos**:
  ```html
  <img src="bob-esponja.png">
  ```
  - Em `<img>`, o atributo `src="..."` aponta para a URL do arquivo
  - **Não deve haver espaço** entre seu nome e seu valor:
    - `<img src = "...">` <span style="color: red">:thumbsdown:</span>
    - `<img src="...">` <span style="color: green">:thumbsup:</span>



---
<!-- {"hash": "alterando-o-conteudo"} -->
# Alterando **conteúdo** <small>(1/2)</small>

- É possível alterar atributos dos nós: <!-- {ul:.compact-code} -->
  ```html
  <a href="/contato" id="link-contato">...</a>
  ```
  ```js
  let lingua = 'port';
  const texto = {
    'port': 'Página de Contato',
    'ingl': 'Contact Us'
  }
  const linkContatoEl = document.querySelector('#link-contato');
  linkContatoEl.innerHTML = texto[lingua];
  ```

---
# Alterando **o conteúdo** <small>(2/2)</small>

- É possível **alterar o conteúdo** <!-- {.alternate-color} --> de um elemento com `elemento.innerHTML`:
  <iframe width="250" height="130" src="//jsfiddle.net/fegemo/wLp3kv59/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right" style="clear: right;"></iframe>
  <iframe width="250" height="153" src="//jsfiddle.net/fegemo/wLp3kv59/embedded/html/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right" style="clear: right;"></iframe>

  ```js
  let contador = 0;
  let contadorEl = document.querySelector('#contador');
  
  // quando clicado, (1) conta e (2) altera conteúdo
  contadorEl.addEventListener('click', () => {
    contador++;                       // (1) conta
    contadorEl.innerHTML = contador;  // (2) altera
  });
  ```

---
<!-- {"hash": "alterando-atributos"} -->
# Alterando **atributos**

- É possível **alterar atributos** <!-- {.alternate-color} --> dos elementos:
  ```html
  <img src="imgs/pikachu.png" id="pokemon-lutando">
  ```
  ```js
  let pokemonEl = document.querySelector('#pokemon-lutando');
  pokemonEl.src = 'imgs/bulbasaur.png';        // alteramos o 'src'
  ```
  - Aqui, alteramos o atributo `src` da `img`, mas poderia ser qualquer um
    - Por exemplo, em `input` costumamos pegar/alterar o `value`
      ```js
      inputEl.value = 'novo valor';
      ```

---
<!-- {"hash": "colocando-removendo-classes"} -->
# Colocando/removendo **classes**

- É possível **colocar ou remover classes** <!-- {.alternate-color} --> de elementos: <!-- {ul:.bulleted} -->
  ```js
  botaoEl.classList.add('selecionado');   // coloca .selecionado
  imageEl.classList.remove('oculta');     // remove .oculta
  pEl.classList.toggle('expandido');      // coloca ou tira .expandido
  ```
  - <iframe width="250" height="170" src="//jsfiddle.net/fegemo/wbq109xg/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0" class="push-right bring-forward"></iframe>
    Isso pode ser usado, por exemplo, para ↘<br>"marcar" elementos
    <!-- {li:.bring-forward} -->
  - Ou então pra fazer um menu lateral aparecer...

---
<!-- {"layout": "2-column-content-zigzag"} -->
## **Exemplo**: definindo "quem está selecionado"

<iframe width="340" height="200" style="width: 340px" src="//jsfiddle.net/fegemo/wbq109xg/embedded/result,js,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>    

- **Marca/desmarca** elemento. Ideia: <!-- {ul:.bullet style="width: calc(100% - 340px)"} -->
  - No evento de `'click'` de cada um:
    1. Alterna a classe `.selecionado` do elemento que foi "clicado"
       - `el.classList.toggle('selecionado')`

<iframe width="340" height="200" style="width: 340px" src="//jsfiddle.net/fegemo/8nsjhgga/embedded/result,js,css/" allowfullscreen="allowfullscreen" frameborder="0" class="bullet"></iframe>    

- **Apenas 1** elemento selecionado por vez. Ideia: <!-- {ul:.bullet style="width: calc(100% - 340px)"} -->
  - No evento de `'click'` de cada um:
    1. Tira a classe `.selecionado` de todos
    1. "Re"coloca a classe no elemento "clicado"

---
<!-- {"layout": "2-column-content", "hash": "menu-lateral"} -->
## **Exemplo**: um menu lateral aparecer

<iframe width="100%" height="400" src="//jsfiddle.net/fegemo/dj37kc7e/embedded/result,html,js,css/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

- No HTML:
  ```html
  <body>
    <nav id="menu">...</nav>
    <main>...</main>
  </body>
  ```
- No JavaScript, alterna a classe `.menu-visivel` no `<body>`
- No CSS, desloca tudo para a direita quando o `<body>` tem `.menu-visivel`


---
<!-- {"layout": "section-header", "hash": "eventos"} -->
# Eventos
## Programação dirigida por eventos

- Tipos
- Associando funções
- Tópicos avançados
  - Borbulhamento
  - Cancelando bolha
  - Comportamento padrão

<!-- {ul^1:.content} -->
---
## Eventos

- Eventos são **atrelados a nós específicos** e causam a invocação de uma função
  "manipuladora" (_event handler_ ou apenas _handler_)
- Eventos de mouse:
  - `click`
  - `dblclick`
  - `mousedown`
  - `mouseup`
  - `mousemove`
  - `mouseover`
  - `mouseout` <!-- {ul:.multi-column-list-4}-->
- Eventos de entrada de dados:
  - `change`
  - `blur`
  - `focus`
  - `keydown`
  - `keyup`
  - `reset`
  - `submit` <!-- {ul:.multi-column-list-4}-->
- (Muitos) outros tipos: [Eventos na MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

---
## _Event handlers_

- Há 2 formas de atribuir _handlers_ a eventos
  - Forma clássica (e feia :thumbsdown:)
    ```js
    el.onclick = function(e) { /*...*/ };
    ```
    - Foi a única forma por muitos anos
    - Permite apenas um _handler_ por tipo de evento
  - Forma bacana :thumbsup:: <!-- {li:.bullet} -->
    ```js
    el.addEventListener('click', funcao);
    ```
    - Analogamente, para desregistrar uma função: <!-- {ul:.bullet} -->
      ```js
      el.removeEventListener('click', funcao);

---
## Associando **mesma _callback_** para **vários elementos**

- É bastante comum associarmos uma mesma função (_callback_) a algum evento de vários elementos HTML diferentes <!-- {ul:.bulleted} -->
  - Como no exercício: _callback_ de `'click'` em TODOS os parágrafos
  - <!-- {.code-split-2.compact-code-more} -->
    - <!-- {ul:.no-bullets.no-padding} -->
      ```html
      <p>Parágrafo 1</p>
      <p>Parágrafo 2</p>
      <p>Parágrafo 3</p>
      ```
      ::: result .example-ps.bullet
      <style>.example-ps p {font-size: 0.8em}</style>
      <p onclick="this.style.background='lightblue'">Parágrafo 1</p>
      <p onclick="this.style.background='lightblue'">Parágrafo 2</p>
      <p onclick="this.style.background='lightblue'">Parágrafo 3</p>
      :::
    ```js
    function colore() {
      let el = ??; // <-- quem colocar aqui??
      el.style.background = 'lightblue';
    };

    let ps = document.querySelectorAll('p');
    for (let pEl of ps) {
      pEl.addEventListener('click', colore);
    }
    ```
- Dentro da _callback_, é possível saber **qual elemento foi <u>alvo do evento</u>**! <!-- {u:.underline.upon-activation.delay-1600} -->
  - Precisamos usar o **argumento de evento**! (Próximo slide)

---
<!-- {"hash": "argumento-de-click"} -->
# Quem disparou o evento?

- Quando o navegador executa uma _callback_ de eventos, ele passa um parâmetro com  **informações sobre o evento** <!-- {ul:.compact-code} -->
  - Tipicamente damos o nome de `e`, `evt` ou `event`:
    - <!-- {ul:.no-bullets.no-padding.bulleted} -->
      ```js
      let ps = document.querySelectorAll('p');  // igualzinho antes!
      for (let pEl of ps) {
        pEl.addEventListener('click', colore);
      }
      ```
    - ```js
      function colore(e) {                  // repare o argumento 'e' (evento)
        let el = e.currentTarget;           // <--- o elemento "alvo" do evento
        el.style.background = 'lightblue';  // colore parágrafo alvo do evento
      }
      ```

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
# Eventos: tópicos avançados

---
## _Event Bubbling_ (Borbulhas de Amor)

- Quando um evento é disparado em um elemento (e.g., clique), não apenas ele
  mas **os _handlers_ do mesmo tipo <u>de todos os ancestrais do elemento</u>
  também são acionados**
- Isso é chamado de **_event bubbling_**
- [Exemplo](http://jsfiddle.net/fegemo/r61r5sLy/)
  - Repare que há 3 `divs`, uma dentro da outra e cada uma tem um
    _click handler_
  - O clique na interna dispara o próprio evento, mas também das externas

---
## Por que borbulhar?

- Considere que você tem 100 objetos arrastáveis (_drag'n'drop_)
  - Você pode colocar um _handler_ em cada um (100x)
  - Ou você pode colocar o _handler_ no container deles (1x) e usar a informação
    do evento (`evt.target`) para saber qual objeto arrastável foi clicado
- Exemplos de situação:
  1. Google Spreadsheets
     - Poderia colocar 1 evento em cada célula (mas fica custoso)
     - Então, coloca-se apenas no pai delas

---
## Cancelando a bolha

- Um _handler_ deve cancelar o borbulhamento do evento caso queira que ele pare
  de borbulhar. Utiliza-se `e.stopPropagation()`:
  ```js
  function fechaPainelModal(e) {
    // "fecha" (torna invisível) o painel modal
    modal.style.display = 'none';
    // evita que o clique no botão fechar seja processado pelos
    // handlers de cliques dos elementos ancestrais  
    e.stopPropagation();
  }
  botaoFechar.addEventListener('click', fechaPainelModal);
  ```
- [Exemplo](https://jsfiddle.net/fegemo/r61r5sLy/3)

---
## Impedindo a ação padrão

- Elementos de entrada (`input`) e alguns outros elementos possuem
  **ações padrão**. Por exemplo:
  - Botão `submit` &#8594; envia o formulário
  - Botão `reset` &#8594; limpa os campos preenchidos
- É possível cancelar a ação padrão usando `e.preventDefault()`:
  ```js
  function validaFormulario(e) {
    if (nome === '' || senha === '') {
      // Houve erros no formulário. Impedir o envio
      e.preventDefault();
    }
  }
  botaoEnviarEl.addEventListener('submit', validaFormulario);
  ```

---
<!-- {"layout": "section-header", "hash": "exploracao-espacial"} -->
# Exploração Espacial 👽
## Conhecendo o além-atmosfera

- Atividade de hoje
- Que elemento foi clicado?
- Subindo na árvore do DOM
- Alternando uma classe
<!-- {ul:.content} -->

---
<!-- {"backdrop": "space"} -->

---
## Exploração Espacial 👽

- Crie a página da **Exploração Espacial** :alien:
  - [Repositório no GitHub](https://github.com/fegemo/cefet-web-space)
    para fazer seu _fork_
- Há 3 exercícios:
  1. Formulários e equação
  1. Galeria de fotos e imagens da sonda Osiris-Rex
  1. Expandir/retrair parágrafos

---
<!-- {"hash": "subindo-na-arvore", "classes": "compact-code-more"} -->
# Subindo na árvore do DOM <small>(1/2)</small>

- Todo elemento do DOM conhece, na árvore, quem é:
  1. seu pai (**`elemento.parentNode`** ou `elemento.parentElement`)
  1. seus filhos (`elemento.childNodes` ou `elemento.children`)
  1. irmão anterior e irmão posterior
- Exemplo: clicou numa `<img> `, mas quero a `<div></div>` que é "pai" dela:
  ```js
  function clicouNaImagem(e) {
    let clicadoEl = e.currentTarget;          // a <img> que foi clicada
    let divEl = clicadoEl.parentNode;         // <--- <div> é o pai da <img>
    console.log(divEl.id);                    // imprime id da div
  }

  let imgEl = document.querySelector('div > img');
  imgEl.addEventListener('click', clicouNaImagem);
  ```

---
<!-- {"classes": "compact-code-more"} -->
# Subindo na árvore do DOM <small>(2/2)</small>

- Há outra forma de subir, mais recente e mais segura: `el.closest(seletor)` <!-- {ul:.bulleted-0} -->
- Ela seleciona o ancestral mais próximo de `el` que atenda ao `seletor`:
  - <!-- {ul:.code-split-2.no-margin.no-bullets.no-padding} -->
    ```html
    <article class="produto" id="produto-456"> ⬅️
      <div>
        <img src="..." alt="...">
      </div>
    </article>
    ```
  - <!-- {.bullet} -->
    ```js
    function imagemProdutoClicado(e) {
      const imgEl = e.currentTarget;
      const produtoEl = imgEl.closest('.produto');
      console.log(produtoEl.id); // produto-456 ⬅️
    }
    ```
- Exemplo subindo e descendo:
  - <!-- {ul:.code-split-2.no-margin.no-bullets.no-padding} -->
    ```html
    <article class="produto">
      <h3 class="nome">Bolsa caríssima</h3> ⬅️
      <div>
        <img src="..." alt="...">
      </div>
    </article>
    ```
  - <!-- {.bullet} -->
    ```js
    function imagemProdutoClicado(e) {
      const imgEl = e.currentTarget;
      const produtoEl = imgEl.closest('.produto');
      const nomeEl = produtoEl.querySelector('.nome')
      console.log(nomeEl.innerHTML); // Bolsa caríssima
    }
    ```

---
<!-- {"hash": "alternando-uma-classe", "classes": "compact-code"} -->
# Alternando uma classe

- Às vezes queremos colocar/remover uma classe em um elemento **alternadamente**
- Para isso, existe o `elemento.classList.toggle('nome-da-classe')`
- Além de colocar/remover a classe, **o método retorna**:
  - `true` se tiver colocado a classe
  - `false` se tiver removido a classe
  ```js
  let colocou = booEl.classList.toggle('selecionado');
  console.log(colocou);         // imprime 'true', porque adicionou .selecionado
  colocou = booEl.classList.toggle('selecionado');
  console.log(colocou);         // imprime 'false', porque tirou .selecionado
  ```

---
<!-- {"layout": "centered"} -->
# Referências

- Livro "Javascript: The Good Parts" (Douglas Crockford)
- [Mozilla Developer Network](https://developer.mozilla.org/)

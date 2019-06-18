<!-- {"layout": "title"} -->
# Javascript parte 7
## ECMAScript 2015+

---
## Agenda

- Breve histórico do JavaScript
- Novas funcionalidades
  - Parâmetros _default_
  - Operadores _rest_ e _spread_
  - _Destructuring_
  - _String templates_
  - Promessas
  - Async/await
  - Módulos
- Executando novas funcionalidades hoje

---
# Breve histórico

1995
  ~ Brendan Eich criou JS para o Netscape

1996, Agosto
  ~ Micro$oft criou o JScript no IE e no IIS 3.0

1996, Novembro
  ~ Netscape enviou para a Ecma International -> ECMAScript

1997, Junho
  ~ ECMAScript 2

1999, Dezembro
  ~ ECMAScript 3

2009, Dezembro
  ~ ECMAScript 5

2011, Junho
  ~ ECMAScript 5.1

2014
  ~ ECMAScript 6

2015
  ~ ECMAScript 2015

2016
  ~ ECMAScript 2016+


---
<!--
{
  "scripts": ["../../scripts/classes/item-cloud.min.js"],
  "styles": ["../../styles/classes/item-cloud.min.css"],
  "layout": "regular"
}
-->

# Visão geral de funcionalidades

- Escopo de bloco
- Classes
- Parâmetros _default_
- _Destructuring_
- Operadores _Rest_ e _Spread_
- _Arrow functions_
- _Quasi-literals_
- _Generators_
- Módulos
- Promessas

<!-- {ul:data-state="itemcloud"} -->

---
<!-- {"layout": "regular"} -->
# **Valores Padrão** para Argumentos

- Como fazemos em ES5:  <!-- {ul:.compact-code-more} -->
  ```js
  function contarEstoria(lang, year) {
    return (lang || 'C') + ' foi criada em ' + (year || 1972);
  }
  ```
- Mas em ES6, podemos:
  ```js
  function contarEstoria(lang = 'C', year = 1972) {
    return lang + ' foi criada em ' + year;
  }
  ```

---
<!-- {"layout": "regular"} -->
# <small>Operadores</small> **Rest** e Spread

- Como podemos criar uma lista HTML, dado um array de Strings?  <!-- {ul:.compact-code-more} -->
  ```js
  function criaListaHTML() {
    const itens = Array.prototype.slice.call(arguments),
    return '<li>' + itens.join('</li><li>') + '</li>';
  }
  criaListaHTML('Mario', 'Yoshi', 'Toad');
  ```
- Em ES6, podemos usar o **operador rest** em vez de **`arguments`**:
  ```js
  function criaListaHTML(...itens) {
    return '<li>' + itens.join('</li><li>') + '</li>';
  }
  ```

---
<!-- {"layout": "regular"} -->
# <small>Operadores</small> Rest e **Spread**

- Como instanciar um objeto data a partir de 3 inputs (day, month, year)?  <!-- {ul:.compact-code-more} -->
  ```js
  const day = getDateDay(),
      month = getDateMonth(),
      year = getDateYear();
  const d = new Date(year, month, day);
  ```
- Em ES6, podemos usar o **operador spread**:
  ```js
  const dateFields = getDateFieldsValues(),
      d = new Date(...dateFields);
  ```

---
<!-- {"layout": "regular"} -->
## <small>Operadores</small> Rest e Spread

- O operador **rest** transforma um parâmetro em um _array_ de valores
- O operador **spead** transforma um "_array_ de valores" em
  "valores separados por vírgula"
  ```js
  const pets = ['rat', 'dragon', 'bee'];

  console.log(pets[0], pets[1], pets[2])  // rat dragon bee
  console.log(...pets);                   // rat dragon bee
  ```

---
<!-- {"layout": "2-column-content", "embeddedStyles": "#yay + pre {max-height:76%;}"} -->
# Destructuring <small>um objeto</small>

- Às vezes queremos que uma função tenha 1+ valores de retorno
- Ou então um função que espera um objeto que possua um certo formato
<!-- {ul:id="yay"} -->

```js
function desenhaGrafico({size = 'big', coords = { x: 0, y: 0 }, radius = 25} = {}) {
  console.log(size, coords, radius);
  // desenha aqui...
}

desenhaGrafico({
  coords: { x: 18, y: 30 },
  radius: 30
});




// do jeito old...
function desenhaGraficoES5(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var coords = options.coords === undefined ? { x: 0, y: 0 } : options.coords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, coords, radius);
  // desenha aqui...
}

desenhaGraficoES5({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

---
<!-- {"layout": "regular"} -->
## Destructuring _arrays_

- Decapitando um _array_: <!-- {ul:.compact-code} -->
  ```js
  const [head, ...tail] = [1, 2, 3, 4];
  console.log(tail);                    // imprime [2, 3, 4]
  ```
  - Usa **destructuring** + o operador **spread**
- Trocando o valor de 2 variáveis sem usar uma terceira:
  ```js
  let a = 1;
  let b = 3;

  [a, b] = [b, a];                      // a=3, b=1
  ```

---
## String templates <small>(quasi-literals)</small>

- Você já viu isto?
  ```js
  const tom = Math.random() * 155 + 100;
  const cor = 'rgb('+ tom  +', ' + tom + ', ' + tom + ')';
  ```
- Há uma forma melhor:
  ```js
  const tom = Math.random() * 155 + 100;
  const cor = `rgb(${tom}, ${tom}, ${tom})`;
  ```
- Isto se chama _**string interpolation**_

---
## String templates <small>(quasi-literals)</small> (cont.)

- E isto:
  ```js
  console.log('Cart total: R$ ' + (quantity * unitPrice) + ',00');
  ```
- Se torna:
  ```js
  console.log(`Cart total: R\$ ${quantity * unitPrice},00`);
  ```
- É possível colocar uma expressão, não apenas 1 variável

---
## Multilinhas com String templates

- Fazendo com que uma **literal string** possa ser **representada em
  várias linhas**:
<div class="layout-split-2" style="height: auto;">
  <section style="border-right: 4px dotted silver; background: aliceblue;">
    <h3>Em ES5:</h3>
    <pre style="text-align: left; ">
      <code class="hljs">var poema = [
    'Cavei, cavei, cavei',
    'Isto não é um poema',
    'Mas é profundo.']
      .join('\n');</code>
    </pre>
  </section>
  <section style="background: darkseagreen;">
    <h3>Em <strong>ES6</strong>:</h3>
    <pre style="text-align: left;">
      <code class="hljs">const poema =
  `Cavei, cavei, cavei
   Isto não é um poema
   Mas é profundo.`;</code>
    </pre>
  </section>
</div>

---
## String templates

Forma geral:

```js
tag`literal${substitution}literal`
```

...onde a _tag_ é uma função que pode pós-processar o template depois que
a substituição acontece.

Veja mais em: [A critical review of ES6 quasi-literals](http://www.nczonline.net/blog/2012/08/01/a-critical-review-of-ecmascript-6-quasi-literals/#content)

---
## String templates

- Prós
  - Criação de strings mais elemgante e expressiva
  - Strings multilinha
  - Facilita a criação de DSLs
- Contras
  - As variáveis interpoladas devem estar no mesmo escopo
    ```js
    const msg = `Hello, ${place}`;    // dá erro
    ```
  - Não é possível externalizar (e.g., para outro arquivo) as strings


---
<!-- {"layout": "regular"} -->
# Promessas

Problema
  ~ quando precisamos realizar várias chamadas assíncronas, podemos
    ter um **_callback hell_**: várias _callbacks_ aninhadas
    - Dificulta a leitura e escrita do código
    - Suscetível a erros do programador
    - Tratar erros deve ser feito por _callback_, dificultando
      a legibilidade/manutenibilidade do código

Solução
  ~ uso de promessas

---
<!-- {"layout": "regular"} -->
## _Callback Hell_

- Imprimir (4) todas as "pessoas" (3) da mesma espécie do (2) primeiro
  residente do (1) planeta Naboo (planeta `id=8`)

```js
sendAjax('https://swapi.co/api/planets/8', result => { // Planet Naboo
  sendAjax(result.residents[0], result => { // R2-D2
    sendAjax(result.species, result => { // Droid
      // pega todas as "pessoas" dessa espécie
      for (let person of result.people) {
        sendAjax(person, result => {
          // C-3PO, R2-D2, R5-D4, IG-88, BB8
          console.log(result.name);
        });
      }
    });
  });
});
```

---
<!-- {"layout": "regular"} -->
## Solução com **Promises**

- Imprimir (4) todas as "pessoas" (3) da mesma espécie do (2) primeiro
  residente do (1) planeta Naboo (planeta `id=8`)

```js
sendAjax('https://swapi.co/api/planets/8')        // Naboo
  .then(result => sendAjax(result.residents[0]))  // R2-D2
  .then(result => sendAjax(result.species))       // Droid
  .then(result => Promise.all(result.people.map(person => sendAjax(person))))
  .then(result => console.log(result.name)) // C-3PO, R2-D2, R5-D4, IG-88, BB8
  .catch(result => console.error(`Errored: ${result}`));
```

- A API Fetch ![Logo do HTML5](../../images/html5-logo-32.png) substitui
  a XMLHttpRequest, **usando promessas** <!-- {img:style="height: 1em;"} --> <!-- {ul:style="margin-top: 0"} -->

---
<!-- {"layout": "regular"} -->
## Definição de **Promise**

- Uma **promise** é um objeto "_thenable_", _i.e._, podemos invocar `.then`,
  passando uma função que só será chamada quando a promessa for cumprida
  (com êxito ou falha)
  - `.then(callbackSuccess, callbackError)` pode receber 2 funções
  - ...ou podemos usar `.catch` para tratar o erro de uma "_promise chain_"
    de forma genérica
- É possível criar objetos do tipo `Promise` de forma que nós definimos
  quando elas estão resolvidas (com sucesso ou falha)
  - Próximo slide

---
<!-- {"layout": "regular"} -->
## Criando uma **Promise** (exemplo)

- Exemplo: mostrar uma notícia apenas quando o texto e as informações
  dos jornalistas foram buscados: <!-- {ul:.compact-code-more} -->

  ```js
  // criando a promessa
  const dadosDaNoticiaProntos = new Promise((resolve, rejeita) => {
    fetch('https://noticias.com/politica/ultima-noticia')
      .then(resposta => resposta.json())
      .then(noticia =>
        fetch(`https://jornalista.com/${noticia.jornalista}`).
          .then(jornalista => ({ noticia, jornalista }))
      )
      .then(dadosNoticiaEJornalista => resolve(dadosNoticiaEJornalista))
      .catch(rejeita);
  });

  // usando a promessa:
  dadosDaNoticiaProntos.then(mostraNaPagina, mostraErro);
  ```

---
# Usando novos recursos hoje

---
## _Can I Use_ caniuse.com?

- Ainda hoje, nenhum navegador suporta todas as funcionalidades do ES6
- Existe uma tabela curada que mostra a compatibilidade por _feature_:
  ![](../../images/es2016-compatibility-table.png) <!-- {.block.centered style="height: 240px;"} -->

- Veja na [ECMAScript 6 _compatibility table_](http://kangax.github.io/es5-compat-table/es6/) do Kangax
- Veja na [ECMAScript 2016+ _compatibility table_](http://kangax.github.io/es5-compat-table/es2016plus/) do Kangax

---
## Usando novos recursos hoje

- Podemos usar um **_transpiler_** para transformar ES6+ em ES5!!
- O mais usado hoje em dia é o [babel](https://babeljs.io/), que bastante
  agilmente implementa os _specs_ ES6
  ![](../../images/babel-logo.svg) <!-- {.block.centered style="height: 240px;"} -->
- Aqui está a
  [lista de funcionalidades](https://babeljs.io/docs/learn-es2015/#ecmascript-6-features)
  suportadas pelo babel

---
# Funcionalidades não cobertas

- ES Modules
- Generators
- Async/await

---
# Aprenda mais

1. [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)
1. [Use ECMAScript 6 Today, at tutsplus.com](http://code.tutsplus.com/articles/use-ecmascript-6-today--net-31582)
1. [Examples of use of let, const and optional params](http://peter.michaux.ca/articles/javascript-is-dead-long-live-javascript)
1. [ECMAScript 6 compatibility table](http://kangax.github.io/es5-compat-table/es6/)
1. [ES6 Classes](http://www.2ality.com/2012/07/esnext-classes.html)

---
## Aprenda mais ainda

1. [ES6 Modules](http://www.infoq.com/news/2013/08/es6-modules)
1. [A Critical Review of quasi-literals](http://www.nczonline.net/blog/2012/08/01/a-critical-review-of-ecmascript-6-quasi-literals/)
1. [Destructuring Assignment in ECMAScript 6](http://fitzgeraldnick.com/weblog/50/)

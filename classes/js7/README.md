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
  ~ ~~ECMAScript 6~~

2015
  ~ ECMAScript 2015

2016
  ~ ECMAScript 2016

2017
  ~ ECMAScript 2017

---
<!--
{
  "scripts": ["../../scripts/classes/item-cloud.min.js"],
  "styles": ["../../styles/classes/item-cloud.min.css"]
}
-->

# Visão geral de funcionalidades

- Escopo de bloco
- Classes
- Parâmetros _default_
- _Destructuring_
- Operadores _Rest_ e _Spread_
- _Arrow functions_
- _Maps_ e _Sets_
- _Quasi-literals_
- _Generators_
- Módulos
- Promessas

<!-- {ul:data-state="itemcloud"} -->

---
# **Valores Padrão** para Argumentos

- Como fazemos em ES5:
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
# <small>Operadores</small> **Rest** e Spread

- Como podemos criar uma lista HTML, dado um array de Strings?
  ```js
  function criaListaHTML() {
    var itens = Array.prototype.slice.call(arguments),
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
# <small>Operadores</small> Rest e **Spread**

- Como instanciar um objeto data a partir de 3 inputs (day, month, year)?
  ```js
  var day = getDateDay(),
      month = getDateMonth(),
      year = getDateYear();
  var d = new Date(year, month, day);
  ```
- Em ES6, podemos usar o **operador spread**:
  ```js
  var dateFields = getDateFieldsValues(),
      d = new Date(...dateFields);
  ```

---
## <small>Operadores</small> Rest e Spread

- O operador **rest** transforma um parâmetro em um _array_ de valores
- O operador **spead** transforma um "_array_ de valores" em
  "valores separados por vírgula"
  ```js
  var pets = ['rat', 'dragon', 'bee'];

  console.log(pets[0], pets[1], pets[2])  // rat dragon bee
  console.log(...pets);                   // rat dragon bee
  ```
  - Executar no [es6fiddle](http://www.es6fiddle.net/huktq4ed/)

---
# Destructuring

- Decapitando um _array_:
  ```js
  let [head, ...tail] = [1, 2, 3, 4];
  console.log(tail);                    // imprime [2, 3, 4]
  ```
  - Usa **destructuring** E o operador **spread**
- Trocando o valor de 2 variáveis sem usar uma terceira:
  ```js
  let a = 1;
  let b = 3;

  [a, b] = [b, a];                      // a=3, b=1
  ```

---
## Destructuring <small>um objeto</small>

```js
let musica = {
  titulo: 'The Scarecrow',
  artista: 'Avantasia',
  album: {
    titulo: 'Scarecrow',
    data: '2006'
  }
};

function registrarMusicaEscutada(
  {
    titulo,
    artista,
    album: {
      data: ano
    }
  }) {

  console.log('Título: ' + titulo);
  console.log('Artista: ' + artista);
  console.log('Ano: ' + ano);
};

registrarMusicaEscutada(musica);
/*
Título: The Scarecrow
Artista: Avantasia
Ano: 2006
*/
```

---
## String templates <small>(quasi-literals)</small>

- Você já viu isto?
  ```js
  var tom = Math.random() * 155 + 100;
  var cor = 'rgb('+ tom  +', ' + tom + ', ' + tom + ')';
  ```
- Há uma forma melhor:
  ```js
  var tom = Math.random() * 155 + 100;
  var cor = `rgb(${tom}, ${tom}, ${tom})`;
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
      <code class="hljs">var poema =
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
  var msg = `Hello, ${place}`;    // dá erro
  ```
  - Não é possível externalizar (e.g., para outro arquivo) as strings


---
# Usando novos recursos hoje

---
## _Can I Use_ caniuse.com?

- Ainda hoje, nenhum navegador suporta todas as funcionalidades do ES6
- Existe uma tabela curada que mostra a compatibilidade por _feature_:
  ![](../../images/es6-compatibility-table.jpg) <!-- {.small-height.block} -->

- Veja na [ECMAScript 6 _compatibility table_](http://kangax.github.io/es5-compat-table/es6/) do Kangax
- Veja na [ECMAScript 2016+ _compatibility table_](http://kangax.github.io/es5-compat-table/es2016plus/) do Kangax

---
## Usando novos recursos hoje

- Podemos usar um **_transpiler_** para transformar ES6+ em ES5!!
- O mais usado hoje em dia é o [babel](https://babeljs.io/), que bastante
  agilmente implementa os _specs_ ES6
  ![](../../images/babel-logo.svg) <!-- {.small-height.block} -->
- Aqui está a
  [lista de funcionalidades](https://babeljs.io/docs/learn-es2015/#ecmascript-6-features)
  suportadas pelo babel

---
# Funcionalidades não cobertas

## Alto impacto

- ES Modules
- Promises
- Generators
- Annotations
- Async/await

---
# Funcionalidades não cobertas

## Não tão impactantes

- Maps and Sets
- Computed Property Names
- Symbols
- Object Initializer Shorthand

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
1. [ES6 Fiddle](http://www.es6fiddle.net/)
1. [A Critical Review of quasi-literals](http://www.nczonline.net/blog/2012/08/01/a-critical-review-of-ecmascript-6-quasi-literals/)
1. [Destructuring Assignment in ECMAScript 6](http://fitzgeraldnick.com/weblog/50/)

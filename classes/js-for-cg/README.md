<!-- {"layout": "title"} -->
# **JavaScript** para Computação Gráfica
## Aprofundando na Linguagem

---
<!-- {"layout": "centered"} -->
# Hoje veremos...

1. [Tipos de Dados, Variáveis e Operadores](#tipos-de-dados-variaveis-e-operadores)
1. [Condicionais, Vetores e Repetição](#condicionais-vetores-e-estruturas-de-repeticao)
1. [Criando objetos com Classes](#criando-objetos-com-classes)
1. [Módulos](#modulos)
1. [Promessas, Async/Await](#promessas-async-await)

---
<!-- {"layout": "section-header", "hash": "tipos-de-dados-variaveis-e-operadores"} -->
# Tipos de Dados, Variáveis e Operadores
## Elementos da Linguagem JavaScript

- Tipos de dados
- Declarando variáveis
- Operadores
<!-- {ul:.content} -->

---
<!-- {"hash": "criando-variaveis-com-let"} -->
# Declarando **variáveis** (com `let`)

- Usamos a palavra-chave `let` para criar variáveis:
  ```js
  let alunosMatriculados = 20;    // isto aqui é um comentário
  let qtdeHorasAula = 66.5;       /* aqui também (de bloco) */
  let nomeAula = 'js0';
  ```
- Não é necessário (nem possível) informar o seu **tipo de dado**
  - Em JavaScript o tipo é **inferido automaticamente**
- `let` pode ser lido como "seja", tipo assim:
  > seja uma variável '`nomeAula`'
  com o valor '`js0`'

---
<!-- {"layout": "2-column-content", "hash": "const-e-var"} -->
## Outras formas de declarar variáveis `(const/var)`

- Usamos a palavra-chave `const` para criar variáveis que **sempre apontam para o mesmo valor** <!-- {ul:.compact-code-more} -->
  ```js
  const fruta = 'abacate'
  fruta = 'pera'
  // Uncaught TypeError:
  //   Assignment to constant variable.
  ```
  - É uma boa prática usar `const` sempre que se sabe que a variável não receberá um novo valor

1. **Usávamos** (passado, _old_, não use) a palavra-chave `var`:  <!-- {ol:.compact-code-more.no-bullets} -->
   ```js
   var vegetal = 'batata'
   ```
   - Similar ao `let` mas tem alguns problemas:
     - Não possui escopo de bloco, mas de função
     - Pode ser usada até mesmo antes da declaração
   - Era a única forma até ~2012
   - Encontra-se códigos antigos na Web usando `var`
---
<!-- {"layout": "2-column-content", "hash": "tipos-de-dados"} -->
## Tipos de dados

- Há sete **tipos primitivos** de dados:
  - `1. Boolean` <!-- {.tipo-js.tipo-boolean} -->
  - `2. Number` <!-- {.tipo-js.tipo-number} -->
  - `3. String` <!-- {.tipo-js.tipo-string} -->
  - `4. Null` <!-- {.tipo-js} -->
  - `5. Undefined` <!-- {.tipo-js} -->
  - `6. Symbol` <!-- {.tipo-js} -->
  - `7. BigInt` <!-- {.tipo-js} --> <!-- {ul:.multi-column-list-2} -->
- Um **tipo composto** de dados:
  `8. Object` <!-- {.tipo-js.tipo-object} -->
  - Há outros derivados de `Object`...
  - Veremos `Object` e seus tipos derivados em próximas aulas

1. Para verificar o tipo de uma variável, usamos `typeof` <!-- {.compact-code-more} -->
   ```js
   let vacinou = true;
   console.log(typeof vacinou);
   // imprime "boolean"

   let nota = 10;
   console.log(typeof nota);
   // imprime "number"

   let aluno = 'Adamastor';
   console.log(typeof aluno);
   // imprime "string"

   let inimigo = {
     vida: 100,
     nome: 'Slime'
   };
   console.log(typeof inimigo); // impr. "object"
   ```
---
<!-- {"classes": "compact-code"} -->
## O tipo `8. Object` <!-- {.tipo-js.tipo-object} -->

- É um **"saquinho" de propriedades**: <!-- {ul:.push-code-right.full-width} -->
  ```js
  let jogador = {
    pontos: 1420,
    vidas: 2
  }
  console.log(jogador.pontos)
  // imprime 1420
  ```  
  - Propriedade: (**nome → valor**)
    - Nome: uma String
    - Valor: qualquer coisa, exceto `undefined`
- No exemplo, o objeto tem 2 propriedades: <!-- {li^0:.bullet} -->
  1. Nome: `pontos`, valor: `1420`
  1. Nome: `vidas`, valor: `2`
- Para acessar as propriedades, há 2 formas: <!-- {li:.bullet} -->
  - <!-- {.code-split-2} -->
    ```js
    // notação ponto
    console.log(jogador.vidas)
    ```
    ```js
    // notação colchete
    console.log(jogador['vidas'])
    ```

---
<!-- {"classes": "compact-code"} -->
## Criando um objeto <small>(2 formas)</small>

1. Na **forma literal**: <!-- {ol:.bulleted-0} --> 
   ```js
   let jogador = {             // forma mais expressiva, curta e sexy 😎
     pontos: 1420,             // propriedades separadas por vírgula
     vidas: 2
   };
   ```
   ```js
   let jogador = {};           // um objeto vazio: { }
   jogador.pontos = 1420;      // criou jogador.pontos com valor 1420
   jogador.vidas = 2;          // criou jogador.vidas
   ```
   - Novas propriedades podem ser atribuídas mesmo após sua criação! <!-- {li:.bullet} -->
2. Na **forma do operador `new`**: <!-- {strong:.alternate-color} -->
   - <!-- {li:.code-split-2} -->
     ```js
     let jogador = new Object()
     jogador.pontos = 1420
     jogador.vidas = 2
     ```
     - Contudo, desta forma sempre cria-se um objeto vazio e deve-se preenchê-lo

---
<!-- {"layout": "2-column-content"} -->
## Objetos dentro de objetos

```js
let voo = {
    companhia: 'Gol',
    numero: 815,
    decolagem: {
        IATA: 'SYD',
        horario: '2004-09-22 14:55',
        cidade: 'Sydney'
    },
    chegada: {
        IATA: 'LAX',
        horario: '2004-09-23 10:42',
        cidade: 'Los Angeles'
    }
}
```
- Aqui existem 3 objetos:
  - O **`voo`**, com as propriedades:
     - `companhia`
     - `numero`
     - **`decolagem`**
     - **`chegada`**
  - `decolagem` e `chegada` são objetos por si mesmos

---
<!-- {"layout": "2-column-content"} -->
## **Métodos** de objetos <!-- {.alternate-color} -->

```js
const loja = {
  livros: [       // prop. é um vetor
    'macunaíma',
    'torre negra'
  ],
  dinheiro: 500,  // propri. é number
  
  // método vender
  vender: function() { // p. é função
    this.dinheiro += 15;
  } 
}

loja.vender() // loja.dinheiro = 515
loja.vender() // loja.dinheiro = 530
```

- O **<u>valor</u> de uma propriedade** pode ser uma **função**
  - Nesse caso, chamamos ela de **método** <!-- {.alternate-color} -->
  - Todo método tem acesso ao próprio objeto com o ponteiro `this`
  - Objetos com métodos formam o princípio do conceito de **Orientação a Objetos**

---
<!-- {"hash": "operadores", "embeddedStyles": ".less-padding ul li{padding-left:0em;list-style-type:none}"} -->
# Operadores

- Aritméticos <!-- {ul^0:.less-padding} --> <!-- {li^0:.bullet} -->
  - **`+`** soma&nbsp;&nbsp;&nbsp;**`-`** subtração
  - **`*`** multiplicação
  - **`**`** exponenciação
  - **`/`** divisão
  - **`%`** resto da divisão
  - **`++`** incremento&nbsp;&nbsp;&nbsp;**`--`** decremento
- Atribuição <!-- {li^0:.bullet} -->
  - **`=`** simples&nbsp;&nbsp;&nbsp;**`+=  /=  %=`** composta
- Relacionais (comparação) <!-- {li^0:.bullet} -->
  - **`==`** igualdade
  - **`===`** igualdade forte (!!)
  - **`!=`** desigualdade
  - **`!==`** desigualdade forte  (!!)
  - **&lt;  &lt;=** menor/menor igual
  - **&gt;  &gt;=** maior/maior igual
- Lógicos <!-- {li^0:.bullet} -->
  - **`!`** não&nbsp;&nbsp;&nbsp;**`&&`** e&nbsp;&nbsp;&nbsp;**`||`** ou <!-- {ul^4:.multi-column-list-2} -->

---
## O que significa `===` (igualdade forte)?

- Se compararmos '1' com 1 (uma **string** <!-- {.tipo-string} --> com um **number** <!-- {.tipo-number} -->) usando `==`: <!-- {ul:.bulleted-0} -->
  ```js
  console.log('1' == 1)    // imprime true
  ```
  - A comparação `==` tenta converter um elemento no tipo do outro e depois
    compara
  - Neste caso, converte `1` em `'1'` e só então compara
- Para que essa conversão não aconteça, usamos `===` :thumbsup::
  ```js
  console.log('1' === 1)   // imprime false
  ```
  - Mais rápido para o computador, porque ele não faz a conversão
  - Prefira esta forma!! :wink:

---
<!-- {"layout": "section-header", "hash": "condicionais-vetores-e-estruturas-de-repeticao"} -->
# Condicionais, Vetores e Repetição
## _Arrays_, for, while e variações

- Condicionais
- Vetores
- For
    - Tradicional
    - For of
    - forEach
- While/Do while
<!-- {ul^1:.content} -->

---
<!-- {"layout": "2-column-content", "hash": "if-else", "classes": "compact-code"} -->
## **if/else** (condicionais)

```js
if (hora < 12) {
  manha = true
} else {
  manha = false
}

if (nome === 'Robervaldo') { 
  conceito = 'A'
} else if (nome === 'Ana') {
  conceito = 'B'
} else {
  conceito = 'C'
}

if (estouComSono)
  dormir() // mas evite omitir { }
```

- Dentro dos parênteses colocamos uma expressão que avalia para `true` ou `false`. Ex:
  - `nome === 'Ana'`
  - `ano < 2000`&nbsp;&nbsp;`ano % 4 === 0`
  - `!jaEstudei`
  - `hp > 0 && (balas || granada)`
- Com apenas 1 comando no `if`/`else`, é possível omitir as chaves (como em C/C++, Java)
  - Contudo, é uma má ideia

---
## **Operador ternário** (condicionais)

- Quando temos um `if/else` "simples", pode ser mais legível fazer a verificação em 1 linha com **o operador ternário ?:**
- <!-- {.code-split-2} -->
  ```js
  if (armaduraForte) {
    hp -= 10
  } else {
    hp -= 50
  }
  ```
  ```js
  // mesmo código, em 1 linha
  hp -= armaduraForte ? 10 : 50
  ```
- Formato:
  ```js
  CONDICAO_TESTE ? VALOR_SE_TRUE : VALOR_SE_FALSE
  ```

---
<!-- {"layout": "2-column-content", "hash": "switch"} -->
## **switch** (condicionais)

```js
let corDoSite = 'black'
switch (climaAgora) {
    case 'ensolarado':
      corDoSite = 'yellow'
      break
    
    case 'nublado':
    case 'chuvoso':
      corDoSite = 'gray'
      break;

    default:
      corDoSite = 'white'
      break;
}
```

- `switch` + (expressão)
- Um ou mais `case` + valor para a expressão
- Sequência de comandos
- Palavra-chave `break` para sair
  - (pode ser omitida para continuar)
- Caso `default` para pegar outros valores (equivalente ao `else`)

---
<!-- {"hash": "vetores"} -->
# Vetores

- Vetores (ou _arrays_) armazenam uma sequência de valores: <!-- {ul:.bulleted-0.compact-code} -->
  ```js
  let notas = [10, 4, 7, 8, 8]
  let cores = ['azul', 'verde']
  let animais = [] // <- vetor vazio
  ```
- ```js
  console.log(notas.length)  // impr. 5
  console.log(cores.length)  // impr. 2
  ```
  Assim como _string_, um vetor tem um **comprimento** (propriedade `length` <!-- {style="float:none"} -->): <!-- {li:.push-code-right style="margin-top: 0.25em;"} -->
- Em JavaScript, vetores são heterogêneos
  - Os itens dos vetores **não** precisam ter o mesmo tipo
    ```js
    let listaDeCoisas = ['Aew', 35, true, [], 'outra string']
    ```

---
<!-- {"elementStyles": { "h2 + pre": "overflow: hidden; width: 100%;"}} -->
## **Usando** vetores

```js
let listaDeCoisas = ['Aew', 35, true, [], 'outra string'];
```

- Indexação: usa-se os símbolos `[` e `]` para acessar um item do _array_ <!-- {ul:.bulleted.no-margin} -->
  ```js
  console.log(listaDeCoisas[1])      // imprime 35
  listaDeCoisas[0] = ''              // altera primeiro elemento
  console.log(listaDeCoisas[0])      // imprime string vazia
  ```
- _Arrays_ possuem métodos, [vários](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). Exemplo:
  ```js
  let frutas = []                    // cria um array vazio
  frutas.push('kiwi')                // coloca 'kiwi' no array
  console.log(frutas)                // imprime ['kiwi']
  ```

---
# **for** <small>(forma tradicional)</small>

- <!-- {ul:.no-margin.full-width} -->
  Forma tradicional com `for (inicio; condicao; incremento)`:
  ```js
  for (let i = 0; i < 10; i++) {
    console.log(i)               // 0, 1, 2 ... 9
  }
  ```
- Percorrendo items de um _array_:
  ```js
  let cores = ['azul', 'rosa']
  for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])        // azul, rosa
  }
  ```

---
<!-- {"layout": "2-column-content", "hash": "for-formas-mais-legais"} -->
# **for** <small>(formas **mais legais**)</small>

1. **For of**: `for (let item of array)` <!-- {ol:.no-bullets} -->
   ```js
   let cores = ['azul', 'rosa']
   for (let cor of cores) {
     console.log(cor)
     // azul, rosa
   }
   ```
- **For each**: `array.forEach` <!-- {ul:.no-bullets} -->
  ```js
  let cores = ['azul', 'rosa']
  cores.forEach(function(cor) {
    console.log(cor)
    // azul, rosa
  });
  ```

---
<!-- {"layout": "2-column-content"} -->
# while/do..while

- Condição **primeiro** <!-- {ul:.no-bullets} -->
  ```js
  let i = 1;
  while (i !== 10) {
    console.log(i)
    i++
  }
  ```
1. Condição **depois** <!-- {ol:.no-bullets} -->
   ```js
   let i = 0;
   do {
     i++
     console.log(i)
   } while (i !== 10)
   ```


---
<!-- {"layout": "section-header", "hash": "eventos"} -->
# Eventos
## Programação dirigida por eventos

- Tipos
- Associando funções
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
    el.onclick = function(e) { /*...*/ }
    ```
    - Foi a única forma por muitos anos
    - Permite apenas um _handler_ por tipo de evento
  - Forma bacana :thumbsup:: <!-- {li:.bullet} -->
    ```js
    el.addEventListener('click', funcao)
    ```
    - Analogamente, para desregistrar uma função: <!-- {ul:.bullet} -->
      ```js
      el.removeEventListener('click', funcao)

---
TODO: slide mostrando interação com argumento de evento para pegar coordenadas

---
<!-- {"layout": "section-header", "hash": "criando-objetos-com-classes"} -->
# Criando objetos com Classes
## Forminha de objetos

- Classes
- Herança
- Membros explícitos
  - estáticos
  - públicos
  - privados
<!-- {ul^1:.content} -->

---
# Classes em JavaScript

1. <!-- {ol:.no-margin} -->
   São formas para se criar objetos que possuem um mesmo conjunto inicial de propriedades e métodos
1. Definidas como _class declarations_  ou _class expressions_
  - <!-- {ul:.full-width.two-column-code.no-padding.no-bullets.no-margin.compact-code-more.centered} -->
    ```js
    // declaração
    class Moto {
      constructor(modelo, dono) {
        this.modelo = modelo
        this.dono = dono
      }
    }
    // expressão
    const Moto = class {
      constructor(modelo, dono) {
        this.modelo = modelo
        this.dono = dono
      }
    }
    ```

---
<!-- {"classes": "compact-code-more"} -->
# Sintaxe das classes

- <!-- {ul:.two-column-code.full-width.no-padding.no-bullets} -->
  ```js
  class Moto {
    #chassi

    constructor(modelo, dono, impulso = 0) {
      this.modelo = modelo
      this.dono = dono
      this.impulso = impulso
    }
    
    // getter
    get descricao() {
      return `${this.modelo} de ${this.dono}`
    }



    // método
    acelerar() {
      this.impulso++
    }

    // método estático (da classe)
    static BuscarNaAPI(modelo) {
      // ...
    }
  }

  const motoca = new Moto('Harley', 'Bob E.')
  console.log(motoca.descricao)
  // 'Harley de Bob E.'
  ```

---
<!-- {"layout": "2-column-content"} -->
# Herança em JavaScript

```js
class Veiculo {
  #chassi // ⬅️ ⬇️ privado
  static #idGlobal = 0

  constructor(marca, tipo) {
    this.marca = marca
    this.tipo = tipo
    this.#chassi = ++Veiculo.#idGlobal
  }

  ligar(opcoes) {
    // ...
  }
}
```

```js
class Carro extends Veiculo {
  constructor(marca, tipo, modelo) {
    super(marca, tipo)
    this.modelo = modelo
  }

  ligar(opcoes) {
    super.ligar(opcoes)
  }
}
```

---
<!-- {"layout": "section-header", "hash": "modulos"} -->
# Módulos
## Organização de código

- Motivação/história
- Módulos ES6
- Importação dinâmica
- Módulos ES6 no navegador
<!-- {ul:.content} -->

---
# Módulos ES6

- Cada módulo (arquivo) pode `import` o que outros módulos `export`
  - <!-- {ul:.layout-split-2.no-bullets.no-padding.no-margin style="gap: 1rem"} -->
    `math.js`:
    ```js
    export function fft1d(dados) {
      // ... calcula transformada
      // ...
      return resultado
    }
    ```
  - `processa-imagem.js`:
    ```js
    import { fft1d } from './math.js'

    export function compacta(imagem) {
      return fft1d(imagem.dados)
    }
    ```

---
# Módulos ES6 no navegador

- Para usar módulos no navegador:
  1. No arquivo HTML, inclua apenas o "ponto de entrada":
     ```html
       <script type="module" src="principal.js"></script>
     </body>
     </html>
     ```
  1. O navegador o baixará e, recursivamente, todos os que ele `import`
  1. `type="module"` instrui o navegador a considerar o arquivo como módulo
- Ganhamos gerência automática da ordem das dependências

---
<!-- {"layout": "2-column-content", "classes": "compact-code-more"} -->
## Exemplo de **`export`** e `import`

```js
export const nome = 'quadrado';

export function desenha(ctx, tam, x, y, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, tam, tam);

  return {
    tamanho: tam,
    x,
    y,
    cor
  };
}
```

- Pode `export`:
  - Funções
  - `var`, `let`, `const`
  - Classes
- Outra sintaxe para exportar tudo:
  ```js
  export { nome, desenha }
  ```

---
## Exemplo de `export` e **`import`**

1. <!-- {ol:.flex-align-center.no-bullets.no-padding.no-margin} -->
   ```js
   import { nome, desenha } from './geometria/quad.js'
   import { area, perimetro } from './retangulos.js'

   let quad = desenha(canvasEl.ctx, 50, 50, 100, 'blue');
   area(quad.tamanho)
   perimetro(quad.tamanho)
   ```

- Pode `import` qualquer coisa que um módulo `export`
- Atenção ao `from`: deve ser um caminho relativo explícito ou completo <!-- {li:.note.info} -->

---
<!-- {"classes": "compact-code-more"} -->
## `import` e `export` padrão

- Caso um módulo exporte apenas 1 única coisa, ele pode defini-la como `export default` (padrão)
- Quem fizer `import`, não precisará fazer _destructuring_. Exemplo:
  1. <!-- {ol:.no-bullets.no-padding.no-margin.layout-split-2.compact-code style="gap: 1rem"} -->
     `abelha.js`
     ```js
     export default class Abelha {
       static IMAGEM = 'imgs/abelha.gif'
       constructor(y) {
         this.y = y
       }
       desenha(ctx) {
         // ...
       }
       atualiza() {
         // ...
       }
     }
     ```
  1. `principal.js`
     ```js
     import Abelha from './abelhas.js'

     let abelhas = [
       new Abelha(Math.random()),
       new Abelha(Math.random()),
       new Abelha(Math.random())
     ]





     ```

---
# Importação dinâmica

- Adição mais recente, possibilita carregar módulos programaticamente (eg, condicionalmente)
  - Útil para carregar partes da aplicação apenas quando necessárias
  - Usa conceito de promessas (operação assíncrona)
- Exemplo: 
  ```js
  import('./filtros/convolucao.js')
    .then(modulo => {
      // módulo carregado
    }); 
  ```

---
<!-- {"layout": "section-header", "hash": "promessas-async-await"} -->
# Promessas, Async/Await
## Programação assíncrona

- Promessas
- Async/Await
<!-- {ul:.content} -->

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
# Exemplo usando a Star Wars API [🌐][swapi]

> Imprimir (4) todas as "pessoas"<br>(3) da mesma espécie do<br>(2) primeiro
>   residente do<br>(1) planeta Naboo

[swapi]: https://swapi.dev

---
# _Callback Hell_ <small>([no JSFiddle][jsf-callback])</small>

- Imprimir (4) todas as "pessoas" (3) da mesma espécie do (2) primeiro
  residente do (1) planeta Naboo (planeta `id=8`) <!-- {li:.compact-code-more} -->
  ```js
  sendAjax('https://swapi.dev/api/planets/8', planeta  => { // Naboo
    sendAjax(planeta.residents[0], residente => {           // R2-D2
      sendAjax(residente.species, especie => {              // Droid
        // pega todas as "pessoas" dessa espécie
        for (let pessoa of especie.people) {
          sendAjax(pessoa, p => {
            console.log(p.name + ', ')                      // ordem pode mudar!
          })
          // C-3PO, R2-D2, R5-D4, IG-88, BB8,
        }
      })
    })
  })
  ```

[jsf-callback]: https://jsfiddle.net/fegemo/mxu1bchp/

---
# Solução com **Promises** <small>([no JSFiddle][jsf-promise])</small>

- Imprimir (4) todas as "pessoas" (3) da mesma espécie do (2) primeiro
  residente do (1) planeta Naboo (planeta `id=8`)

```js
sendAjax('https://swapi.dev/api/planets/8')             // Naboo
  .then(planeta => sendAjax(planeta.residents[0]))      // R2-D2
  .then(residente => sendAjax(residente.species))       // Droid
  .then(especie => Promise.all(especie.people.map(pessoa => sendAjax(pessoa))))
  .then(pessoas => console.log(pessoas.map(p => p.name).join(', ')))
   // C-3PO, R2-D2, R5-D4, IG-88, BB8
  .catch(erro => console.error(`Deu ruim: ${erro}`));
```

[jsf-promise]: https://jsfiddle.net/fegemo/cxbguodz/

---
# Definição de **Promise**

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
# Criando uma **Promise** (exemplo)

- <!-- {ul:.two-column-code.full-width} -->
  Exemplo: aguardar 2s antes de fazer algo <!-- {ul:.compact-code-more} -->
  ```js
  function espera2s() {
    return new Promise(resolver => {
      setTimeout(resolver, 2000)
    })
  }
  espera2s()
    .then(() => console.log('2s depois'))


  ```
- Exemplo 2: aguardar `tempo` antes de fazer algo _(apenas parametrizando)_
  ```js
  function espera(tempo) {
    return new Promise(resolver => {
      setTimeout(resolver, tempo*1000)
    })
  }
  espera(5)
    .then(() => console.log('5s depois'))


  ```

---
<!-- {"layout": "section-header", "hash": "async-await"} -->
# Async/Await
## Assíncrono que parece síncrono

- Motivação
- `await` em vez de `.then`
- `async` para retornar `Promise`
- Tratando exceções
- Exemplos
- _Top-level `await`_
<!-- {ul:.content} -->

---
# Motivação: problemas com promessas

1. Promessas com `.then` encadeados reduzem (**mas não acabam**) com _callback hell_ 🔥
1. Há possibilidade de `.catch` **não capturar exceção**
   - Caso `.catch` seja atrasado (eg, devido a alguma espera na criação da promessa - [exemplo][promise-unhandled])
1. É difícil escrever um **fluxo condicional** em uma cadeia de promessas
1. **Depurar** ainda fica um pouco difícil com promessas
1. É possível **aumentar a legibilidade**, se o código _parecer_ síncrono

[promise-unhandled]: https://jsfiddle.net/fegemo/g2h5rqem/

---
# Palavra-chave **`await`**

- <!-- {ul:.full-width.no-padding.no-bullets.no-margin.compact-code-more} -->
  ```js
  function espera(tempo) {
    return new Promise(resolver => {
      setTimeout(resolver, tempo*1000)
    })
  }
- <!-- {li:.two-column-code} -->
  ```js
  console.log('tempo = 0')
  await espera(2)   // <--
  console.log('tempo = 2')
  // tempo = 0
  // ...
  // tempo = 2 (2s depois)
  console.log('tempo = 0')
  espera(2).then(() => console.log('tempo = 2'))
  
  // tempo = 0
  // ...
  // tempo = 2 (2s depois)
  ```

1. `await` substitui o `.then`
1. Parece síncrono, mas suspende execução até a promessa ser cumprida
   - E isso não bloqueia a execução do processo (ie, é assíncrono)

---
## Retorno de: `await funcao()`

- <!-- {ul:.full-width.no-padding.no-margin.no-bullets.two-column-code.compact-code-more} -->
  ```js
  const db = {/*...*/}
  function dados(entidade) {
    return new Promise(resolver => {
      // faz algo assíncrono (eg, acessa banco ou ajax)
      // e resolve (cumpre) a promessa com o resultado
      resolver(db[entidade])
    })
  }

  // com await 🎉
  const noticia = await dados('noticias')
  const template = await formata(noticia)
  mostraNoticia(template)









  // com promise.then
  dados('noticias')
    .then(formata)
    .then(mostraNoticia)
  ```

1. O valor que é **resolvido** pela `Promise` é retornado
   pela função
1. ⬆️ Exemplo: pegar dados de notícias, criar um template e mostrar
   - 3x operações assíncronas em sequência:
     ```js
     mostraNoticia() << formata() << dados('noticia')
     ```

---
## Valores intermediários

- <!-- {li:.no-bullets.no-padding.compact-code-more.two-column-code} -->
  ```js
  // com await 🎉
  const noticia = await dados('noticia')
  const autor = await dados(`autor/${noticia.autor}`)
  mostraNoticia(noticia, autor)


  // com promise.then
  dados('noticia')
    .then(noticia => {
      return dados(`autor/${noticia.autor}`)
        .then(autor => mostraNoticia(noticia, autor))
    })
  ```
- Neste exemplo, o 3º passo depende tanto do 2º quanto do 1º
  - E o 2º depende do 1º:
    <!-- {li:.compact-code-more} -->
    ```js
    mostraNoticia() << noticia, autor
    autor << noticia
    ```
- Repare que, para usar valores intermediários usando `.then`,
  o código perde legibilidade
  - Com `await` o código parece síncrono (ficando mais legível)

---
# Tratando **erros**

- JavaScript possui `try / catch`, mas eles não funcionam com `Promise`
  - É necessário usar `.catch` ou passar uma `errorCallback` como 2º argumento para `.then`
- <!-- {li:.two-column-code.compact-code-more} -->
  Se usarmos `await`, podemos usar `try / catch` sem problemas:
  ```js
  // com await 🎉
  try {
    const noticia = await dados('noticias')
    const template = await formata(noticia)
    mostraNoticia(template)
  } catch (erro) {
    mostraUmaPropaganda()
    console.error(erro)
  }
  // com promise.catch
  dados('noticias')
    .then(formata)
    .then(mostraNoticia)
    .catch(erro => {
      mostraUmaPropaganda()
      console.error(erro)
    })

  ```

---
<!-- {"layout": "2-column-content"} -->
# Palavra-chave **`async`**

- Além do `await`, foi introduzida `async`
- `await` é permitido apenas dentro de funções `async`
  - Mas removemos essa restrição dentro de módulos ES6
- Ela **modifica a função fazendo retornar uma `Promise`**

1. São basicamente equivalentes:
   <!-- {ol:.two-column-code.compact-code-more.no-bullets.no-padding.no-margin} -->
   ```js
   // com async
   async function responder() {
     return 42
   }
   // promise explícita
   function responder() {
     return Promise.resolve(42)
   }
   ```
1. Função `async` sempre retorna uma `Promise`:
   ```js
   async function hello() {
     return 'Hello';
   }


   const b = hello();
   console.log(b);
   // ❌ [object Promise]

   b.then(texto => 
     console.log(texto))
   // ✅ 'Hello'
   ```

---
<!-- {"layout": "centered-horizontal", "classes": "compact-code-more"} -->
# `async/await` vs `Promise`

```js
try {
  const planeta = await sendAjax('https://swapi.dev/api/planets/8') // Naboo
  const residnt = await sendAjax(planeta.residents[0])              // R2-D2
  const especie = await sendAjax(residnt.species)                   // Droid
  const pessoas = await Promise.all(especie.people.map(pessoa => sendAjax(pessoa)))
  console.log(pessoas.map(p => p.name).join(', '))
  // C-3PO, R2-D2, R5-D4, IG-88, BB8
} catch(erro) {
  console.error(`Deu ruim: ${erro}`)
}
```
```js
sendAjax('https://swapi.dev/api/planets/8')                         // Naboo
  .then(planeta => sendAjax(planeta.residents[0]))                  // R2-D2
  .then(residnt => sendAjax(residnt.species))                       // Droid
  .then(especie => Promise.all(especie.people.map(pessoa => sendAjax(pessoa))))    
  .then(pessoas => console.log(pessoas.map(p => p.name).join(', ')))
   // C-3PO, R2-D2, R5-D4, IG-88, BB8
  .catch(erro => console.error(`Deu ruim: ${erro}`));
```

---
<!-- {"layout": "3-column-element-with-titles-expansible", "classes": "compact-code-more"} -->
## [Callbacks][jsf-callback]

```js
sendAjax('https://swapi.dev/api/planets/8', planeta  => { // Naboo
  sendAjax(planeta.residents[0], residente => {           // R2-D2
    sendAjax(residente.species, especie => {              // Droid
      // pega todas as "pessoas" dessa espécie
      for (let pessoa of especie.people) {
        sendAjax(pessoa, p => {
          console.log(p.name + ', ')
        })
        // C-3PO, R2-D2, R5-D4, IG-88, BB8,
      }
    })
  })
})
```

## [Promises][jsf-promise]

```js
sendAjax('https://swapi.dev/api/planets/8')             // Naboo
  .then(planeta => sendAjax(planeta.residents[0]))      // R2-D2
  .then(residente => sendAjax(residente.species))       // Droid
  .then(especie => Promise.all(especie.people.map(pessoa => sendAjax(pessoa))))
  .then(pessoas => console.log(pessoas.map(p => p.name).join(', ')))
   // C-3PO, R2-D2, R5-D4, IG-88, BB8
  .catch(erro => console.error(`Deu ruim: ${erro}`));
```

## [`async-await`][jsf-async-await]

```js
try {
  const planeta = await sendAjax('https://swapi.dev/api/planets/8')   // Naboo
  const residnt = await sendAjax(planeta.residents[0])      		      // R2-D2
  const especie = await sendAjax(residnt.species)       	            // Droid
  const pessoas = await Promise.all(especie.people.map(pessoa => sendAjax(pessoa)))
  console.log(pessoas.map(p => p.name).join(', '))
  // C-3PO, R2-D2, R5-D4, IG-88, BB8
} catch(erro) {
  console.error(`Deu ruim: ${erro}`)
}
```

[jsf-callback]: https://jsfiddle.net/fegemo/mxu1bchp/
[jsf-promise]: https://jsfiddle.net/fegemo/cxbguodz/
[jsf-async-await]: https://jsfiddle.net/fegemo/w5tcaxdq/

<!-- {"layout": "title"} -->
# **JavaScript** parte 1
## História e Características da linguagem

---
<!-- {"layout": "centered"} -->
# Hoje veremos...

1. [História e características](#historia-e-caracteristicas)
1. [Tipos de dados, Variáveis e Funções](#tipos-de-dados-variaveis-e-funcoes)
1. [Condicionais, Vetores e Estruturas de Repetição](#condicionais-vetores-e-estruturas-de-repeticao)
1. [Mais sobre funções e Métodos úteis](#mais-sobre-funcoes-e-metodos-uteis)

---
<!-- {"layout": "section-header", "hash": "historia-e-caracteristicas"} -->
# História e características
## Introdução a JavaScript

1. História
1. O que é JavaScript
1. Como incluir na página
<!-- {ol:.content} -->

---
# História <small>(1/2)</small>

1989 - 1993 <!-- {.bullet-old} --> <!-- {dl:.full-width} -->
  ~ Tim Berners-Lee cria a WWW em CERN (*European Organization for
    Nuclear Research*) e a deixa aberta ao público <!-- {dd:.bullet-old} -->

1994 <!-- {.bullet-old} -->
  ~ Håkon propõe uma linguagem para dar conta da responsabilidade de
    alterar a aparência de páginas web chamada CSS <!-- {dd:.bullet-old} -->

1995 (maio)
  ~ ![Foto de Brendan Eich](../../images/brendan-eich.png) <!-- {.portrait.push-right} -->
    Brendan Eich, funcionário do Netscape, criou (em 10 dias!!) uma
    linguagem para alterar páginas dinamicamente - o _Mocha_

1995 (setembro)
  ~ _LiveScript_ (novo nome) é lançado com a versão beta do Netscape 2.0

---
## História <small>(2/2)</small>

1995 (dezembro)
  ~ Nome virou JavaScript para aproveitar a fama do Java
    
1996 (agosto)
  ~ Microsoft adota o JavaScript sob o nome de JScript

1996 (novembro)
  ~ A Netscape submeteu o JavaScript para a
    _Ecma international_ para padronização. A especificação recebeu o nome de
     _ECMAScript_

1997
  ~ A _Ecma International_ publicou a primeira versão

1998
  ~ Versão 2 do ECMAScript

1999
  ~ Versão 3 do ECMAScript

2009
  ~ Versão 5 do ECMAScript

2013 - hoje
  ~ Versões 6-9+
    ![](../../images/logo-javascript.svg) <!-- {style="height: 1em;"} -->
    do ECMAScript, que mudaram de nome para **ES2015**, **ES2016**, **ES2017**,
    **ES2018**...


*[ECMA]: European Computer Manufacturers Association*
*[Ecma]: European Computer Manufacturers Association*

---
# ![Logo da linguagem JavaScript](../../images/logo-javascript.svg) <!-- {.push-right style="max-width: 75px"} --> O que é JavaScript?

- Linguagem **imperativa** com **tipagem dinâmica**
- Suporta os **paradigmas**: procedural, orientado a objetos e funcional
- _Thread_ única: usa um **loop de eventos**
- Sintaxe parecida com C, C++, C# e Java, mas baseada em Scheme
- Memória auto-gerenciada (_garbage collector_)
- Há um interpretador embutido em cada navegador:
  - Chrome &#8594; V8 <!-- {ul^0:.multi-column-list-2} -->
  - Firefox &#8594; SpiderMonkey
  - Opera &#8594; Carakan &#8594; V8 (2013)
  - Safari &#8594; ~~JavaScriptCore~~ Nitro
  - Internet Explorer &#8594; Chakra
  - Edge &#8594; ~~Charka~~ V8 (2019)


---
<!-- {"layout": "main-point", "state": "emphatic"} -->
# Como usar em uma página Web

---
## Três formas de inclusão

- O navegador executa o código assim que vê o elemento `<script></script>` e
  faz _download_ do arquivo apontado
- **Há 3 formas para incluir** (tipo CSS):
  1. **Externa** :thumbsup:
     ```html
       ...  <!-- dentro do HEAD -->
       <script src="executa-no-inicio.js"></script>
     </head>
     <body>
       ...
       <!-- última coisa antes de fechar /BODY -->
       <script src="executa-no-fim-da-pagina.js"></script>
     </body>
     ```

---
## Inclusão em páginas

2. Embutida :thumbsdown:
   ```html
   <script>
     // código javascript aqui
   </script>
   ```
   - Não reaproveita entre arquivos, mistura com HTML
3. *Inline* :thumbsdown::thumbsdown::thumbsdown:
   ```html
   <button onclick="javascript: alert();">Mensagem</button>
   ```
   - Nenhum reaproveitamento, mistura uma mesma linha

---
<!-- {"layout": "2-column-content"} -->
## Onde incluir?

1. O navegador precisa **baixar o arquivo JS** <!-- {style="color: #00ba00;"} -->
   e **executá-lo** <!-- {style="color: #df0000;"} -->, enquanto faz 
   **_parsing_ do HTML** <!-- {strong:style="color: #f1b400;"} -->
1. Durante a execução os navegadores podem interromper o _parsing_ do HTML
1. Regra geral: adiar a execução (para bloquear a página depois que já tiver sido desenhada) <!-- {li:.note.info style="margin-top: 1em;"} -->

- <!-- {ul:.no-padding.no-bullets.no-margin.bulleted} -->
  ```html
  <script src="..."></script>
  ```
  ![](../../images/script-without-async-defer.svg) <!-- {.full-width} -->
- ```html
  <script src="..." async></script>
  ```
  ![](../../images/script-with-async.svg) <!-- {.full-width} -->
  - Não garante a ordem
- ```html
  <script src="..." defer></script>
  ```
  ![](../../images/script-with-defer.svg) <!-- {.full-width} -->

---
<!-- {"layout": "2-column-content"} -->
## <span style="font-family: 'Amatica SC',cursive;">hello-world.js</span> e imprimindo no console

- Um arquivo HTML pode incluir um arquivo .js <!-- {ul:.bullet.compact-code-more} -->
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>...</title>
  </head>
  <body>
    <!-- ... -->
    <script src="hello-world.js"></script>
  </body>
  </html>
  ```
  ```js
  // imprime no console do navegador
  console.log('Hello world');

  // abre uma janelinha infernal
  window.alert('Sou das trevas');
  ```

1. Um arquivo JavaScript incluído por um HTML é **baixado e executado linha a linha** <!-- {ol:.bullet.compact-code-more style="margin-left: auto;"} -->
2. Para testar escrevemos no console do navegador com
   ```js
   console.log('.......');
   ```
3. Também pode abrir uma janelinha
   ```js
   window.alert('......');
   ```
   - ...mas não faça isto, jovem, porque essa janelinha é muito chata ;)

---
<!-- {"layout": "section-header", "hash": "tipos-de-dados-variaveis-e-funcoes"} -->
# Tipos de Dados, Variáveis e Funções
## Elementos da Linguagem JavaScript

- Tipos de dados
- Declarando variáveis
- Criando funções
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
  const fruta = 'abacate';
  fruta = 'pera';
  // Uncaught TypeError:
  //   Assignment to constant variable.
  ```
  - É uma boa prática usar `const` sempre que se sabe que a variável não receberá um novo valor

1. **Usávamos** (passado, _old_, não use) a palavra-chave `var`:  <!-- {ol:.compact-code-more.no-bullets} -->
   ```js
   var vegetal = 'batata';
   ```
   - Similar ao `let` mas tem alguns problemas:
     - Não possui escopo de bloco, mas de função
     - Pode ser usada até mesmo antes da declaração
   - Era a única forma até ~2012
   - Encontra-se códigos antigos na Web usando `var`

---
<!-- {"classes": "compact-code"} -->
# Fracamente tipada e dinâmica

- Em JavaScript, não é necessário declarar o tipo das variáveis:
  ```js
  let nota = 10;            // tipo numérico
  let aluno = 'Adamastor';  // tipo string
  ```
  - Dizemos que JavaScript é **fracamente tipada**
- Em JavaScript podemos mudar o tipo de uma variável no meio do caminho (exceto se usando `const`):
  ```js
  let nota = 10;            // nota é númerico
  nota = 'Dó';              // agora virou string
  ```
  - Dizemos que JavaScript é **dinâmica**

---
<!-- {"layout": "2-column-content", "hash": "tipos-de-dados"} -->
## Tipos de dados

- Há seis **tipos primitivos** de dados:
  - `1. Boolean` <!-- {.tipo-js.tipo-boolean} -->
  - `2. Number` <!-- {.tipo-js.tipo-number} -->
  - `3. String` <!-- {.tipo-js.tipo-string} -->
  - `4. Null` <!-- {.tipo-js} -->
  - `5. Undefined` <!-- {.tipo-js} -->
  - `6. Symbol` ![](../../images/logo-javascript.svg) <!-- {style="height: 1em;"} -->  <!-- {code:.tipo-js} --> <!-- {ul:.multi-column-list-2} -->
- Um **tipo composto** de dados:
  `7. Object` <!-- {.tipo-js.tipo-object} -->
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
<!-- {"layout": "2-column-content", "hash": "os-tipos-boolean-e-number"} -->
## <span>O tipo **1. Boolean** <!-- {.tipo-js.tipo-boolean} --></span> <span>O tipo **2. Number** <!-- {.tipo-js.tipo-number} --></span> <!-- {h2:style="display:flex;justify-content:space-between"} -->

1. O tipo **Boolean** <!-- {.tipo-boolean} --> armazena um valor verdadeiro ou falso. Exemplo: <!-- {ol:.bullet.compact-code-more.no-bullets} -->
   ```js
   let abelhinhaEstaVoando = true;
   let modoEscuro = false;
   let maioridade = idade >= 18;
   ```


- **Apenas 1 tipo numérico** 64bits <!-- {ul:.bullet.compact-code-more.no-bullets} --> <!-- {.tipo-number} -->
  - <small>(equivalente ao `double` de C/Java)</small>
  - Não há um tipo específico para números inteiros
- Exemplos de variáveis com números:
  ```js
  let a = 5;
  let b = 5.674;            // 5 vírgula 674
  let c = a + b;            // 10.674
  let d = 2 ** 4;           // 16 (2 elevado a 4)
  let e = Math.sqrt(25);    // 5 (raiz quadrada de 25)
  let f = Math.random();    // [0,1] - algo entre 0 e 1
  ```

---
<!-- {"hash": "o-tipo-string", "classes": "compact-code"} -->
## O tipo **3. String** <!-- {.tipo-js.tipo-string} -->

- **Representa um texto** <!-- {.tipo-string} --> codificado em UTF-8
- Não existe o tipo `char` como em C/C++ e Java, apenas _string_ :wink:
- Usamos aspas **simples** ou duplas
  ```js
  "Abc" === 'Abc'   // simples é mais legal!! mas basta ser consistente
  ```
- Possui uma propriedade chamada `length` com o seu comprimento:
  ```js
  console.log('Cachorro'.length); // 8
  ```
- Exemplos:
  ```js
  let aranhas = 'fofofauna';
  const caminhoVideo = 'videos/a.mp4';
  const nomeCompleto = primeiro + ' ' + ultimo;
  ```

---
<!-- {"classes": "compact-code"} -->
## Manipulando Strings

- É possível **concatenar** (juntar, colar) para criar novas strings: <!-- {ul:.bulleted} -->
  ```js
  console.log('c' + 'a' + 't');   // imprime 'cat'
  ```
- Podemos acessar cada caractere usando colchetes:
  ```js
  const capitalDeMG = 'Betim';
  console.log(capitalDeMG[0]);    // imprime 'B'
  ```
- Strings possuem métodos, [vários deles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (veremos mais). Exemplos:
  ```js
  'barba negra'.toUpperCase() === 'BARBA NEGRA'
  'Mississippi'.indexOf('ss') === 2
  'Orinoco'.replace('noco', '') === 'Ori'
  '$'.repeat(3) === '$$$'
  ```

---
## O tipo `4. Null` <!-- {.tipo-js} -->

- Tecnicamente um tipo, mas na prática contém apenas 1 valor: `null`
- ```js
  let x = null;
  console.log(typeof x);    // imprime null¹
  ```
  Usamos quando uma variável **não tem um valor aplicável naquele momento** <!-- {li:.push-code-right} --> ¹: [bug typeof null][bug-null]
  
## O tipo `5. Undefined` <!-- {.tipo-js} -->

- Parecido com Null, possui apenas 1 valor: `undefined`
- ```js
  let x;
  console.log(typeof x);    // imprime undefined
  ```
  É o tipo padrão de **variáveis que não foram associadas a nenhum valor** <!-- {li:.push-code-right} -->

[bug-null]: https://2ality.com/2013/10/typeof-null.html#:~:text=The%20%E2%80%9Ctypeof%20null%E2%80%9D%20bug%20is,lower%20bits%20of%20the%20units.&text=The%20data%20is%20a%20reference%20to%20an%20object.

---
<!-- {"classes": "compact-code"} -->
## O tipo `7. Object` <!-- {.tipo-js.tipo-object} -->

- É um **"saquinho" de propriedades**: <!-- {ul:.push-code-right.full-width} -->
  ```js
  let jogador = {
    pontos: 1420,
    vidas: 2
  };
  console.log(jogador.pontos);
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
    console.log(jogador.vidas);
    ```
    ```js
    // notação colchete
    console.log(jogador['vidas']);
    ```

---
## Objetos conhecidos

- ::: did-you-know .push-right width: 250px;
  Quando um objeto tem uma **propriedade que é uma função**, chamamos ela de **método**.
  :::
  Há vários objetos comuns que usamos no dia a dia: `Math`, `console`, `window`. Exemplos:
  - O objeto `Math` possui uma propriedade:
    - ```js
      Math.PI
      ```
      (PI → 3.14159) (cujo valor é `Number`) <!-- {.tipo-js.tipo-number} -->      
  - O objeto `console` possui uma propriedade
    - ```js
      console.log
      ```
      (log → function() {...})
  - O objeto `window` possui uma propriedade
    - ```js
      window.alert
      ```
      (alert → function() {...})
- E se quisermos criar nossos próprios objetos? #mcfaz? <!-- {li:.bullet} -->

<!-- {ul^3:.bulleted-0.push-code-right-without-clearing.compact-code-more} -->


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
     let jogador = new Object();
     jogador.pontos = 1420;
     jogador.vidas = 2;
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
};
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
};

loja.vender(); // loja.dinheiro = 515
loja.vender(); // loja.dinheiro = 530
```

- O **<u>valor</u> de uma propriedade** pode ser uma **função**
  - Nesse caso, chamamos ela de **método** <!-- {.alternate-color} -->
  - Todo método tem acesso ao próprio objeto com o ponteiro `this`
  - Objetos com métodos formam o princípio do conceito de **Orientação a Objetos**


---
## Outros tipos, baseados em `Object` <!-- {.tipo-js.tipo-object} -->

- Existem **outros tipos complexos**, que são **baseados em `Object`**: <!-- {.tipo-js.tipo-object} -->
  
  `Date`
    ~ Por exemplo, para imprimir o horário atual no console:
      ```js
      let agora = new Date();
      console.log(agora);     //Sun Jan 17 2021 18:11:46...
      ```
  
  `Function`
    ~ (sim! funções são objetos em JavaScript)
  
  `Array`
    ~ (vetores também são objetos)

  `SeuProprioTipo`™
    ~ (é possível criar novos tipos também)

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
  console.log('1' == 1);    // imprime true
  ```
  - A comparação `==` tenta converter um elemento no tipo do outro e depois
    compara
  - Neste caso, converte `1` em `'1'` e só então compara
- Para que essa conversão não aconteça, usamos `===` :thumbsup::
  ```js
  console.log('1' === 1);   // imprime false
  ```
  - Mais rápido para o computador, porque ele não faz a conversão
  - Prefira esta forma!! :wink:

---
<!-- {"hash": "o-objeto-math"} -->
## O objeto `Math` ([ver na 🌐 MDN][math-mdn])

- Além dos operadores matemáticos (_e.g._, `+, -, /, *`), existem
  outras funções matemáticas acessíveis via o objeto `Math`:
  ```js
  const pi = Math.PI;           // a constante pi
  let a = Math.sin(1);          // seno de 1 radiano
  let b = Math.cos(pi);         // cosseno de pi radianos
  let c = Math.pow(5, 2);       // 5 elevado a 2 (= 5**2)
  let d = Math.sqrt(100);       // raiz quadrada de 100
  let e = Math.random();        // nº aleatório entre [0, 1]
  let f = Math.round(0.5);      // arredonda p/ inteiro mais próximo (1)
  let g = Math.floor(0.5);      // arredonda p/ baixo ("chão": 0)
  let h = Math.ceil(0.5);       // arredonda p/ cima ("teto": 1)
  ```

[math-mdn]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math

---
<!-- {"layout": "2-column-content-zigzag", "embeddedStyles": ".push-code-right pre{float:right;}", "hash": "declarando-e-invocando-funcoes"} -->
# Declarando e invocando **funções**

- Funções são **declaradas** usando a palavra-chave `function` <!-- {style="float:initial"} --> + nome + parâmetros + corpo ➜
  - Há outras formas, como funções anônimas (veremos depois) e funções seta

```js
// DECLARA a função dizOla()
function dizOla() {
  console.log('olá queridão');
}
```

```js
// INVOCA a função dizOla()
dizOla();  
```
- Funções são **invocadas** (chamadas) por seu nome, seguido de parênteses

---
<!-- {"layout": "2-column-content-zigzag", "classes": "compact-code", "embeddedStyles": "#parametros{width:40%;}#parametros+pre{width:56%;}"} -->
## Declarando **parâmetros para funções**

- Os parâmetros ficam entre os parênteses e separados por vírgula: <!-- {li:.push-code-right} --> <!-- {ul:#parametros.bulleted.no-margin} -->
  - Não é necessário declarar o tipo do parâmetro - apenas o nome

```js
function dizOla(nome, pronome) {
  console.log('olá ' + pronome + ' ' + nome);
}
```

```js
dizOla('enfermeira', 'srta.');
// imprime 'olá srta. enfermeira'
dizOla('jujuba', '');
// imprime 'olá  jujuba'
dizOla();
// imprime 'olá undefined undefined'
```  

- Para invocar a função ← <!-- {ul:.bulleted} -->
  - Dá pra chamar uma função sem passar valores para os argumentos.
    Nesse caso, o parâmetro tem valor `undefined`

---
# Valor de **retorno** de funções

- A função pode retornar um valor explicitamente: <!-- {ul:.bulleted-0} -->
- <!-- {li:.code-split-2.compact-code-more} -->
  ```js
  function elevaAoCubo(numero) {            
    return numero ** 3;             
  }
  elevaAoCubo(2);     // retorna 8
  elevaAoCubo(3);     // retorna 27
  ```
  ```js
  function hipotenusa(cateto1, cateto2) {
    let somaQuadrados = cateto1 ** 2 + cateto2 ** 2;
    return Math.sqrt(somaQuadrados);
  }
  hipotenusa(3, 4);   // retorna 5
  ```
- Toda função sempre retorna um valor, mesmo sem `return`.
  Se não houver a palavra-chave, a função tem um `return undefined` implícito
- <!-- {li:.code-split-2.compact-code-more} -->
  ```js
  function imprimeNome(primeiro, ultimo) {
    console.log(primeiro + ' ' + ultimo);
  }
  // retorna undefined
  ```
  ```js
  function imprimeNome(primeiro, ultimo) {
    console.log(primeiro + ' ' + ultimo);
    return undefined;
  }
  ```
- São idênticas ↑ ⬈

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
  manha = true;
} else {
  manha = false;
}

if (nome === 'Robervaldo') { 
  conceito = 'A';
} else if (nome === 'Ana') {
  conceito = 'B';
} else {
  conceito = 'C';
}

if (estouComSono)
  dormir(); // mas evite omitir { }
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
    hp -= 10;
  } else {
    hp -= 50;
  }
  ```
  ```js
  // mesmo código, em 1 linha
  hp -= armaduraForte ? 10 : 50;
  ```
- Formato:
  ```js
  CONDICAO_TESTE ? VALOR_SE_TRUE : VALOR_SE_FALSE;
  ```

---
<!-- {"layout": "2-column-content", "hash": "switch"} -->
## **switch** (condicionais)

```js
let corDoSite = 'black';
switch (climaAgora) {
    case 'ensolarado':
      corDoSite = 'yellow';
      break;
    
    case 'nublado':
    case 'chuvoso':
      corDoSite = 'gray';
      break;

    default:
      corDoSite = 'white';
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
  let notas = [10, 4, 7, 8, 8];
  let cores = ['azul', 'verde'];
  let animais = []; // <- vetor vazio
  ```
- ```js
  console.log(notas.length);  // impr. 5
  console.log(cores.length);  // impr. 2
  ```
  Assim como _string_, um vetor tem um **comprimento** (propriedade `length` <!-- {style="float:none"} -->): <!-- {li:.push-code-right style="margin-top: 0.25em;"} -->
- Em JavaScript, vetores são heterogêneos
  - Os itens dos vetores **não** precisam ter o mesmo tipo
    ```js
    let listaDeCoisas = ['Aew', 35, true, [], 'outra string'];
    ```

---
<!-- {"elementStyles": { "h2 + pre": "overflow: hidden; width: 100%;"}} -->
## **Usando** vetores

```js
let listaDeCoisas = ['Aew', 35, true, [], 'outra string'];
```

- Indexação: usa-se os símbolos `[` e `]` para acessar um item do _array_ <!-- {ul:.bulleted.no-margin} -->
  ```js
  console.log(listaDeCoisas[1]);      // imprime 35
  listaDeCoisas[0] = '';              // altera primeiro elemento
  console.log(listaDeCoisas[0]);      // imprime string vazia
  ```
- _Arrays_ possuem métodos, [vários](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) (veremos outros mais adiante):
  ```js
  let frutas = [];                    // cria um array vazio
  frutas.push('kiwi');                // coloca 'kiwi' no array
  console.log(frutas);                // imprime ['kiwi']
  ```

---
# **for** <small>(forma tradicional)</small>

- <!-- {ul:.no-margin.full-width} -->
  Forma tradicional com `for (inicio; condicao; incremento)`:
  ```js
  for (let i = 0; i < 10; i++) {
    console.log(i);               // 0, 1, 2 ... 9
  }
  ```
- Percorrendo items de um _array_:
  ```js
  let cores = ['azul', 'rosa'];
  for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);        // azul, rosa
  }
  ```

---
<!-- {"layout": "2-column-content", "hash": "for-formas-mais-legais"} -->
# **for** <small>(formas **mais legais**)</small>

1. **For of**: `for (let item of array)` <!-- {ol:.no-bullets} -->
   ```js
   let cores = ['azul', 'rosa'];
   for (let cor of cores) {
     console.log(cor);
     // azul, rosa
   }
   ```
- **For each**: `array.forEach` <!-- {ul:.no-bullets} -->
  ```js
  let cores = ['azul', 'rosa'];
  cores.forEach(function(cor) {
    console.log(cor);
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
    console.log(i);
    i++;
  }
  ```
1. Condição **depois** <!-- {ol:.no-bullets} -->
   ```js
   let i = 0;
   do {
     i++;
     console.log(i);
   } while (i !== 10);
   ```

---
<!-- {"layout": "section-header", "hash": "mais-sobre-funcoes-e-metodos-uteis"} -->
# Mais sobre funções, Métodos úteis
## Mais coisas legais

- Função atribuída a variável
- Função como parâmetro
- Métodos comuns de strings
- Métodos comuns de vetores
<!-- {ul:.content} -->

---
# Mais sobre funções

- Em JavaScript as **funções são super flexíveis**
  1. Função "tradicional" (já vimos)
  1. Função anônima (próximo slide)
  1. Função seta (próximas aulas)
- Variáveis podem apontar para funções
- Podemos passar funções como parâmetro para outra função

---
<!-- {"layout": "2-column-content"} -->
## Função **anônima** (atribuída a **variável**)

1. Declaração de função "tradicional": <!-- {ol:.no-bullets} -->
   ```js
   function dizOla(nome) {
     console.log('olá ' + nome);
   }
   dizOla('submundo');
   ```
   - `function` + nome + (params)

- Criar uma **função <u>anônima</u>** e **atribuí-la a uma variável**: <!-- {ul:.no-bullets} -->
  ```js
  let dizOla = function(nome) {
    console.log('olá ' + nome);
  };
  dizOla('submundo');          
  ```
  - Funciona da mesma forma

---
## Passando **função como parâmetro**

- ```js
  function estudar(aluno, fnAprender) {
    console.log(aluno + ' aprendeu ' + fnAprender()); 
  }
  ```
  Vamos criar uma função que recebe outra como parâmetro →→→ <!-- {ul:.compact-code-more.bulleted} --> <!-- {li:.push-code-right} -->
- Ao chamar `estudar(...)` devemos passar uma função no segundo argumento <!-- {li:style="clear:both"} -->
- Neste exemplo, dependendo do que foi estudado, o aluno aprende coisas diferentes:
  ```js
  function lerHarryPotter() {                       function lerOlavoCarvalho() {
    return 'criatividade';                            return '?'; 
  }                                                 }
  let lerDarcyRibeiro = function() {
    return 'sociologia';
  }
  ```
- Agora vamos invocar a função `estudar(...)`:
  ```js
  estudar('André', lerHarryPotter);   // 'André aprendeu criatividade'
  estudar('Luiz', lerDarcyRibeiro);   // 'Luiz aprendeu sociologia'
  estudar('Jair', lerOlavoCarvalho);  // 'Jair aprendeu ?'
  ```

---
## Função vs Método

Função
~ sozinha no mundo, **ninguém é dono** dela
~ exemplo: todas as que vimos

Método
~ nasceu de algum objeto, ele **tem dono**
~ acesso ao ponteiro `this` (próximas aulas)
~ ex: as funções das strings, dos vetores (e outros)

- <!-- {ul:.full-width.no-margin} -->
  <!-- {.code-split-2} -->
  ```js
  // 'dobra' é uma função
  function dobra(n) {
    return 2 * n;
  }
  let nota = 5;
  dobra(nota);
  ```
  ```js
  // sqrt() é método de Math
  nota = Math.sqrt(25);

  // toLowerCase() é método
  // das strings
  'HaNa MonTAna'.toLowerCase();
  ```

---
<!-- {"hash": "metodos-comuns-de-strings-1"} -->
## **Métodos** comuns de **strings** (1/3)

Toda string possui vários métodos diferentes que podemos invocar

`texto.length`
  ~ não é um método, mas retorna quantos caracteres
  ~ `'trem'.length === 4`

`texto[i]`
  ~ não é um método, mas retorna o i-ésimo caractere
  ~ `'trem'[3] === 'm'`

`texto.toLowerCase()`
  ~ método que retorna tudo em minúsculas
  ~ `'Doug'.toLowerCase() === 'doug'`

`texto.toUpperCase()`
  ~ método que retorna tudo em maiúsculas
  ~ `'Doug'.toUpperCase() === 'DOUG'`
  
---
<!-- {"hash": "metodos-comuns-de-strings-2"} -->
## **Métodos** comuns de **strings** (2/3)

`texto.trim()`
  ~ método que remove espaços em branco ao redor
  ~ `' mosca  '.trim() === 'mosca'`

`t.indexOf(trecho)`
  ~ método que retorna a posição do `trecho` no `texto` (ou -1)
  ~ `'Thanos'.indexOf('os') === 4`

`t.substr(ini, tam)`
  ~ método que retorna um trecho dado início e tamanho
  ~ `'Pronto'.substr(0, 2) === 'Pr'`

`t.includes(trecho)`
  ~ método que verifica se texto contém o trecho
  ~ `'Hakuna'.includes('ku') === true`
  
`t.split(separad)`
  ~ método que retorna um vetor de trechos
  ~ `'Banana'.split('a') === ['B', 'n', 'n']`

---
<!-- {"hash": "metodos-comuns-de-strings-3"} -->
## **Métodos** comuns de **strings** (3/3)

`t.startsWith(trech)`
  ~ método que verifica se começa com o trecho
  ~ `'Hakuna'.startsWith('Ha') === true`

`t.endsWith(trecho)`
  ~ método que verifica se termina com o trecho
  ~ `'Hakuna'.endsWith('na') === true`

`t.replace(tr, novo)`
  ~ método que substitui um trecho por algo novo
  ~ (apenas primeira ocorrência)
  ~ `'ana'.replace('a', 'e') === 'ena'`

`t.replaceAll(tr, n)`
  ~ método que substitui um trecho por algo novo
  ~ (todas as ocorrências)
  ~ `'ana'.replaceAll('a', 'e') === 'ene'` <!-- {dl:style="margin-bottom: 0"} -->

- [Lista de métodos de string na MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String) <!-- {ul:.no-margin} -->


---
<!-- {"hash": "metodos-comuns-de-vetores-1"} -->
## **Métodos** comuns de **vetores** (1/3)

- Assim como as strings, os vetores também possuem vários métodos úteis
  
  `vetor.length`
    ~ não é método, mas retorna tamanho do vetor
    ~ `[5].length === 1`

  `vetor[i]`
    ~ não é método, mas retorna i-ésimo elemento
    ~ `[3, 10][0] === 3`
    ~ ```js
      let letras = ['x'];
      letras[0] = 'y';
      ```

---
<!-- {"hash": "metodos-comuns-de-vetores-2"} -->
## **Métodos** comuns de **vetores** (2/3)

`vetor.push(elem)`
  ~ método que insere `elem` ao final do vetor
  ~ `['a'].push('b') === ['a', 'b']`

`vetor.pop()`
  ~ método que remove último elemento
  ~ `['a', 'b'].pop() === ['a']`

`vetor.indexOf(elem)`
  ~ método que retorna o índice do elemento no vetor (ou -1)
  ~ `[5,6,7].indexOf(5) === 0`
  ~ `[5,6,7].indexOf(2) === -1`

---
<!-- {"hash": "metodos-comuns-de-vetores-3"} -->
## **Métodos** comuns de **vetores** (3/3)

`vetor.reverse()`
  ~ método que inverte a ordem dos elementos
  ~ `[1,2,3].reverse() === [3,2,1]`

`vetor.sort()`
  ~ método que coloca os elementos em ordem
  ~ `[8,1,-6].sort() === [-6,1,8]`
  ~ `['f', 'b'].sort() === ['b', 'f']`

`vetor.join(spacer)`
  ~ método que retorna uma string juntando os elementos
  ~ `['fl', 'rb'].join(' ') === 'fl rb'`
  ~ `['fl', 'rb'].join('+') === 'fl+rb'`

- [Lista de métodos comuns de vetores na MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

---
<!-- {"layout": "centered"} -->
# Referências

1. Capítulo 2 do livro "JavaScript: The Good Parts"
1. Mozilla Developer Network (MDN)

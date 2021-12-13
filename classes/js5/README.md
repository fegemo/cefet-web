<!-- {"layout": "title"} -->
# **JavaScript** parte 5
## Classes, nulos e indefinidos, rest/spread, functional

---
<!-- {"layout": "centered"} -->
# Roteiro

1. [Classes](#classes)
1. [Lidando com nulos e indefinidos](#lidando-com-nulos-e-indefinidos)
   - Parâmetros com valor padrão
   - Encadeamento opcional
   - Coalescência nula
1. Operadores [rest/spread](#operadores-rest-e-spread)
1. [Programação funcional](#programacao-funcional)

---
<!-- {"layout": "section-header", "hash": "classes"} -->
# Classes
## Forminha de objetos moderna

- _Getters_ e _setters_
- Definição de métodos mais enxuta
- Relembrando função construtora
- Classes
- Herança
- Membros explícitos
  - estáticos
  - públicos
  - privados
<!-- {ul^1:.content} -->

---
# _Getters_ e _setters_

- Há uma sintaxe específica para métodos que definem (_setter_) ou retornam (_getter_) o valor de uma propriedade:
  <!-- {li:.two-column-code.compact-code-more} -->
  ```js
  const retangulo = {
    largura: 5,
    altura: 10,
    get area() {
      return this.largura * this.altura;
    }
  };

  console.log(retangulo.area); //50
  retangulo.largura = 2;
  console.log(retangulo.area); //20
  const historico = {
    set pagina(url) {
      this.log.push(url)
    },
    log: []
  };
  historico.pagina = '/index.hml';
  historico.pagina = '/plantas.html';
  console.log(historico.log);
  // ['/index.html', '/plantas.html]
  ```
- Usados para **campos calculados** ou que requerem algum tipo de **intervenção**

---
<!-- {"classes": "compact-code"} -->
## _Shorthand method definitions_

- Foi introduzida uma sintaxe mais enxuta para definir métodos:
  - <!-- {ul^0:.code-split-2.no-padding.no-margin.no-bullets.full-width} -->
    Única forma antes
    ```js
    const objeto = {
      metodo: function() {
      }
    };
    ```
  - Nova forma mais enxuta:
    ```js
    const objeto = {
      metodo() {
      }
    };
    ```
1. <!-- {ol:.no-padding.no-bullets.no-margin.code-split-2.full-width} -->
   Se forem métodos `async`:
   ```js
   const objeto = {
     metodo: async function() {
       await algumaPromessa;
     }
   };
   ```
1. Nova forma com `async`:
   ```js
   const objeto = {
     async metodo() {
       await algumaPromessa;
     }
   };
   ```

---
<!-- {"backdrop": "oldtimes"} -->
## Função construtora (forma antiga)

- Podemos invocar uma **função construtora** que vai instanciar e
  inicializar objetos:
  ```js
  function Moto(modelo, dono) {
    this.modelo = modelo;         // Lembre que 'this' dentro de um
    this.dono = dono;             // objeto aponta para ele mesmo
  }
  let moto1 = new Moto('Kawasaki', 'Ninja Jiraya');
  let moto2 = new Moto('Harley Davidson', 'Lula Molusco');
  ```
  - Todo objeto terá as propriedades `modelo` e `dono`

---
# Classes em JavaScript

1. <!-- {ol:.no-margin} -->
   São formas para se criar objetos que possuem um mesmo conjunto inicial de propriedades e métodos
1. Construídas sobre _prototypes_, mas adicionam funcionalidade nova além do açúcar sintático
1. São uma espécie de funções especiais
1. Usam a palavra-chave `class` (reservada no JavaScript desde 1.0)
1. Definidas como _class declarations_  ou _class expressions_
  - <!-- {ul:.full-width.two-column-code.no-padding.no-bullets.no-margin.compact-code-more.centered} -->
    ```js
    // declaração
    class Moto {
      constructor(modelo, dono) {
        this.modelo = modelo;
        this.dono = dono;
      }
    }
    // expressão
    const Moto = class {
      constructor(modelo, dono) {
        this.modelo = modelo;
        this.dono = dono;
      }
    };
    ```

---
<!-- {"classes": "compact-code-more"} -->
# Sintaxe das classes

- <!-- {ul:.two-column-code.full-width.no-padding.no-bullets} -->
  ```js
  class Moto {
    constructor(modelo, dono, impulso = 0) {
      this.modelo = modelo;
      this.dono = dono;
      this.impulso = impulso;
    }
    
    // getter
    get chassi() {
      return `${this.modelo} de ${this.dono}`;
    }



    // método
    acelerar() {
      this.impulso++;
    }

    // método estático (da classe)
    static BuscarNaAPI(modelo) {
      // ...
    }
  }

  const motoca = new Moto('Harley', 'Bob E.');
  console.log(motoda.chassi);
  // 'Harley de Bob E.'
  ```

---
<!-- {"layout": "2-column-content", "classes": "compact-code-more"} -->
# Classes em <small>(ES5)</small> vs **<small>(ES2015)</small>**

```js
function Carro(marca, tipo) {
  this.marca = marca;
  this.tipo = tipo;
}

Carro.prototype.ligar =
  function(opcoes) {
  // método de instância
};

Carro.ordenar = function (v) {
  // método estático
}


const ka = new Veiculo('Ford', 'Ka');
ka.ligar();
Carro.ordenar([ka, uno, gol]);
```
```js
class Carro {
  constructor(marca, tipo) {
    this.marca = marca;
    this.tipo = tipo;
  }

  ligar(opcoes) {
    //...
  }

  static ordenar(veiculos) {
  }
}


const ka = new Carro('Ford', 'Ka');
ka.ligar();
Carro.ordenar([ka, uno, gol]);
```

---
<!-- {"layout": "2-column-content"} -->
# Herança em <small>(ES5)</small> vs **<small>(ES2015)</small>**

```js
function Carro(marca, tipo, modelo) {
  Veiculo.call(this, marca, tipo);
  this.modelo = modelo;
}

Carro.prototype = new Veiculo();
Carro.prototype.ligar =
  function(opcoes) {
    // chamando o "super.ligar"...
    Veiculo.prototype.ligar
      .call(this, opcoes);
    // fazer coisas específicas
    // de um carro...
}
```

```js
class Carro extends Veiculo {
  constructor(marca, tipo, modelo) {
    super(marca, tipo);
    this.modelo = modelo;
  }

  ligar(opcoes) {
    super.ligar(opcoes);
  }
}
```

---
<!-- {"classes": "compact-code-more"} -->
## Classes em ES2019+

- Foi introduzida a [proposta "class fields"][class-fields]:
  ```js
  class Jogador extends Componente {
    static propTypes = {  // membros estáticos da classe
      id: PropTypes.string.isRequired
    };
    state = {             // membros da instância da classe
      username: ''
    };
    #qtdeMovimentos = 0;   // membro de instância PRIVADO

    constructor(username) {
      this.state.username = username;
    }

    irPara(destino) {
      this.#andar();
    }

    #andar() {            // método PRIVADO
      this.#qtdeMovimentos++;
    }
  }
  ```

[class-fields]: https://github.com/tc39/proposal-class-fields

---
<!-- {"layout": "section-header", "hash": "lidando-com-nulos-e-indefinidos"} -->
# Lidando com nulos e indefinidos
## Açúcar sintático

- Parâmetros padrão
- Encadeamento opcional
- Coalescência nula
<!-- {ul:.content} -->

---
<!-- {"layout": "regular", "hash": "parametros-com-valores-padrao"} -->
# Parâmetros com **valores padrão** (ES2015)

- Como fazíamos em ES5:  <!-- {ul:.compact-code-more} -->
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
- Regra: a partir do primeiro parâmetro com valor padrão, todos os outros também devem possuir <!-- {li:.note.info} -->

---
# Conceito de _truthy_ e _falsey_ em JavaScript

- <!-- {ul:.compact-code} -->
  O tipo **Boolean** define os valores `true` e `false`
- Mas a linguagem tem um **conceito mais abrangente**: "_truthy_" e "_falsey_" **ao avaliar expressões**. Exemplos:
  ```js
  // falsey
  '', 0, false, null, undefined, NaN
  // truthy: quaisquer outros valores
  ```
- Isso nos permite usar **curto circuito** para definir valores:
  ```js
  const b = funcao();
  const a = b || 20;
  // pega valor de b, mas, se 
  // for falsey, atribui 20
  ```
  - Mas há problemas em alguns casos...

---
<!-- {"hash": "encadeamento-opcional"} -->
# Encadeamento opcional (ES2020)

- <!-- {ul:.no-margin} -->
  É comum querermos **acessar propriedades** de objetos que têm **chance de serem nulas ou indefinidas**. Exemplo:
  <!-- {li:.two-column-code.compact-code-more} -->
  ```js
  const voo1 = {
    companhia: 'Gol',
    destino: {
      codigo: 'SYD',
      cidade: 'Sidney'
    }
  }
  const voo2 = {
    companhia: 'Azul'
  }



  ```
1. <!-- {ol:.code-split-2.compact-code-more.no-bullets.no-margin.no-padding.full-width} -->
   Como fazíamos em ES5:
   ```js
   const cidade = voo2.destino && voo2.destino.cidade;
   // ...ou...
   let cidade = null;
   if (voo2.destino) {
     cidade = voo2.destino.cidade;
   }
   ```
1. Como fazemos hoje:
   ```js
   const cidade = voo2.destino?.cidade;
   ```

---
<!-- {"hash": "coalescencia-nula", "classes": "compact-code-more"} -->
# Operador de coalescência nula (ES2020)

- Para **dar valores padrão para variáveis ou expressões**, podemos usar o operador de coalescência nula
  ```js
  const b = funcao();
  const a = b ?? 20;
  ```
- Se o lado esquerdo for `null` ou `undefined`, usa o lado direito
- Mas e o `||`?
  ```js
  const b = funcao();
  const a = b || 20;
  ```
  - Se `b === 0` (valor válido), ainda assim `a = 20`
  - `||` verifica se lado esquerdo é `falsey`, então usa lado direito

---
<!-- {"layout": "section-header", "hash": "operadores-rest-e-spread"} -->
# Operadores rest/spread
## Ambos usando `...`

- Operador _rest_
- Operador _spread_
<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
# Operadores **Rest** e Spread

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
# Operadores Rest e **Spread**

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
# Operadores Rest e Spread

- O operador **rest** transforma um parâmetro em um _array_ de valores
- O operador **spead** transforma um "_array_ de valores" em
  "valores separados por vírgula"
  ```js
  const pets = ['rat', 'dragon', 'bee'];

  console.log(pets[0], pets[1], pets[2])  // rat dragon bee
  console.log(...pets);                   // rat dragon bee
  ```

---
<!-- {"classes": "compact-code-more"} -->
## Usos comuns de spread

- Métodos de `Math`:
  ```js
  Math.max(1,3,5)      // 5
  Math.max([1,3,5])    // NaN
  Math.max(...[1,3,5]) // 5
  ```
- Concatenando vetores ou objetos:
  <!-- {li:.two-column-code} -->
  ```js
  const hello = {hello: '😋😛😜'};
  const world = {world: '🙂🥰😍🤩!'};
  const helloWorld = {...hello, ...world};
  // {hello: '😋😛😜', world: '🙂🥰😍🤩!'}
  ```
- Clonando vetor ou objeto:
  <!-- {li:.two-column-code} -->
  ```js
  const frutas = ['🍏','🍊','🍌','🍉','🍍']
  const frutasClonado = [...frutas];
  // ['🍏','🍊','🍌','🍉','🍍']
  const objeto1 = {hello: '🤪'}
  const objClonado = {...objeto1}
  // {hello: '🤪'}
  ```
- Adicionando itens ou propriedades:
  <!-- {li:.two-column-code} -->
  ```js
  const frutas = ['🍏','🍊','🍌']
  const maisFrutas = ['🍉', '🍍', ...frutas]
  const millenials = {online: true, rir: '😂'}
  const zennials = {...millenials, rir: 'kkkk'}
  ```

---
<!-- {"layout": "section-header", "hash": "programacao-funcional"} -->
# Programação funcional
## Inspirado no paradigma

- O que é programação funcional
- Relembrando funções seta
- Métodos de _arrays_:
  1. `filter`
  1. `find`
  1. `map`
  1. `reduce`
- Exemplos
<!-- {ul:.content} -->

---
# O que é programação funcional

- Paradigma de programação declarativa (inspirada em matemática)
- Tenta evitar:
  1. estado compartilhado
  1. mutação de dados
  1. efeitos colaterais
- Tende a ser mais conciso, preciso, fácil de testar
  - <!-- {ul^0:.two-column-code.no-bullets.no-padding.no-margin.compact-code-more} -->
    ```js
    // imperativo
    const notas = [10, 8, 9]
    const dobra = n => 2*n
    let dobros = []
    for (let nota of notas) {
      dobros.push(dobra(nota))
    }
    dobros === [20, 16, 18]
    // funcional
    const notas = [10, 8, 9]
    const dobra = n => 2*n
    notas.map(dobra) === [20, 16, 18]



    ```

---
<!-- {"classes": "compact-code-more", "hash": "funcoes-seta-com-vetores", "backdrop": "oldtimes"} -->
## Exemplo: funções seta com vetores

- <!-- {ul:.no-padding.no-margin.no-bullets.flex-align-center} -->
  ```js
  let usuarios = ['Joel', 'Fani', 'Fúlvio'];
  let alunos = [{ matricula: '...' }];
  let numeros = [1, 4, 2, 5];
  ```

1. Pegar apenas usuários que começam com letra 'F': <!-- {ol:.full-width.bulleted-0} -->
   - <!-- {.code-split-2} -->
     <!-- {ul:style="padding-left: 0"} -->
     ```js
     usuarios.filter(function(nome) {
       return nome.startsWith('F');
     });
     ```
     ```js
     usuarios.filter(nome => nome.startsWith('F'));
     
     
     ```
2. Buscar pelo aluno com uma matrícula:
   - <!-- {.code-split-2} -->
     <!-- {ul:style="padding-left: 0"} -->
     ```js
     alunos.find(function(aluno) {
       return aluno.matricula === '2005046102';
     });
     ```
     ```js
     alunos.find(al => al.matricula === '2005046102');
     
     
     ```
3. Vetor com os quadrados do original:
   - <!-- {.code-split-2} -->
     <!-- {ul:style="padding-left: 0"} -->
     ```js
     numeros.map(function(numero) {
       return numero ** 2;
     });
     ```
     ```js
     numeros.map(numero => numero ** 2);


     ```

---
# Mais métodos de vetores

`vetor.every(predicado)` <!-- {dl:.width-30} -->
~ Verifica se todos elementos do vetor atendem a condição do predicado
  ```js
  const alturas = [1.65, 1.55, 1.78, 1.88]
  const menorQue180 = n => n < 1.8
  alturas.every(menorQue180) === false
  ```

`v.reduce(pred, inicial)`
~ Reduz o vetor a apenas 1 elemento, dado um valor inicial
  ```js
  // soma todos itens
  const numeros = [1, 2, 7]
  const soma = (acumulador, atual) => acumulador + atual
  numeros.reduce(soma, 0) === 10
  ```

---
# Composição de funções

- Uma característica da programação funcional é a composição de funções
- <!-- {li:.two-column-code.compact-code-more} -->
  Podemos criar uma função que gera novas funções:
  ```js
  // sem composição
  const menorQue180 = n => n < 180
  const menorQue170 = n => n < 170
  const menorQue160 = n => n < 160

  // usando composição
  const menorQue = valor => n => n < valor
  alturas.every(menorQue(180)) === false
  alturas.every(menorQue(190)) === true
  ```
  - `menorQue` é uma função de alta ordem (retorna uma função)
  - Dizemos que `menorQue` é uma função "currificada"

---
<!-- {"layout": "centered"} -->
# Referências

- Na MDN:
  1. [Optional chaining](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
  1. [Nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
  1. [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
  1. [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
  1. [Kangax Compatibility Table](https://kangax.github.io/compat-table/es2016plus/)

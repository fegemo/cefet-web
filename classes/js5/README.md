<!-- {"layout": "title"} -->
# **JavaScript** parte 5
## Classes, parâmetros default, rest/spread, functional

---
<!-- {"layout": "centered"} -->
# Roteiro

1. [Classes](#classes)
1. [Parâmetros com valor padrão](#parametros-com-valor-padrao)
1. Operadores [Rest/Spread](#rest-spread)
1. [Programação funcional](#programacao-funcional)

---
<!-- {"layout": "section-header", "hash": "classes"} -->
# Classes
## Forminha de objetos moderna

- a
- b
<!-- {ul:.content} -->

---
<!-- {"layout": "2-column-content"} -->
# Classes em <small>(ES5)</small> vs **<small>(ES2015)</small>**

```js
function Veiculo(marca, tipo) {
  this.marca = marca;
  this.tipo = tipo;
}
Veiculo.prototype.ligar =
  function(opcoes) {
  // método de instância
};
Veiculo.ordenar = function (v) {
  // método estático
}
new Veiculo('Ford', 'Ka');
```
```js
class Veiculo {
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
new Veiculo('Ford', 'Ka');
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
  ligar(opcoes) {
    super.ligar(opcoes);
  }
}
```

---
## Classes em ES2019+

- Foi introduzida a [proposta "class fields"][class-fields]:
  ```js
  class PlayerInput extends Component {
    static propTypes = {  // membros estáticos da classe
      id: PropTypes.string.isRequired
    }
    state = {             // membros da instância da classe
      username: ''
    }
    #qtdeMovimentos = 0   // membro de instância PRIVADO
    render() {
    }
  }
  ```


[class-fields]: https://github.com/tc39/proposal-class-fields
---
<!-- {"layout": "section-header", "hash": "parametros-com-valores-padrao"} -->
# Parâmetros com<br>valores padrão
## Argumentos opcionais

- a
- b
<!-- {ul:.content} -->


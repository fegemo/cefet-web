# Javascript - Parte 5

---
# Roteiro

1. _Task runners_
1. Bibliotecas Javascript
1. MVC

---
## Eventos em jQuery

- Para se atribuir _handlers_ de eventos usando jQuery, selecionamos os
  alvos e:
  ```js
  var itens = $('.item');
  itens.click(function(e) {
    // item de menu clicado
  });
  ```
- Outros eventos podem ser adicionados por meio de outros métodos, por exemplo:
  ```js
  itens.submit(func);
  itens.mousedown(func);
  itens.keyup(func);
  ```

---
# Referências

1. Mozilla Developer Network (MDN)

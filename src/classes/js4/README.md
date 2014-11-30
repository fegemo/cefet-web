# Javascript - Parte 4

---
# Roteiro

1. _Web Storage_
1. AJAX
1. JSON
1. jQuery

---
# _Web Storage_

---
## _Web Storage_

- A especificação do HTML5 detalha o _Web Storage_, uma forma de
  **armazenamento de dados no navegador** por parte de uma página Web
- Exemplos de **motivação**:
  1. Salvar as preferências do usuário para quando ele voltar à página
  1. Fazer um _cache_ de informações temporário ou permanente
- Existem dois sabores:
  1. `localStorage`
  1. `sessionStorage`

---
## _Web Storage_ (cont.)

- Armazenam apenas _Strings_
- Cada item armazenado é composto por uma chave e um valor (famoso
  _key-value pair_)
  - Exemplo:
    ```js
    window.localStorage.setItem('nome', 'Papa léguas');
    window.sessionStorage.setItem('nome', 'Coiote');
    ```
- O tamanho do espaço para armazenamento varia entre navegadores, mas costuma
  ser algo próximo de 5MB para `localStorage` e 5MB para `sessionStorage`

---
## **localStorage**

- O navegador armazena informações permanentemente para aquela página
  - Ou até que o usuário remova "Cookies e outros dados de site e plug-in"

    ![](images/clear-cookies.png)

---
## Exemplo de uso do **localStorage**

- Um evento de clique em um botão que faz o menu aparecer e desaparecer:
  ```js
  botaoMenu.addEventListener('click', function() {
    var menu = document.getElementById('menu'),
        expandido = menu.classList.toggle('expandido');

    // expandido = true ou false
    window.localStorage.setItem('menu-expandido', expandido);
  });
  ```

---
## Exemplo de uso do **localStorage** (cont.)

- Após a página ter sido carregada (e.g., um _script_ ao final do _body_):
  ```js
  var menuExpandido = localStorage.get('menu-expandido'),
      menu = document.getElementById('menu');
  if (menuExpandido === 'true') {
    menu.classList.add('expandido');
  }
  ```

---
## Interface do **localStorage**

- Salvar um item:
  ```js
  localStorage.setItem('chave', 'valor');
  ```
- Recuperar um item por chave:
  ```js
  localStorage.getItem('chave');
  ```
- Recuperar um item por índice numérico:
  ```js
  localStorage.key(numero);
  ```

---
## Interface do **localStorage** (cont.)

- Excluir uma entrada:
  ```js
  localStorage.removeItem('chave');
  ```
- Limpar todas as entradas:
  ```js
  localStorage.clear();
  ```
- Quantidade de entradas salvas:
  ```js
  localStorage.length;
  ```

---
## **sessionStorage**

- Exata mesma funcionalidade do `localStorage`, porém o navegador armazena
  as informações apenas enquanto o **usuário está "em uma sessão"**
  - Uma sessão é encerrada:
    1. Com o usuário digitando outro endereço na barra
    1. O navegador fechando
    1. O usuário navegando para outro domínio naquela mesma janela/aba
- A interface do `sessionStorage` também é a mesma daquela do `localStorage`

---
## Tamanho do _web storage_

...

---
## Formato de armazenamento

- Como dito, o _web storage_ armazena apenas _Strings_
  - Mas seria útil armazenar objetos complexos. Por exemplo:
    ```js
    var jogo = { fase: 4, vidas: 5, jogador: 'Ariosvaldo' };
    localStorage.setItem('estado-do-jogo', jogo);

    console.log(localStorage.getItem('estado-do-jogo'));
    // Saída no console: "[object Object]"
    ```

---
## Armazenando objetos serializados

- Na verdade, o Javascript sabe **serializar e desserializar** objetos em
  _Strings_, usando um formato que se chama
  <abbr title="Javascript Object Notation">JSON</abbr>
    - JSON é Javascript Object Notation
  - Salvando:
    ```js
    localStorage.setItem('estado-do-jogo', JSON.stringify(jogo));
    // Salvou: {"fase":4,"vidas":5,"jogador":"Ariosvaldo"}"
    ```
  - Recuperando:
    ```js
    var jogo = localStorage.getItem('estado-do-jogo');
    jogo = JSON.parse(jogo);
    ```

---
# JSON

---
## JSON

- _Javascript Object Notation_ é um formato leve de troca de dados
- Pode ser usado para troca de informação entre programas escritos em
  diversas linguagens
  - Assim como o XML
- Baseado na notação literal de objetos do Javascript
- É codificado como texto puro
- Exemplo:
  ```json
  {
    "idProduto": 44235,
    "quantidade": 1
  }
  ```

---
## JSON

- O formato possui seis tipos de valores:
  <ul class="multi-column-list-4">
    <li>Objetos</li>
    <li>Arrays</li>
    <li>`String`</li>
    <li>`Number`</li>
    <li>`Boolean`</li>
    <li>`null`</li>
  </ul>
- Um objeto JSON é como um objeto Javascript: um container não ordenado de
  propriedades
  - Uma chave é sempre uma string entre àspas duplas
    - Diferente de Javascript, que não precisa de àspas
  - Um valor pode ser qualquer um dos listados acima
- Espaço em branco ou quebras de linha não alteram a semântica

---
## **JSON** vs XML

```json
[
  {
    "nome": "JavaScript - The Good Parts",
    "autores": ["Douglas Crockford"],
    "ano": 2005
  },
  {
    "nome": "Node.js in Action",
    "autores": ["Mike Cantelon", "Mark Harter"],
    "ano":  2014
  }
]
```

---
## JSON vs **XML**

```xml
<livros>
  <livro nome="JavaScript - The Good Parts" ano="2005">
    <autores>
      <autor>Douglas Crockford</autor>
    </autores>
  </livro>
  <livro nome="Node.js in Action" ano="2014">
    <autores>
      <autor>Mike Cantelon</autor>
      <autor>Mark Harter</autor>
    </autores>
  </livro>
</livros>
```

---
## JSON no navegador

- O objeto `window` possui o objeto `JSON` que contém métodos de conversão
  do formato JSON entre _string_ e objetos Javascript
  - De Javascript para _string_ (serialização)
    ```js
    JSON.stringify({ nome: 'Flavio', sobrenome: 'Coutinho' });
    // "{"nome":"Flavio","sobrenome":"Coutinho"}"
    ```
  - De _string_ para Javascript (desserialização)
    ```js
    var banco = JSON.parse('{"nome":"Itaú","codigo":"341"}');
    console.log(banco.nome);    // Itaú
    ```

---
# AJAX

---
## Problema

- Algumas vezes, queremos alterar apenas um pedaço de uma página Web
  - Exemplo no Facebook:
    1. Botão _like_
    1. Enviar comentário
  - Exemplo no Twitter:
    1. Carregar mais _tweets_
  - Exemplo em lojas virtuais:
    1. Adicionar um produto ao carrinho sem sair da página

---
## Problema

- Se fosse possível enviar e receber apenas um pedaço de página em vez de
  páginas completas, o tráfego entre navegador e servidor reduziria bastante
- De fato, os navegadores possibilitam a realização de uma requisição/resposta
  assíncrona, sem o carregamento de uma página completa
  - Essa técnica se chama AJAX

---
## <abbr title="Asynchronous JavaScript and XML">AJAX</abbr>

- É a sigla para _Asynchronous JavaScript and XML_
- É uma operação realizada via Javascript no navegador
- Originalmente, usava-se Javascript para fazer uma requisição de dados ao
  servidor, que respondia no formato <abbr title="eXtensible Markup Language">XML<abbr>
  - Hoje em dia, qualquer objeto reconhecido pelo navegador
- Usamos um objeto do tipo `window.XMLHttpRequest` para fazer a requisição e
  receber a resposta

---
## O **XMLHttpRequest**

- Para cada requisição, devemos instanciar um objeto `XMLHttpRequest`,
  configurá-lo e acioná-lo. Supondo um exemplo de botão "curtir":
  ```js
  var curtirRequest = new XMLHttpRequest();
  curtirRequest.onreadystatechange = callbackCurtir;
  curtirRequest.open('GET', '/curtir/3434', true);
  curtirRequest.send(null);
  ```
- Uma função (configurada em `onreadystatechange`) é invocada a cada **mudança
  de estado** do objeto (veja nos próximos 2 slides)

---
## Estados de um XMLHttpRequest

![](images/colocar-imagem-com-estados-ajax.png)

---
## _Callback_ de mudança de estado

- Invocada a cada alteração de estado do objeto `XMLHttpRequest`
  ```js
  function callbackCurtir() {

  }
  ```

---
##

---
##

---
##


---
# jQuery

---
## Jake Weary

- Criado em ... na cidade de ...
-

- Não confunda Jake Weary com jQuery!!

---
## jQuery

---
##

---
##

---
# Referências

1. Capítulo 12 do livro "Head First: JavaScript"
1. Apêndice E do livro "JavaScript - The Good Parts"
1. Mozilla Developer Network (MDN)

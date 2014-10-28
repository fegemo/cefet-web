# HTML - Parte 6

## Formulários

---
# Roteiro

1. Como os formulários funcionam
1. Elementos de **dados**
1. Elementos de **ação**
1. GET ou POST?
1. Validação
1. Exercício: O que é o que é?

---
# Como funcionam os formulários

---
## Motivação

- Até agora, vimos que o protocolo `http` usa um modelo de requisição e
  resposta, em que um navegador (cliente) solicita recursos (e.g., páginas,
  imagens) para um servidor e o servidor responde com o conteúdo do arquivo
  - Ou seja, aparentemente apenas o servidor pode enviar conteúdo

- Assim, como fazer se quisermos solicitar informação dos usuários?

---
## Métodos **http**

- Na verdade, o `http` possui vários métodos (ou verbos) e alguns deles
  **permitem o envio de informações por parte do cliente**
  - O método que vimos até agora se chama `GET`
  - Um exemplo de requisição `GET`:
    ```
    GET /en-US/docs/Web/CSS/animation HTTP/1.1
    Host: developer.mozilla.org
    ```
---
## Métodos **http** (cont.)

- Outros métodos ([RFC2616](http://tools.ietf.org/html/rfc2616#section-9)):
  - GET
  - HEAD
  - PUT
  - DELETE
  - PATCH ([RFC5789](http://tools.ietf.org/html/rfc5789))
  - CONNECT
  - [POST](http://tools.ietf.org/html/rfc2616#section-9.5)
    - Usado para enviar informações do cliente para o servidor

---
## Exemplo de formulário

- Um formulário tipicamente usado para contato:
  ```html
  <form action="/enviar.php" method="POST">
    <label for="nome">Seu nome:</label> <input name="nome"><br>
    <label for="bairro">Seu bairro</label> <input name="bairro">
    <input type="submit" value="Enviar">
  </form>
  ```
- Resultado:
  <form action="/enviar.php" method="POST">
    <label for="nome">Seu nome:</label> <input name="nome"><br>
    <label for="bairro">Seu bairro</label> <input name="bairro">
    <input type="submit" value="Enviar">
  </form>

---
## Como montar um formulário

- Usa-se o elemento `<form></form>`
- O atributo `action="uma url"` contém para onde o conteúdo do formulário
  deve ser enviado
- O atributo `method="..."` pode ter o valor `POST` ou `GET` e **altera o
  método `http`** a ser usado para fazer a requisição quando o formulário for
  submetido
- O atributo `enctype="..."` descreve como os dados do formulário são
  codificados para serem transmitidos em uma requisição `http`
  - Valores possíveis
    1. `application/x-www-form-urlencoded`, formato padrão
    1. `multipart/form-data`, para envio de arquivos
    1. `text/plain`, desencorajado - apenas para _debug_

---
## Como funciona o exemplo

- Os dados de um formulário só são **enviados** quando o **botão de submissão
  é ativado**
  - `<input type="submit">`, ou
  - `<button type="submit">` (`html5`)
- Quando ocorre a submissão, o navegador realiza uma requisição `http` usando
  um método (atributo `method`) para um endereço (atributo `action`)
  ```
  POST /enviar.php HTTP/1.1
  Host: fegemo.github.io

  nome=Flavio&bairro=Jaqueline
  ```
  - Repare que os dados são enviados como uma _string_ de pares de nome
    e valor concatenados com o sinal &amp;
  - Os nomes advêm da propriedade `name` dos `input`s

---
# Elementos de *dados**

---
## Caixa de texto

- _Markup_:
  ```html
  <input name="palavra" type="text" placeholder="Digite...">
  <input name="palavra">
  <input>
  ```
- Resultado:

  <input type="text"
      placeholder="Digite...">

---
## Caixa de texto para **e-mail** ![À partir do html5](images/html5-logo-32.png)

- <img src="images/form-email-sample.png" style="float: right; margin-left: 20px">
  Idêntico à caixa de texto, porém o navegador espera um e-mail válido
- _Markup_:
  ```html
  <label>Remetente:
    <input name="remetente" type="email">
  </label>
  ```
- Resultado:

  <label>Remetente:
    <input name="remetente" type="email">
  </label>

---
## Outros semelhantes à caixa de texto ![À partir do html5](images/html5-logo-32.png)

- Pesquisa

  `<input type="search">` <input type="search">
- URL

  `<input type="url">` <input type="url">
- Telefone

  `<input type="tel">` <input type="tel">

---
## Checkbox

- _Markup_:
  ```html
  <label>
    <input name="subscricao" type="checkbox" value="sim">Inscrever-se?
  </label>
  ```
- Resultado:

  <label>
    <input type="checkbox">Inscrever-se?
  </label>
- Atributos:
  - `checked`, para deixar marcado

---
## Radio (escolha dentro de um grupo)

- _Markup_:
  ```html
  <label><input name="cor" type="radio" value="azul">Azul</label>
  <label><input name="cor" type="radio" value="verde">Verde</label>
  ```
- Resultado:

  <label>
    <input name="cor" type="radio" value="azul">Azul
  </label>
  <label>
    <input name="cor" type="radio" value="verde">Verde
  </label>
- Repare que apenas uma cor pode ser escolhida - porque os dois `input` têm o
  mesmo `name`

---
## Select (lista de opções)

- _Markup_:
  ```html
  <label for="sabor">Sabor da pizza:</label>
  <select name="sabor" id="sabor">
    <option value="marg">Marguerita</option>
    <option value="muzza" selected>Muzzarela</option>
  </select>
  ```
- Resultado:
  <label for="sabor">Sabor da pizza:</label> <select name="sabor" id="sabor">
    <option value="marg">Marguerita</option>
    <option value="muzza" selected>Muzzarela</option>
  </select>
- Atributos
  - `selected`, para o `option`, para deixar selecionado
  - `multiple`, para o `select`, para permitir mais de um `option`
---
## Data e Hora ![À partir do html5](images/html5-logo-32.png)

- _Markup_
  ```html
  <input type="date"> <!-- exemplo -->
  <input type="datetime">
  <input type="datetime-local">
  <input type="month">
  <input type="week">
  <input type="time">
  ```
- Resultado:

  <input type="date">

---
## Números ![À partir do html5](images/html5-logo-32.png)

- _Markup_:
  ```html
  <input type="number" step="0.5"><br>
  <input type="range" min="0" max="100" step="1">
  ```
- Resultado:

  <input type="number" step="0.5" size="4"><br>
  <input type="range" min="0" max="100" step="1">

---
## Cores ![À partir do html5](images/html5-logo-32.png)

- _Markup_:
  ```html
  Cor: <input type="color">
  ```
- Resultado:

  Cor: <input type="color">

---
## Outros elementos de dados

| Tipo               	| Markup                  	| Exemplo                 	|
|--------------------	|-------------------------	|-------------------------	|
| Seleção de arquivo 	| `<input type="file">`     | <input type="file">     	|
| Campo de senha     	| `<input type="password">`	| <input type="password"> 	|
| Texto oculto       	| `<input type="hidden">`	  |                          	|
| Texto multi-linha   | `<textarea></textarea>`   | <textarea></textarea>     |

---
# Elementos de ação

<img src="images/rambo.png" alt="Foto do Rambo" class="portrait">

---
## Botões de submissão

- Quando acionados, enviam (submetem) os dados para o endereço
  especificado pelo atributo `action` do formulário
- Existem duas formas para criar a marcação
  - `input`
    ```html
    <input type="submit" value="Enviar">
    ```
  - `button`
    ```html
    <button type="submit">Enviar</button>
    <button>Enviar</button>
    ```

---
## Outros botões

- Botões para voltar os campos do formulário a seus valores iniciais
  ```html
  <input type="reset" value="Limpar">
  <button type="reset">Limpar</button>
  ```
- Botões que não fazem nada, mas podem ter algum comportamento associado
  (via javascript)

  ```html
  <input type="button" value="Ver detalhes">
  <button type="button">Ver detalhes</button>
  ```

---
## Outros botões (cont.)

- Botão de imagem
  - Serve para submeter e para enviar as coordenadas da imagem onde o usuário
    clicou
    ```html
    <input type="image" src="images/cafe.png">
    ```
  - Resultado:

    <input type="image" src="images/cafe.png">

---
# **GET** ou **POST**?
---
## Método de um formulário

- É possível usar `GET` para enviar um formulário
- Contudo, os dados são enviados na própria URL, em uma estrutura
  chamada _query string_
  - Partes de uma URL

    ![](images/url-1.png)
  - Uma URL completa

    ![](images/url-2.png)

---
## Comparação

|                            	| GET                       	| POST                      	|
|----------------------------	|---------------------------	|---------------------------	|
| Botão voltar               	| Ok                        	| Dados serão ressubmetidos 	|
| Histórico                  	| Parâmetros são salvos     	| Parâmetros não são salvos 	|
| Ad. aos favoritos          	| Ok                        	| Não é possível            	|
| Restrição de tamanho       	| Tamanho da URL (~2048)    	| Sem restrição             	|
| Restrição de tipo de dados 	| Apenas ASCII              	| Sem restrição             	|
| Visibilidade               	| Dados visíveis ao usuário 	| Dados "ocultos"           	|
| Segurança                   | Menos seguro                | Um pouco mais seguro        |

---
# Validação

---
## Validação automática

- De acordo com o tipo do campo de dados, o navegador se encarrega de validar
  se o conteúdo está de acordo com o domínio **antes do formulário ser
  submetido**
- Por exemplo, digite um e-mail inválido e tente enviar o formulário abaixo:
  - <form action="javascript:void(0);">
      <label>Digite seu e-mail: <input type="email"></label> <button>Enviar</button>
    </form>
- Para previnir essa validação, basta acrescentar um parâmetro ao formulário:
  ```html
  <form novalidate>
    ...
  </form>
  ```

---
## Atributos para validação

- Campo obrigatório: atributo `required`
  ```html
  <input type="text" required> <button>Enviar</button>
  ```
  <form action="javascript:void(0);">
    <input type="text" required> <button>Enviar</button>
  </form>
- Expressão regular do domínio: atributo `pattern`
  ```html
  <input type="text" pattern="[0-9]{3,5}"> <!-- 3 a 5 dígitos -->
  ```
  <form action="javascript:void(0);">
    <input type="text" pattern="[0-9]{3,5}"> <button>Enviar</button>
  </form>

---
## Outros atributos

- `placeholder="..."`, para mostrar um texto explicativo quando estiver vazio
- `maxlength="..."`, para definir o limite de caracteres
- `autofocus`, para receber o foco quando a página for carregada
- `disabled`, para proibir edições

---
# Exercício: O que é o que é?

- O que é terrível, verde, come pedras e mora debaixo da terra??

---
## Exercício

- <div style="float: right; width: 120px; height: 160px; background-image: url('images/terrivel-eating-big.png')"></div>
  Conheça o <span style="font-family: 'Ravie', serif; text-shadow: 2px 2px rgb(102, 102, 102)">Incrível <span style="color: #00FF21">Monstro Verde</style> que Come Pedras e Mora Debaixo da Terra</span>
- Objetivo:
  1. Dar comida para o terrível monstro verde (etc. etc.)
  1. Entender o funcionamento de um formulário web
  1. Entender a diferença entre os métodos http GET e POST

---
## Enunciado

O terrível monstro verde (etc. etc.) está com fome e você deve dar comida para
ele. Ele acaba de ir para a superfície e para que ele não comece a comer
pessoas, você deve dar a ele seu segundo alimento preferido: pedras.

Para isso, você deve ir até onde ele está e enviar algumas pedras para ele.
Atualmente, ele está neste endereço: http://terrivel.herokuapp.com/monster.
Para dar comida a ele, você deve encomendá-las a partir de uma loja virtual.

---
## Enunciado (cont.)

- Para fazer sua encomenda, você deve fazer um formulário web especificando o seu
  pedido. Ele deve conter as seguintes informações:
  - `num_pedras`, [0, &infin;[, &isin; N
  - `tam_pedras`, [1, 7], sendo 3 o padrão
    - são permitidos valores decimais a cada 0,5 (e.g.: 1, 1,5, 2)
  - `nome`, para dar um apelido carinhoso ao seu monstro
    - Deve conter apenas letras, maiúsculas ou minúsculas

---
## Enunciado (cont.)

- Você também pode fornecer algumas informações adicionais, como:
  - `corCeu1`, a cor do céu
  - `corCeu2`, outra cor para o céu
  - `tipo_pedras`, {`'marroada'`, `'ametista'`, `'topazio'`, `'espinela'`}
  - `tipo_pedras_sortidas`, {`não`, `sim`}
    - Se o valor for `sim`, você deve proibir definir um valor para `tipo_pedras`

---
## Enunciado (cont.)

- Você deve criar uma página web com um formulário
- Você deve usar os elementos que mais se aproximem do tipo de dados que você
  precisa representar.
- O formulário deve ter validação de acordo com o domínio de cada campo
- O _layout_ do formulário deve ser semelhante ao da figura do próximo slide

---
## _Layout_ dos elementos do formulário

![](images/form-layout-table.png)

- Uma opção é usar
  - `display: table;`
  - `display: table-row;`
  - `display: table-cell;`

---
## Entrega

1. Você deve criar um **repositório no GitHub com o nome `web-terrivel`**
  contendo os arquivos (.html, .css, .js) usados para criar seu formulário
1. Também deve estar **na raiz o seu repositório** dois arquivos de imagem:
  1. `terrivel-get.png`, uma tela mostrando um envio do formulário via GET
  1. `terrivel-post.png`, uma tela mostrando um envio do formulário via POST
1. Submeter o endereço do repositório no **Moodle**

---
# Referências

1. Capítulo _"A Form of Madness"_ do livro online diveintohtml5.info
1. Capítulo 14 do livro
1. Mozilla Developer Network (MDN)

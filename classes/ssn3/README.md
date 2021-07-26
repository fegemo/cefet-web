<!-- {"layout": "title"} -->
# **Server-side** parte 3
## Criando um servidor web com Express

---
<!-- {"layout": "centered"} -->
# Roteiro

1. Continuando nosso servidor web DIY
1. O _framework_ Express.js
1. Geração dinâmica de HTML

*[DIY]: Do it yourself*

---
<!-- {"layout": "section-header"} -->
# Construindo um servidor web DIY
## Continuando nosso servidor web

- Retorna sempre o mesmo arquivo
- Servindo arquivo baseado em URL
- Definindo o tipo MIME
<!-- {ul:.content} -->

*[MIME]: Multipurpose Internet Mail Extensions*

---
## Um servidor web não muito útil

- Na última aula, criamos um servidor Web que retornava sempre o mesmo arquivo
  para quaisquer requisições
  ```js
  const http = require('http'),
    fs = require('fs');

  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.createReadStream(process.argv[3]).pipe(res);
  })

  server.listen(process.argv[2]);
  ```

---
<!-- {"layout": "centered-horizontal"} -->
## Um servidor web útil (**baseado na URL**)

<!-- {section:.compact-code} -->

```js
import http from 'http'           // módulo http (nativo)
import fs from 'fs'               // módulo fs (nativo)
import url from 'url'             // módulo url (nativo)

const PORTA = 8000
const __dirname = new URL('.', import.meta.url).pathname
const caminhoServidor = __dirname.substr(0, __dirname.length - 1)


const server = http.createServer((req, res) => {
  const urlCompleta = url.parse(caminhoServidor + req.url)
  const caminhoSolicitado = urlCompleta.pathname

  // por exemplo, para localhost:8080/estilos.css, caminhoSolicitado é o
  // endereço desse arquivo no file system
  const streamArquivo = fs.createReadStream(caminhoSolicitado)

  streamArquivo.on('error', () => {
    res.writeHead(404)
    res.end('Not Found')
  })

  streamArquivo.on('open', () => {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    })
    streamArquivo.pipe(res)
  })
})

server.listen(PORTA, () => {
  console.log(`Escutando em http://localhost:${PORTA}/`)
})
```

---
<!-- {"layout": "regular"} -->
## Problema: _MIME types_

- O protocolo HTTP define um cabeçalho chamado _Content-Type_, que deve conter
  o tipo MIME do arquivo: texto, HTML, imagem, CSS etc. Exemplos:
  1. `text/plain`
  1. `text/html`
  1. `image/png`
  1. `video/webm`
  1. `application/json`
- Como saber qual _MIME type_ enviar?
  - Tipicamente, usamos **a extensão do arquivo**...
  - e uma tabela que mapeie extensões para _MIME types_

*[MIME]: Multipurpose Internet Mail Extensions*

---
<!-- {"layout": "regular"} -->
## Servindo os arquivos, com _MIME types_

- Existem [mais de 1.500 _MIME types_](http://www.iana.org/assignments/media-types/media-types.xhtml)
- Em vez de criar a lista nós mesmos, vamos buscar se alguém já não passou por
  esse problema e já propôs uma solução:
  ```
  $ npm search mime
  ```
  - Ou então pesquise no [site do npm](https://www.npmjs.com/search?q=mime)
    - Resultado: um pacote chamado `mime`, com a descrição _"A comprehensive
      library for mime-type mapping"_ 🤔
      - [Repositório](https://github.com/broofa/node-mime) no GitHub
        com documentação

---
<!-- {"layout": "regular"} -->
## Usando o pacote **mime**

- Primeiro, vamos instalar **localmente** o pacote `mime`. No diretório
  do nosso arquivo js:
  ```
  $ npm install mime
  ```
  - Repare que uma pasta com o nome `node_modules` foi criada e ela contém uma
    subpasta chamada `mime`
- No programa do nosso servidor web:
  1. Incluir o módulo `mime` via `require('mime')`
  1. Invocar o método `lookup` que, dado um nome de arquivo, retorna o
     _MIME type_

---
<!-- {"layout": "regular"} -->
## Usando o pacote **mime** (cont.)

- (1) Incluindo o módulo `mime`:
  ```js
  import http from 'http'
  import fs from 'fs'
  import url from 'url'
  // incluído e atribuido à variável "mime"
  import mime from 'mime'

  /* ... */
  ```

---
<!-- {"layout": "regular"} -->
## Usando o pacote **mime** (cont.)

- (2) Invocando o método que retorna o tipo _MIME_ dado um nome de arquivo:
  <!-- {li.compact-code} -->
  ```js
  /* ... */
  streamArquivo.on('open', () => {
    res.writeHead(200, {
      'Content-Type': mime.lookup(caminhoSolicitado)
    })
    stream.pipe(res)

    console.log(`Serviu o arquivo: ${caminhoSolicitado}`)
  })
  /* ... */
  ```

---
<!-- {"layout": "regular"} -->
## O que ainda **está faltando**

- Nosso servidor web ainda precisa de algumas coisas:
  1. Controlar _cache_ de arquivos já solicitados
    - Se um navegador solicita um arquivo, o servidor pode enviar uma resposta
      **`304 not modified` em vez de `200 OK`**
  1. Prevenir que um usuário acesse http://localhost:8080/../../../
  1. Saber responder a métodos HTTP diferentes de GET (POST, PUT, DELETE, HEAD etc.)
  1. Saber falar outros métodos (e.g., HTTPS)
  1. Gerar arquivos HTML dinamicamente
- Novamente, vejamos se não estamos reinventando a roda =)

---
<!-- {"layout": "section-header"} -->
# Express
## Um _framework_ web para Node.js

- Descrição
- Instruções de uso
- _Hello world_
- Servindo arquivos estáticos
- Definindo rotas
- Geração dinâmica de HTML
<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
## ![Logo do Express](../../images/expressjs.png)

- Se entitulam um _web framework_ para Node.js:
  1. Rápido
  1. Não opinativo (_unopinionated_)
  1. Minimalista
- Site oficial: [http://expressjs.com/](http://expressjs.com/)
- Instalando:
  ```bash
  $ npm install express --save
  ```
  - Página [Getting started](http://expressjs.com/en/starter/installing.html)

---
<!-- {"layout": "regular"} -->
## Servidor _"hello world"_ com Express

```js
import express from 'express'
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Listening at http://${host}:${port}`);
});
```

---
<!-- {"layout": "tall-figure-left"} -->
## Servidor de arquivos estáticos com Express

![](../../images/diretorio-express-exemplo.png)

```js
import express from 'express'
const app = express()

// suponhamos que "/public" é uma pasta com
// nossos arquivos estáticos
app.use(express.static(`${__dirname}/public`))

app.listen(3000, () => {
  console.log('Escutando em: http://localhost:3000')
})
```

---
<!-- {"layout": "regular"} -->
## Especificando rotas

- O _express_ facilita a **especificação da ação** a ser tomada **dependendo
  da URL solicitada**
  - Uma rota é um verbo HTTP (`GET`, `POST` etc.) e uma URL
  - A cada rota é associada uma _callback_: <!-- {li:.compact-code} -->
    ```js
    // GET / (página inicial)
    app.get('/', (request, response) => {
      response.render('index')     // desenha a view 'index'
    })
    // POST /contato
    app.post('/contato', (request, response) => {
      // envia um email usando os dados enviados
    })
    ```

---
<!-- {"layout": "regular"} -->
## Especificando rotas (cont.)

- Mais alguns exemplos de rotas:
  ```js
  // HEAD /user/122   (verificar se usuário id=122 existe)
  app.head('/user/:ident', (request, response) => {
    // request.params contém os parâmetros da rota
    const usuario = tabelaDeUsuarios[request.params.ident]
    if (usuario !== null) {
      response.status(200).end()
    } else {
      response.status(404).end()
    }
  })
  ```
- Veja mais no [guia oficial sobre rotas](http://expressjs.com/starter/basic-routing.html)

---
<!-- {"layout": "regular"} -->
## Gerando HTML dinamicamente

- Queremos poder gerar HTML dinamicamente. Para isso, precisamos de uma
  linguagem que facilite isso, ao mesmo tempo que possibilite a **separação de
  código HTML do código nessa linguagem**
- Para ser "não opinativo", o Express não impõe uma linguagem específica,
  oferecendo 19 opções, e.g.:
  1. `ejs` (`.ejs`, era o [formato original do Express](https://github.com/tj/ejs))
  1. `handlebars` (`.hbs`, [site oficial](http://handlebarsjs.com/))
  1. `pug` (`.pug`, [site oficial](http://pugjs.org/))

---
<!-- {"layout": "regular"} -->
## Gerando HTML dinamicamente com **ejs**

- Usamos `ejs` (ou qualquer outro **_templating engine_**) em 3 passos:
  1. Configuramos o express
  1. Escrevemos arquivos HTML no formato `ejs`
  1. Para determinadas rotas, renderizamos _views_
- (1) Para configurar o Express para usar `ejs`:
  ```js
  app.set('view engine', 'ejs')
  ```

---
<!-- {"layout": "regular"} -->
## Gerando HTML dinamicamente com **ejs** (cont.)

- (2) Escrevemos arquivos no formato `.ejs` em vez de `.html`. Trecho de um
  arquivo, e.g., `equipe.ejs`: <!-- {li:.compact-code} -->
  ```html
  <ul>
    <% for (let i = 0; i < users.length; i++) { %>
      <li><img src="<%= users[i].foto %>"><%= users[i].nome %></li>
    <% } %>
  </ul>
  ```
  - Esses arquivos são chamados de _views_ e devem ficar dentro de uma pasta
    que configurarmos (valor padrão: `./views`):
    ```js
    app.set('views', 'arquivos_ejs');   // pasta arquivos_ejs
    ```

---
<!-- {"layout": "regular"} -->
## Gerando HTML dinamicamente com **ejs** (cont.)

- (3) Ao definirmos os _handlers_ das nossas rotas, chamamos `response.render`
  e passamos o nome do arquivo da _view_ que deve ser usado (sem a extensão):
  ```js
  app.get('/equipe', function(request, response) {
    response.render('equipe', contexto);      // vai pegar arquivos_ejs/equipe.ejs
  });
  ```

---
<!-- {"layout": "regular"} -->
## Gerando HTML dinamicamente com **ejs** (cont.)

- (3) É possível (e muito comum) disponibilizar dados para a _view_ e podemos
  fazer isso usando o segundo parâmetro de `response.render`:
  ```js
  response.render('equipe', {
    users: [
      { nome: 'TJ Holowaychuk', foto: 'tj.jpg'  },
      { nome: 'Douglas Wilson', foto: 'dcw.jpg' }
    ]
  });
  ```
- Mais informações sobre [_templating engines_](http://expressjs.com/guide/using-template-engines.html) no Express

---
<!-- {"layout": "regular"} -->
## Gerando HTML dinamicamente com **handlebars**

- (1) Configurando o Express:
  ```js
  app.set('view engine', 'hbs');
  ```
- (2) Criando arquivos no formato `.hbs`:
  ```hbs
  <ul>
    {{#each users}}
      <li><img src="{{foto}}">{{nome}}</li>
    {{/each}}
  </ul>
  ```

---
<!-- {"layout": "regular"} -->
## Gerando HTML dinamicamente com **pug**

- (1) Configurando o Express:
  ```js
  app.set('view engine', 'pug');
  ```
- (2) Criando arquivos no formato `.pug`:
  ```pug
  ul
    each user in users
      li: img(src=user.foto) #{user.nome}
  ```

---
<!-- {"layout": "centered"} -->
# Referências

1. Capítulo 8 do livro "Node.js in Action"
1. [Site do expressjs](http://expressjs.com/)

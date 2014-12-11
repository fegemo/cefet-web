# Server Side - Parte 3

---
# Roteiro

1. Um servidor web
1. HTTP
1. Web services
1. SOAP
1. REST

---
# Um servidor web

---
## Um servidor web não muito útil

- Na última aula, criamos um servidor Web que retornava sempre o mesmo arquivo
  para quaisquer requisições
  ```js
  var http = require('http');
  var fs = require('fs');

  var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });

    fs.createReadStream(process.argv[3]).pipe(res);
  })

  server.listen(Number(process.argv[2]));
  ```

---
## Um servidor web útil

- Com algumas alterações, esse servidor passa a retornar arquivos baseados na
  URL solicitada:
  ```js
  var http = require('http'), fs = require('fs'), url = require('url');

  var server = http.createServer(function (req, res) {
    var caminho = __dirname + url.parse(req.url).path,
        stream = fs.createReadStream(caminho);
    stream.on('error', function() {
      res.writeHead(404);
      res.end('Not Found');
    });
    stream.on('open', function() {
      res.writeHead(200, { 'content-type': 'text/plain' });
      stream.pipe(res);
    });
  });
  server.listen(8080);
  ```

---
## Problema: _MIME types_

- O protocolo HTTP define um cabeçalho chamado _Content-Type_, que deve conter
  o tipo <abbr title="Multipurpose Internet Mail Extensions">MIME</abbr> do
  arquivo: texto, HTML, imagem, CSS etc.
  - Exemplos:
    1. `text/plain`
    1. `text/html`
    1. `image/png`
    1. `video/webm`
    1. `application/json`
- Como saber qual _MIME type_ enviar?
  - Tipicamente usamos **a extensão do arquivo**
  - E uma tabela que mapeie extensões para _MIME types_

---
## Servindo os arquivos, com _MIME types_

- Existem mais de 1.500 _MIME types_
- Em vez de criar a lista nós mesmos, vamos buscar se alguém já não passou por
  esse problema e já propôs uma solução:
  ```
  $ npm search mime
  ```
  - Ou, para quem não acordou muito _hardcore_, pesquise no [site do npm](https://www.npmjs.com/search?q=mime)
    - Resultado: um pacote chamado `mime`, com a descrição _"A comprehensive
      library for mime-type mapping"_

---
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
## Usando o pacote **mime** (cont.)

- (1) Incluindo o módulo `mime`
  ```js
  var http = require('http'),
      fs = require('fs'),
      url = require('url'),
      mime = require('mime');       // incluído

  /* ... */
  ```

---
## Usando o pacote **mime** (cont.)

- (2) Invocando o método que retorna o tipo _MIME_ dado um nome de arquivo:
  ```js
  /* ... */
  stream.on('open', function() {
    res.writeHead(200, {
      'content-type': mime.lookup(caminho)
    });
    stream.pipe(res);
    console.log('Serviu o arquivo: ' + caminho);
  });
  /* ... */
  ```

---
## O que ainda está faltando

- Nosso servidor web ainda precisa de algumas coisas:
  1. Controlar _cache_ de arquivos já solicitados
    - Se um navegador solicita um arquivo, o servidor pode enviar uma resposta
      `304 not modified` em vez de `200 OK`
  1. 

---
# Referências

1. http://docs.oracle.com/javaee/6/tutorial/doc/giqsx.html (web services)
1. http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177 (http)
1. http://www.jmarshall.com/easy/http/#whatis (http)

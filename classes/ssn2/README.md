# Server Side - Parte 2

---
# Roteiro

1. Instalando o NodeJS
1. O npm
1. Fazendo um _workshop_: **learnyounode**
1. Exercícios 1 a 4
1. Módulos
1. Exercícios 5 e 6
1. Exercícios 10 e 11

---
# Instalando o NodeJS

---
## Instalando o NodeJS

- Há versões binárias e/ou instaladores para sistemas Unix, OSX ou Windows
  [no site oficial](http://www.nodejs.org) (**recomendado** para hoje)
- Alterativas:
  - Mac (via brew)
    ```
    $ brew install node
    ```
  - Linux (via apt-get)
    ```
    $ sudo apt-get install -y nodejs
    ```
  - Windows (via Chocolatey)
    ```
    $ cinst nodejs.install
    ```

---
## Instalando por um gerenciador de versões do NodeJS

- Assim como `ruby` possui o `rvm` ou o `rbenv` para gerenciar múltiplas
  versões da plataforma instaladas, o NodeJS possui algumas alternativas
  também:
  - Para Linux e OSX: [`nvm`](https://github.com/creationix/nvm)
    ```
    $ nvm install 0.10
    ```
  - Para Windows: [`nodist`](https://github.com/marcelklehr/nodist)
    ```
    $ nodist 0.10
    ```
- Recomendo este tipo de instalação para seu computador de trabalho

---
# O **npm**

---
## O **npm**

- Ao instalar o NodeJS, dois programas são instalados:
  1. O `node`, propriamente dito;
  1. E o `npm`
- O `npm` (_Node Packaged Modules_) é um gerenciador de pacotes _à la
  `rubygems`_ (ruby) ou `NuGet` (.NET) ou `easy_install` + python `eggs`
  (python) etc.
  - A idéia do `npm` é:
    1. Possibilitar a reutilização de programas
    1. Gerenciar as dependências do seu projeto
    1. Tornar seus programas/utilitários disponíveis para a comunidade

---
## O **npm** (cont.)

- Para instalar um pacote no diretório atual, usamos o comando:
  ```
  $ npm install &lt;nome>
  ```
- Se quisermos instalar um pacote de forma global (acessível de qualquer
  lugar):
  ```
  $ npm install -g &lt;nome>
  ```

---
# Fazendo um _workshop_: **learnyounode**

---
## _Workshop_: **learnyounode**

- O [nodeschool.io](http://nodeschool.io) é uma comunidade de desenvolvedores
  que se dedicam ao ensino de tecnologias relacionadas a NodeJS
  - Eles criam "programas _workshoppers_", que são mini-cursos,
    auto-explicativos, cujo objetivo é auxiliar o aprendizado dessas
    tecnologias por meio de exercícios práticos


---
## _Workshop_: **learnyounode**

- Um dos _workshops_ ensina alguns conceitos acerca do NodeJS: o
  [_learnyounode_](https://github.com/rvagg/learnyounode)

  ![](images/learnyounode.png)

---
## Instalando o _learnyounode_ pelo npm

- Para instalar o _learnyounode_, usaremos a instalação global do `npm`:
  ```
  $ npm install -g learnyounode
  ```
- Uma vez instalado dessa forma, ele é feito visível em qualquer parte.
  - Abra um terminal e execute-o
    ```
    $ learnyounode
    ```

---
# Exercícios 1 a 4

---
## Exercícios 1 a 4

- Faça os 4 primeiros exercícios do _learnyounode_ seguindo as instruções (em
  inglês). Lembre-se:
  - Para executar um programa:
    ```
    $ node programa1.js
    ```
- Assim que terminar cada exercício, você deve pedir o _learnyounode_ para
  fazer uma avaliação automática. É assim:
  ```
  $ learnyounode verify programa1.js
  ```

---
## Módulos

- Para fazer o exercício 6 do _learnyounode_, você precisará dividir sua lógica
  em 2 arquivos (o enunciado pede isso)
- Dentro dos navegadores, os arquivos Javascript são incluídos por meio do
  arquivo HTML e as _tags_ `script`
  - No NodeJS, existe uma função global chamada `require` que possibilita a
    inclusão de um arquivo no contexto de outro

---
## Exemplo de módulos

- Incluindo um módulo **da plataforma** do NodeJS:
  ```js
  var fs = require('fs');             // módulo file system
  var arqs = fs.readdirSync('.');     // diretório atual
  ```
  - Inclui o módulo _file system_, que é um objeto Javascript como [descrito
    na documentação do módulo](http://nodejs.org/api/fs.html)

---
## Exemplo de módulos (cont.)

- Incluindo um módulo **de sua autoria**:
  ```js
  var matematica = require('./matematica'); // .js opcional
  console.log(matematica.constantes.PI());
  ```
  - Inclui o módulo local com nome `matematica.js`, que é um objeto definido
    da forma como quisermos, no arquivo `matematica.js`
    - Veja como definir esse objeto, no próximo slide

---
## Criando um módulo

- Para que um módulo possa ser usado via `require`, você deve atribuir
  sua interface pública a um objeto global chamado `module.exports`.
  - Por exemplo, o arquivo `matematica.js`:
    ```js
    module.exports = {
      constantes: {
        PI: 3.14159
      },
      soma: function(a, b) { return a + b; },
      multi: function(a, b) { return a * b; }
    };
    ```

---
## Exercícios 5 e 6

- Faça os exercícios 5 e 6 do _learnyounode_
  - Você vai precisar usar os seguintes módulos da plataforma:
    1. `fs`, para [ler um diretório](http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback)
    1. `path`, para [recuperar uma extensão](http://nodejs.org/api/path.html#path_path_extname_p) à partir de um caminho de arquivo

---
## Exercícios 10 e 11

- Faça os exercícios 10 e 11 do _learnyounode_
- Você vai precisar usar os seguintes módulos da plataforma:
1. `net`, para [iniciar uma conexão TCP](http://nodejs.org/api/net.html)
1. `http`, para [realizar uma requisição HTTP](http://nodejs.org/api/http.html)

---
# Referências

1. Capítulo 2 do livro "NodeJS in Action"
1. [NodeSchool.io](http://nodeschool.io)

<!-- {"layout": "title"} -->
# **Server-side** parte 2
## Introdução ao Node.js, NPM e learnyounode

---
<!-- {"layout": "centered"} -->
# Roteiro

1. [Instalando o Node.js](#instalando-o-node-js)
1. [Módulos](#modulos)
1. Atividade: [`learnyounode`](#learnyounode)

---
<!-- {"layout": "section-header", "hash": "instalando-o-node-js"} -->
# Instalando o Node.js
## Dandos os primeiros passos

1. Verificando se já possui
1. Formas de instalação
   - Instalador no site oficial
   - Gerenciadores de programas do SO
   - Gerenciadores de versões :star2:
<!-- {ol:.content} -->

---
## Verificando se já está instalado

- Para verificar se o Node.js já está instalado,
  **abra um terminal e digite**:
  ```
  $ node -v
  ```
  - E o terminal deve mostrar a versão que está instalada, _e.g._:
    ```
    $ v15.14.0
    ```
  - ...ou uma mensagem de erro, caso não esteja

---
## Instaladores via SO 👎

- Há instaladores para sistemas Linux, OSX ou Windows
  [no site oficial](http://www.nodejs.org) (👈 **recomendado** para hoje,
  caso necessário). Ou então:
  - Linux (Debian-based - via apt-get)  <!-- {ul:.compact-code-more} -->
    ```bash
    $ sudo apt-get install -y nodejs # versao antiguita
    ```
  - OSX (via brew)
    ```
    $ brew install node
    ```
  - Windows (via Chocolatey)
    ```
    $ cinst nodejs.install
    ```

---
<!-- {"layout": "regular"} -->
## Via **gerenciador de versões do Node.js** 🌟

- A comunidade fez programas gerenciadores de versões do Node.js:
  - Para Linux e OSX: **nvm** (👉[instale aqui](https://github.com/creationix/nvm))
    ```
    $ nvm install v16.5.0
    ```
  - Para Windows: **nodist** ([instale aqui](https://github.com/marcelklehr/nodist))
    ```
    $ nodist v16.5.0
    ```
- **Recomendo** este tipo de instalação para o seu próprio computador
  - Fica bem fácil estar sempre com a versão mais recente
  - É possível ter mais de uma versão instalada

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
# O **npm**
## Node Package Manager?

- O que ganhamos ao instalar?
  1. `node`
  1. `npm`
- Um pacote Node.js
- Instalando pacotes
<!-- {ul:.content} -->

---
## O **npm**

- Ao instalar o Node.js, três programas são instalados:
  1. O `node`, executador de arquivos JavaScript;
  1. O `npm` e seu irmão mais novo irresponsável `npx`
- O `npm` (_Node Packaged Modules_?) é um **<u>gerenciador de pacotes</u>** tipo
  Ruby Gems (ruby), `NuGet` (.NET), `pip` (python), `maven`/`gradle` (Java)
  - A idéia do `npm` é:
    1. Reutilizar **programas JavaScript** (👈 <u>pacotes</u>)
    1. Gerenciar as dependências do seu projeto Node.js
    1. Tornar seus programas/utilitários (_i.e._, pacotes) disponíveis
       para a comunidade
  - Mas o que é um pacote?!

---
## O que é um **pacote**?

- É um "programa" Node.js
- Pode ser privado ou <u>público</u> (padrão)
  - Quando é público, qualquer um pode instalá-lo e ver seu código fonte,
    caso ele esteja no GitHub, por exemplo
- Uma pasta em seu computador é considerada um pacote se ela possui <u>um
  arquivo chamado</u> **`package.json`**: <!-- {li:.compact-code} -->
  ```json
  {
    "name": "bespoke-math",
    "version": "1.2.0",
    "dependencies": {
      "katex": "^0.6.0"
    }
  }
  ```

---
## **Instalando pacotes** com o npm

- Para **instalar um pacote no <u>diretório atual</u>**, usamos:
  ```bash
  $ npm install <nome-do-pacote>
  ```
- Se quisermos **instalar um pacote de <u>forma global</u>** (acessível de
  qualquer lugar, como um programa executável):
  ```bash
  $ npm install -g <nome>
  ```
  - Ou então `npm install --global <nome>`

---
<!-- {"layout": "section-header", "hash": "modulos"} -->
# Módulos
## CommonJS vs ES6 Modules

- Padrão CommonJS
- ES6 Modules no Node.js
<!-- {ul:.content} -->

---
# CommonJS

- Cada módulo tem o seu escopo e pode
  1. **require** coisas de outros módulos
  2. **module.exports** suas próprias coisas
- Exemplo:
  - <!-- {ul:.layout-split-2.compact-code-more.no-bullets.no-padding} -->
    `matematica.js`
    ```js
    function fft(sinal) {
      // transforma fourier
      return ....;
    }

    module.exports = {
      fft
    }
    ```
  - `principal.js`
    ```js
    const mat = require('matematica.js')

    console.log(mat.fft([...]))





    ```

---
# ES6 Modules no Node.js

- Mais recentemente, passamos a poder usar módulos ES6 no Node.js também
- Para tanto, usamos a extensão `.mjs`.
  - <!-- {ul:.layout-split-2.compact-code-more.no-bullets.no-padding} -->
    `matematica.mjs`
    ```js
    function fft(sinal) {
      // transforma fourier
      return ....;
    }

    export {
      fft
    }
    ```
  - `principal.mjs`
    ```js
    import { fft } from './matematica.mjs'

    console.log(fft([...]))





    ```
  
---
<!-- {"layout": "section-header", "hash": "learnyounode"} -->
# learnyounode
## _Workshop_ de Node.js

- O _workshop_ **learnyounode**
- Exercícios 1 a 4
- Módulos em Node.js
- Exercícios 5 e 6, 10 e 11
<!-- {ul:.content} -->

---
## _Workshop_: **learnyounode**

- O [nodeschool.io](http://nodeschool.io) é uma comunidade de desenvolvedores
  que se dedicam ao ensino de tecnologias relacionadas a Node.js
  - Eles criam "programas _workshoppers_", que são mini-cursos,
    auto-explicativos, cujo objetivo é iniciar o aprendizado dessas
    tecnologias por meio de exercícios práticos

---
## _Workshop_: **learnyounode**

- Um dos _workshops_ ensina alguns conceitos acerca do Node.js: o
  [_learnyounode_](https://github.com/rvagg/learnyounode)

  ![](../../images/learnyounode.png)

---
## Instalando o _learnyounode_ pelo npm

- Para **instalar** o _learnyounode_, faremos **de forma global** com o `npm`:
  ```
  $ npm install -g learnyounode
  ```
  - Isso porque o `learnyounode` é um programa em linha de comando e queremos
    poder executá-lo a partir de qualquer pasta <!-- {li:style="font-size:75%;opacity:0.8"} -->
- Instalando dessa forma, ele fica visível de qualquer lugar.
  - Abra um terminal e execute-o:
    ```
    $ learnyounode
    ```
    - **Siga os próximos slides** para saber que exercícios fazer

---
## Exercícios 1 a 4

- Faça os 4 primeiros exercícios do _learnyounode_ seguindo as instruções.
  Lembre-se:
  - **Para executar um programa**:
    ```
    $ node programa1.js
    ```
- Assim que terminar cada exercício, você deve pedir o _learnyounode_ para
  fazer uma avaliação automática. É assim:
  ```
  $ learnyounode verify programa1.js
  ```
  - Depois do 4º exercício, **siga para o próximo slide** 👉

---
## Dividindo um programa em **Módulos**

- Para fazer o exercício 6, você precisará dividir o programa
  em 2 arquivos (o enunciado pede isso)
- Dentro dos navegadores, os arquivos JavaScript são incluídos por meio do
  arquivo HTML e as _tags_ `script`
  - No Node.js, existe uma **função global chamada `require`** que possibilita a
    <u>inclusão de um arquivo</u> no contexto de outro

---
## Exemplo de módulos

- Incluindo um módulo **da plataforma** do Node.js:
  ```js
  const fs = require('fs');                 // importa o módulo 'file system'
  const arquivos = fs.readdirSync('.');     // diretório atual
  ```
  - Inclui o módulo _file system_, que é um objeto Javascript como [descrito
    na documentação do módulo](http://nodejs.org/api/fs.html)

---
## Exemplo de módulos (cont.)

- Incluindo um módulo **de sua autoria**:
  ```js
  const matematica = require('./matematica');   // .js é opcional
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
    1. `fs`, para
       [ler um diretório](http://nodejs.org/api/fs.html#fs_fs_readdir_path_callback)
    1. `path`, para
       [recuperar uma extensão](http://nodejs.org/api/path.html#path_path_extname_p)
       à partir de um caminho de arquivo

---
## Exercícios 10 e 11

- Faça os exercícios 10 e 11 do _learnyounode_
- Você vai precisar usar os seguintes módulos da plataforma:
  1. `net`, para [iniciar uma conexão TCP](http://nodejs.org/api/net.html)
  1. `http`, para [realizar uma requisição HTTP](http://nodejs.org/api/http.html)

---
<!-- {"layout": "centered"} -->
# Referências

1. Capítulo 2 do livro "Node.js in Action"
1. [NodeSchool.io](http://nodeschool.io)

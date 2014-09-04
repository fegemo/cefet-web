# Aula do CEFET
*Professor:* Flávio Coutinho

---

# Instruções de uso (1)

  1. Instale o git e o nodejs
  1. "Fork" [este repositório][fork] no GitHub
  1. Instale o gulp

    ```bash
    $ npm install gulp -g
    ```
[fork]: http://github.com/fegemo/class-template

---

# Instruções de uso (2)

  4. Em linha de comando, inicie a apresentação

    ```bash
    $ gulp build serve
    ```
    Seu navegador abrirá mostrando este modelo de apresentação

---

# Instruções de uso (3)

  5. Edite os arquivos e faça sua apresentação
    - `README.md`, com o **conteúdo**
    - `src/index.html`, com o layout
    - `src/styles/main.styl`, com o estilo
    - `src/images`, imagens
    - `src/scripts/main.js`, comportamento

---

# Criação

A apresentação pode ser escrita em HTML ou em Markdown.

Se ela estiver em Markdown, ela será visível na páginal do GitHub (README.md).

---

# Inserindo código


Para adicionar código à apresentação, use tripla àspas invertidas:

```css
```css
body {
  background-color: red;
  margin: 0;
}
```.
```

Obs: Não precisa colocar o último ponto `.`

---

# Inserindo código **inline**

Para um trecho de código dentro de uma linha/parágrafo, circunde o trecho com
àspas invertidas simples, e.g.:

> Digite `npm publish` para publicar o pacote

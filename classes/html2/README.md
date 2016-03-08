# HTML - Parte 2

---
# Hoje vamos

- Aprender sobre plantas carnívoras \o/
- Praticar `html`: imagens, hiperlinks, tabelas, citações, ênfase, destaque etc.
- Praticar `css`: _color_, _margin_, _text-align_ etc.

---
# Atividade de Hoje

Você tem um novo _hobby_: **criar plantas carnívoras**. Você encontrou um
documento solto em um antigo livro do seu tio e, depois de lê-lo, decidiu
**criar uma página web com seu conteúdo**. Além disso, você também tem
uma **pequena loja de sementes** dessas plantas e deseja divulgá-la em uma
página web.

<figure class="portrait">
  <img src="../../images/piranha-mario.png" alt="Planta carnívora do jogo Mario Bros">
</figure>

---
## Passos para o exercício

1. Instalar o git na máquina, caso ele não esteja instalado
1. **Criar um _fork_** do repositório do professor em [`https://github.com/fegemo/cefet-web-piranha-plant`](https://github.com/fegemo/cefet-web-piranha-plant)
  e **cloná-lo para sua área de trabalho**
1. Fazer o exercício e fazer _commits_ e _push_ no seu repositório
1. Enviar, via **Moodle**, o link do seu repositório até o final da aula

---
## Exercício 1

- Você deve pegar o documento do seu tio
  (arquivo: `/documentos-do-tio/pagina-sobre-plantas.pdf`) e criar uma página web com
  o mesmo conteúdo e formatação. Salve o arquivo como `plantas.html`.
  - O arquivo `/documentos-do-tio/pagina-sobre-plantas`**`specs`**`.pdf` descreve os detalhes
  - A pasta `/imagens` contém os arquivos de imagens a serem usados
- Veja nos próximos slides algumas tags HTML

---
## Tags de Importância

- <div>
    <strong>estou em destaque (negrito)</strong>
    <em>tenho ênfase (itálico)</em>
    <u>sublinho-me (sublinhado)</u>
    <strike>fui riscado! (risco)</strike>
  </div>
  ```html
  <strong>estou em destaque (negrito)</strong>
  <em>tenho ênfase (itálico)</em>
  <u>sublinho-me (sublinhado)</u>
  <strike>fui riscado! (risco)</strike>
  ```

---
## Tags de Citação

- <div>
    <q>estou dentro de um texto, em linha</q>
  </div>
  ```html
  <q>estou dentro de um texto, em linha</q>
  ```
- <div>
    <blockquote>estou dentro de um texto, em linha</blockquote>
  </div>
  ```html
  <blockquote>estou dentro de um texto, quebrando linhas</blockquote>
  ```

---
## Tag de _Hyperlink_

- [Link para fora da página](http://www.wikipedia.org)
  ```html
  <a href="http://www.wikipedia.org">Link para fora da página</a>
  ```
- [Link para dentro da página](#uma-secao-do-site)
  ```html
  <a href="#um-id-de-elemento">Link para dentro da página</a>
  ```
- [Link que abre cliente de email](mailto:adamastor@fazenda.mg.br)
  ```html
  <a href="mailto:adamastor@...">Link para cliente de email</a>
  ```
---
## Tag de Lista de itens (1/2)

- Lista **não ordenada** (bolinhas):
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```html
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  ```

---
## Tag de Lista de itens (2/2)

- Lista **ordenada** (números):
  <ol>
    <li>Item</li>
    <li>Item</li>
  </ol>
  ```html
  <ol>
    <li>Item</li>
    <li>Item</li>
  </ol>
```

---
## Tags de Tabela

- Tabelas são criadas com as tags
  - **`table`**, para marcar a tabela
  - **`tr`**, linha
  - **`td`**, célula
  - `th`, célula do cabeçalho
  - `thead`¹, marca as linhas do **cabeçalho**
  - `tbody`¹, marca as linhas do **corpo**
  - `tfoot`¹, marca as linhas do **rodapé**
- [Referência na Mozilla Developer Network][mdn-table]
- ¹: elementos opcionais, mas desejáveis

[mdn-table]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

---
![Uma descrição das tags que formam uma tabela](../../images/table.png)

---
## Um exemplo de Tabela


---
## Agora, algumas **propriedades <u>CSS</u>**

```css
p {
  color: #ff0033;       /* cor do texto */
  font-family: "Arial";
  text-align: center;   /* centraliza texto */
}

body {
  background-image: url(imagens/fundo-da-pagina.png);
}

img {
  border: 1px solid blue; /* borda azul sólida */
}
```

---
## Exercício 2

Criar a página da loja seguindo o modelo do arquivo
`/documentos-do-tio/pagina-loja.pdf`. Depois de criada, salve o arquivo como
**`loja.html`**. Você deve também criar um hiperlink da página `plantas.html` para
sua nova `loja.html`.

---
## Exercício 3

Agora que você já criou as duas páginas e estilizou as duas, deve ter criado
regras de formatação em `CSS` dentro de elementos `<style>` nas duas páginas.

Por exemplo, as regras da borda verde nas imagens está repetida nos dois
arquivos.

Para **evitar repetição de código**, é possível escrever código **`CSS` em um
arquivo separado** e **incluí-lo** em cada arquivo `html`:

(continua...)

---
## Exercício 3 (cont.)

- Em vez de:
  ```
    ...
    &lt;style&gt;
      ...
    &lt;/style&gt;
  &lt;/head&gt;
  ```
- Você pode:
  ```
    &lt;link rel="stylesheet" href="arquivo-de-estilos.css" /&gt;
  ```

- E mover suas regras `CSS` dentro de `<style>` para o novo `arquivo-de-estilos.css`.

---
# Referências

1. Capítulos 1, 2 e 3 do livro
1. [Artigo sobre plantas carnívoras do site InfoEscola][info-escola]
1. Darwin, C. [Insectivorous Plants][darwin-carnivoras]. John Murray, 1875.

[info-escola]: http://www.infoescola.com/plantas/plantas-carnivoras/
[darwin-carnivoras]: http://darwin-online.org.uk/content/frameset?itemID=F1217&viewtype=text&pageseq=1

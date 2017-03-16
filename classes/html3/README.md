<!-- {"layout": "title"} -->
# HTML - Parte 3
## Ferramentas, Multimídia e a Cabeça (_i.e._, `head`)

---
## Na última aula...

- Podemos **criar hiperlinks** com o elemento `<a href="caminho-do-recurso">nome</a>`
- Para **incluir imagens**, podemos usar a tag `<img src="caminho-do-arquivo">`
- Citações são criadas com `<q>` ou `<blockquote>`
- Alguns elementos são `inline` e outros são `block`
  - **`inline`**: não fazem quebra de linha (e.g, `<q>`, `<strong>` etc.)
  - **`block`**: fazem quebra de linha (e.g., `<blockquote>`, `<p>` etc.)

---
## Na última aula... (cont.)

- Tabelas são criadas com as tags
  - **`table`**, para marcar a tabela
  - `thead`, cabeçalho
  - `tbody`, corpo
  - `tfoot`, rodapé
  - **`tr`**, linha
  - **`td`**, célula
  - `th`, célula do cabeçalho
- [Referência na Mozilla Developer Network][mdn-table]

[mdn-table]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table

---
## Na última aula... (cont.)

- É possível declarar regras em CSS de três formas
  1. _Inline_ (**na mesma linha**) :thumbsdown: :thumbsdown:
  ```html
  <p style="color: #fff; font-family: 'Arial', sans-serif;">...</p>
  ```
  - As propriedades afetam apenas aquele elemento
  - Não há reaproveitamente de código CSS :thumbsdown:
  - Mistura-se código CSS no meio das _tags_ HTML :thumbsdown:

---
## Na última aula... (cont.)

2. _Embedded_ (**embutido**) :thumbsdown:
   ```html
   <style> /* reaproveitamento de código CSS dentro do arquivo */
     p {
       color: #fff;
     }     /* ainda há mistura de código */
   </style>
   ```
3. _Linked_ (arquivo **referenciado**) :thumbsup:
   ```html
   <link rel="stylesheet" href="arquivo-de-estilos.css" />
   ```
   - Reaproveitamento de código CSS em qualquer arquivo :thumbsup:
   - _Caching_ do arquivo CSS, útil se o site tem várias páginas :thumbsup:

---
# Hoje veremos

1. Ferramentas para o desenvolvimento
1. Um pouco mais sobre **imagens**
1. Mapas de imagens
1. Vídeo e Áudio
1. Meta _tags_
1. Codificação (_encoding_)
1. DOCTYPE (versão do HTML)

---
<!-- {"layout": "section-header"} -->
# **Ferramentas** para **desenvolvimento**
## Para edição dos arquivos e Depuração

- Editores de texto
- IDEs
- Ferramentas do desenvolvedor (no navegador)

<!-- {ul:.content} -->

*[IDE]: Integrated Development Environment**

---
<!-- {"layout": "regular"} -->
## Como ser mais **produtivo**

- Na hora de escrever/editar código HTML, CSS e JavaScript, queremos ter:
  - **Destacamento (_highlighting_) de código fonte**
  - **Indentação** automática
  - **Auto-completar** tags HTML, propriedades CSS etc.
- É desejável:
  - Suporte a controle de versão (_e.g._, git)
  - _Linting_ (verificação estática de erros no código)

---
<!-- {"layout": "regular"} -->
## Exemplos com **_Seal of Approval_** do Professor

- Editor:
  - [Atom][atom] (gratuito, do GitHub)
  - [Sublime Text 3][sublime] (pago, faz vista grossa com quem não paga)
  - [VSCode][vscode] (gratuito, do tio Bill)
- IDE:
  - [WebStorm][webstorm] (pago, da JetBrains)
  - [Visual Studio Express][visual] (gratuito, do tio Bill)

[atom]: https://atom.io/
[sublime]: https://www.sublimetext.com/3
[vscode]: https://code.visualstudio.com/
[notepad]: https://notepad-plus-plus.org/
[webstorm]: https://www.jetbrains.com/webstorm/
[visual]: https://www.visualstudio.com/features/modern-web-tooling-vs

---
<!-- {"layout": "regular"} -->
## Sugestão do Professor

- [![Página inicial do editor de texto Atom right](../../images/atom-homepage.png)](https://atom.io)
  Benefícios:
  - **Gratuito**
  - Mais **leve** do que um IDE
  - Altamente **personalizável**
  - Exemplo de **"web fora do navegador"** - É baseado no Chromium e no Node.js
  - Suporte nativo a **Git**
  - Muitas **_hotkeys_ \o/**

---
# **Depurando** Páginas Web

---
## Ferramentas do Desenvolvedor

- Os navegadores possuem **excelentes ferramentas de suporte** ao programador

![Ferramentas do desenvolvedor do Chromium right](../../images/chrome-dev-tools.png)

---
## Usando as Ferramentas

- Visualizando o código fonte:
  - Tecla de atalho no Chrome: <kbd>Ctrl-U</kbd>
  - Ou então:
    1. clicar com **botão direito** do Mouse **na página**
    1. selecionar **"Ver código fonte"**
- Ativando o depurador:
  - Tecla de atalho padrão: <kbd>Ctrl-Shift-I</kbd> ou <kbd>F12</kbd>
  - Ou então:
    1. clicar com **botão direito** do Mouse **na página**
    1. selecionar **"Inspecionar elemento"**
  - [Curso sobre as ferramentas do desenvolvedor](http://discover-devtools.codeschool.com/?locale=pt) do Google Chrome

---
# Exercícios

---
## Exercício 1: Programador sem café

![Uma xícara com um delicioso café](../../images/cafe.png)

O código abaixo refere-se a uma página que deveria estar mostrando algumas
músicas, contudo o programador que criou o código estava precisando de um
pouco mais de café e acabou por cometer alguns erros. Você deve corrigir o
código de forma que ele fique correto.

Baixe o [exercício][exer-prog-sem-cafe] ou pegue uma cópia com o professor.

[exer-prog-sem-cafe]: https://docs.google.com/document/d/1mK1CivW4PZuIccktKA-1Yv4dKvSx8bWfRd7Mv1M5YRU/edit?usp=sharing

---
## Exercício 2: Festa a fantasia das tags

![Desenho de máscara de festa a fantasia](../../images/who-am-i.png)

Um grupo de elementos HTML, usando fantasia, está fazendo uma festa com a
temática "Quem sou eu?". Eles dão uma dica e você tenta adivinhar que
elemento está falando.

Baixe o [exercício][exer-who-am-i] ou pegue uma cópia com o professor.

[exer-who-am-i]: https://docs.google.com/document/d/1_l-GYO7LDB9N6LUwNT4qtxj3ij2xs3hVgp8F0ULqJD4/edit?usp=sharing

---
<!-- {"layout": "section-header"} -->
# Um pouco mais sobre **imagens**
## .

- Formato geral (relembrando)
- Atributo `alt="..."`
- O pudim
- Formatos de imagem

<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
## Imagens

- Usamos a tag `<img src="...">`, que é um **elemento _void_**
  - Ou seja, não tem conteúdo nem tag de fechamento
- Formato geral
  ```html
  <img src="imagens/nome-do-arquivo.jpg">
  ```
- [Referência na Mozilla Developer Network][mdn-img]

[mdn-img]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img

---
<!-- {"layout": "regular"} -->
## Imagens: **texto alternativo**

- Além do atributo `src`, é muito recomendável usar o **atributo `alt`** com um
  **texto explicativo que possa substituir a imagem**, em caso do usuário não
  poder vê-la por algum motivo
  ```html
  <img src="tortuga.jpg" alt="Uma foto mostrando a ilha de Tortuga">
  ```
- Quando o navegador está renderizando uma página e se depara com uma `<img>`
  ele faz outra requisição ao servidor para baixá-la e então poder exibi-la

---
<!-- {"backdrop": "pudim"} -->

http://www.pudim.com.br <!-- {a:style="background: white"} -->

---
<!-- {"layout": "regular"} -->
## Imagens: **formato**

- Existem vários formatos de imagens suportados por navegadores
  - **JPEG**, bom para (i.e., compacta bem) fotos e imagens complexas
  - **GIF**, transparência de 1 bit e suporta animações de quadros
  - **PNG**, transparência de 8 bits (rgba) e suporta mais cores que GIF
    - Bom formato para cores "chapadas" (pouca variação de cor)
  - **SVG**, imagens vetoriais

---
<!-- {"layout": "regular"} -->
## Imagens: **largura e altura**

- Podemos **definir largura e altura** em pixels via atributos:
  ```html
  <img src="..." width="40" height="100">
  ```
- Mas quase sempre (99%) preferimos **estipular os tamanhos via CSS**:
  ```html
  <style>
    img {
      width: 40px;
      height: 100px;
    }
  </style>
  ```

---
<!-- {"layout": "section-header"} -->
# Mapas de imagens
## Hiperlinks dentro de imagens

- Links dentro de imagens
- Recurso antigo do HTML, pouco usado

<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
## Problema:

- Você tem imagens grandes e quer que o usuário acesse **hiperlinks
  diferentes dependendo <u>de onde ele clicar</u>** na imagem
  - Opção 1: picotar a imagem grande em várias menores e encapsular cada
    `<img>` dentro de um `<a></a>`
    - Dá trabalho demais
    - E se você quiser uma região circular em vez de retangular?
  - Opção 2: usar o recurso do `html` para **mapas de imagens**

---
## Exemplo

<img src="../../images/humble-imagemap.png" border="0" width="600" height="420" orgWidth="600" orgHeight="420" usemap="#image-maps-2014-10-22-192942" alt="" />
<map name="image-maps-2014-10-22-192942" id="ImageMapsCom-image-maps-2014-10-22-192942">
<area  alt="O desenho de uma mulher" title="Jogo Syberia" href="https://www.google.com.br/search?q=syberia+game&safe=off&hl=pt-BR&source=lnms&tbm=isch&sa=X&ei=t0JIVLyYC_WCsQSk-4KACA&ved=0CAgQ_AUoAQ&biw=1366&bih=643" shape="rect" coords="125,19,182,161" style="outline:none;" />
<area  alt="Um soldado" title="Neuroshima Hex" href="https://www.google.com.br/search?q=Neuroshima+Hex+game&safe=off&hl=pt-BR&source=lnms&tbm=isch&sa=X&ei=yEJIVPurEenksAS91YGoCg&ved=0CAgQ_AUoAQ&biw=1366&bih=643" shape="poly" coords="274,29,260,42,255,61,251,80,253,109,263,113,267,123,237,149,276,155,340,154,335,138,289,133,289,122,290,104,292,89,298,82,303,98,319,83,339,71,325,55,307,53,303,30" style="outline:none;" />
<area  alt="Um bardo bárbaro" title="Bardbarian" href="https://www.google.com.br/search?q=bardbarian+game&safe=off&hl=pt-BR&source=lnms&tbm=isch&sa=X&ei=u0JIVNaMHoa1sQSm4oKYCg&ved=0CAkQ_AUoAg&biw=1366&bih=643" shape="poly" coords="439,20,411,26,387,42,371,66,365,94,371,122,387,146,411,162,439,168,467,162,491,146,507,122,513,94,507,66,491,42,467,26" style="outline:none;" />
</map>

---
## Código do exemplo de mapa de imagem

```html
<map name="jogos">
  <area href="..." shape="rect" coords="125,19,182,161" />
  <area href="..." shape="poly" coords="274,29,260,42,255,61,..." />
  <area href="..." shape="circle" coords="436,418,50" />
</map>
<img src="../../images/humble-imagemap.png" usemap="#jogos">
```

---
## Mapa de Imagem (na [MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/map))

- O mapa é representado pelo elemento `<map></map>`, que possui um `name`
- Dentro do mapa, coloca-se um `<area />` para cada **região** que se quer ter um
  hiperlink, definindo os detalhes do link e **as coordenadas**
- As regiões podem ser de três tipos:
  1. `shape="rect"`, `coords="left, top, right, and bottom"`
  1. `shape="circle"`, `coords="x, y, radius"`
  1. `shape="poly"`, `coords="x1, y1, x2, y2, x3, y3, ..."`
- A imagem (`<img>`) deve usar o atributo `usemap="nome"` para se referenciar
  ao mapa

---
## Prós e Contras

- Prós
  - Mais prático que imagens picotadas
  - Única forma para se definir áreas não retangulares de links
- Contras
  - Pode dar trabalho gerar as coordenadas
  - Não é fluido - se a imagem é redimensionada, os valores (em px) não serão
    mais válidos

---
<!-- {"layout": "section-header"} -->
# Áudio e Vídeo
## Como colocar recursos multimídia

- Possibilidades
- Formatos de vídeo e CODECs
- O elemento `<video></video>`
<!-- {ul:.content} -->

---
## Problema

![O Filosoraptor](../../images/philosoraptor.jpg) <!-- {.portrait} -->

- Já que temos um hipertexto (`html`), não podemos expandir o conceito para
  **hipermídia** e colocar áudio e vídeo em um documento?
  - Opção 1: colocar um link para que o usuário faça download do arquivo
  - Opção 2: usar um plugin que seja capaz de renderizar vídeo (eu escutei _flash_?)
  - Opção 3: usar os elementos de **`<audio>` e `<video>` do `html5`**

---
## Formatos de Vídeo

- Existem diversos **formatos de arquivo**:
  - Formatos (de recipiente):
    - AVI (.avi)
    - WebM (.webm)
    - MP4 (.mp4, .m4v)
    - Ogg (.ogg)
    - Flash Video (.flv)
    - ASF (.asf) <!-- {ul:.multi-column-list-2} -->
- Os formatos definem apenas **como é organizada a estrutura** de um arquivo de
  vídeo
  - Os formatos definem jeitos diferentes para se armazenar **_tracks_ de vídeo e
    de áudio**
    - Normalmente, 1 _track_ de vídeo e 2 de áudio (para som estéreo)
  - O conteúdo precisa ser codificado usando um **algoritmo CODEC**

*[CODEC]: Coder-Decoder*

---
## **CODEC**s de Vídeo e Áudio

*[CODEC]: Coder-Decoder**

- Alguns CODECs de vídeo são:
  1. H.264, ou MPEG-4 _part_ 10
  1. Theora
  1. VP8
- Para áudio, também há vários CODECs disponíveis. Alguns são:
  1. MP3 (.mp3), ou MPEG-3 _Audio Layer_
  1. AAC (.aac), ou _Advanced Audio Layer_
  1. Vorbis (.ogg, .mp4, .mkv)

---
## O elemento **video**

- Para exibir um vídeo, o `html5` propõe um novo elemento que funciona de forma
  similar ao elemento de imagem:
  ```html
  <video src="videos/fendadobiquini.mp4"></video>
  ```
- Resultado:

  <video src="../../videos/fendadobiquini.mp4" width="320" height="240"></video>

---
## Querida, onde está o controle?

- O atributo `controls` associa um conjunto de controles ao `<video />`
  ```html
  <video src="videos/fendadobiquini.mp4" controls></video>
  ```
- Resultado:

  <video src="../../videos/fendadobiquini.mp4" width="320" height="240" controls></video>

---
## Opções (atributos) de **video**

- `controls`, para um conjunto de controles
- `width="px"`, `height="px"`, para as dimensões (vídeo não é redimensionado)
- `autoplay`, para começar a executar o vídeo assim que a página carregar
- `preload="none|metadata|auto"`, para começar a baixar o vídeo assim que a
  página carregar
- `loop`
- `muted`
- `poster="http://..."`, `url` de uma imagem para ser mostrada antes do vídeo
  ser "tocado"

---
## Suporte dos navegadores por formato

- Na data de hoje (07/Abr/15), as versões mais recentes dos principais navegadores
  suportam em conjunto apenas o formato **H.264, ou MPEG-4 _part_ 10**
- Porém, versões um pouco menos recentes não suportam **um mesmo formato de vídeo** em conjunto
- Assim, usamos uma outra forma do elemento `<video>`:
  ```html
  <video width="320" height="240" controls>
    <source src="f.mp4"  type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
    <source src="f.webm" type="video/webm; codecs=vp8,vorbis">
    <source src="f.ogv"  type="video/ogg; codecs=theora,vorbis">
    Seu navegador não suporta o elemento <code>video</code>.
  </video>
  ```

---
<!-- {"scripts": ["../../scripts/classes/caniuse.min.js"]} -->
## Suporte **hoje**

<span class="caniuse" data-feature="webm" style="width: 30%"></span>
<span class="caniuse" data-feature="mpeg4" style="width: 30%"></span>
<span class="caniuse" data-feature="ogv" style="width: 30%"></span>

---
## Em caso de navegadores antigos

- Você pode colocar uma mensagem
  ```html
  <video src="f.ogv">
    Seu navegador não suporta o elemento <code>video</code>.
  </video>
  ```
- Ou, melhor ainda, usar _flash_ como _fallback_
  ```html
  <video>
    <source src="f.ogv" type="video/ogg; codecs=theora,vorbis">
    <object data="f.swf" type="application/x-shockwave-flash">
    </object>
  </video>
  ```

---
## Audio

- `<audio>` funciona **exatamente** da mesma forma que `<video>`
- [Referência na MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

  ![](../../images/baby-success.jpg)

---
<!-- {"layout": "section-header"} -->
# Meta _tags_
## Metainformação sobre a página

- Meta tag _keywords_
- Meta tag _description_
- Meta tag _author_
- Meta tag _robots_
- Meta tag _refresh_
- Meta tag _viewport_

<!-- {ul:.content} -->

---
## Meta _tags_

```html
<html>
  <head>
    <title> Aprendendo sobre as meta tags </title>
    <meta name="author" content="Flávio">
    <meta name="description" content="Textão explicativo">
    <meta name="keywords" content="web, css, html, js">
  </head>
  ...
```

- As _tags_ meta são elementos _void_
- Referência na [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

---
## Meta _tag_: **keywords**

- Palavras-chave de descrição da página
- Limite (de bom senso) de aproximadamente 150 caracteres
- Palavras separadas por vírgula, geralmente com tudo em minúsculo
- Exemplo _real-life_:
  ```html
  <meta name="keywords" content="livro,games,ultrabook,ipad,macbook,blu-ray,celular,TV led ,gps,câmera digital">
  ```
  - Página inicial do site submarino.com.br

---
## Meta _tag_: **description**

- Um breve e preciso texto sumário do conteúdo da página
- Alguns navegadores usam isto como a descrição da página quando
  adicionada aos favoritos
- Exemplo:
  ```html
  <meta name="description" content="Meet the global face of the world's #1 games media brand.">
  ```
  - Página inicial do site ign.com

---
## Meta _tags_: **author** e **robots**

- `author`: nome dos autores da página
  - Exemplo:
    ```html
    <meta name="author" content="Flávio Coutinho">
    ```
- `robots`: indicar a motores de busca (e.g., Google) se eles devem indexar
  a página ou não
  - Exemplo:
    ```html
    <meta name="robots" content="index,follow">
    ```
  - A forma mais recente é usar um arquivo
    [/robots.txt com descrições](http://www.robotstxt.org/orig.html)

---
## Meta _tag_: **refresh**

- Formato:
  ```html
  <meta name="refresh" content="X Y">
  ```
- Faz um redirecionamento dentro de X segundos para o endereço Y
- Exemplo:
  ```html
  <meta name="refresh" content="5 ;url=http://www.pudim.com.br/">
  ```

---
## Meta _tag_: **viewport**

- Sugere ao navegador qual o tamanho inicial da _viewport_ (área visível) da página
- Usado especialmente por navegadores de dispositivos móveis
- Exemplo:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  ```
  - [Referência completa na W3C](http://dev.w3.org/csswg/css-device-adapt/#viewport-meta)

---
<!-- {"layout": "section-header"}-->
# Codificação (_encoding_)
## Representando letras com números

- Codificação da página

<!-- {ul:.content} -->

---
## Codificação

- A codificação de uma página deve ser especificada de forma explícita
  - Senão, UTF-8 é inferido
- Usa-se a `<meta>` _tag_ com nome `charset` para isso:
  ```html
  <meta name="charset" content="ISO-8859-1">
  ```
  - Opções de codificação são gerenciadas pela IANA e [podem ser vistas aqui](http://www.iana.org/assignments/character-sets/character-sets.xhtml)
- ![Uma página web com caracteres não reconhecidos devido a um problema de codificação](../../images/encoding-error.png) <!-- {.push-right style="height: 150px"} -->
  Erro de codificação:
  - Deve-se manter a mesma codificação nos arquivos, declarado no HTML e (se for o caso) no banco de dados

---
<!-- {"layout": "section-header"} -->
# DOCTYPE
## .

- Versão do HTML
<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
## DOCTYPE

- Especifica para o navegador qual a versão do `html` que estamos usando
- Aparece como a primeira "tag" em um arquivo `html`
- Formato
  ```html
  <!DOCTYPE ... >
  ```

---
<!-- {"layout": "regular"} -->
## Evolução do DOCTYPE

- HTML 4.01
  ```xml
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">
  ```
- XHTML 1.1
  ```xml
  <!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.1//EN"
    "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
  ```

---
<!-- {"layout": "regular"} -->
## DOCTYPE hoje

- HTML5
  ```xml
  <!DOCTYPE html>
  ```
  ![Bebezinho fazendo cara de que gostou do que foi falado](../../images/baby-success.jpg)

---
<!-- {"layout": "regular"} -->
## E se colocarmos um DOCTYPE inválido?

- O navegador possui o conceito de _strict mode_ e o de _quirks mode_
- Problemas com o DOCTYPE vão ativar o **_quirks mode_**
  - Para páginas sem DOCTYPE ou com DOCTYPEs que o navegador não conhece
- Em _quirks mode_, o navegador é altamente **permissivo com relação a marcação
  incorreta** e ele utiliza um interpretador antigo para algumas propriedades
  CSS
- [Artigo sobre o _quirks mode_ no site quirksmode.org][quirks-mode] :)

[quirks-mode]: http://www.quirksmode.org/css/quirksmode.html

---
<!-- {"layout": "regular"} -->
## Validação

- Já que temos um **_strict mode_**, podemos validar uma página para ver se
  ela está seguindo o padrão corretamente
  - http://validator.w3.org/
- Atividade: vamos validar nosso exemplo da aula HTML 1
  - [Código no jsfiddle](http://jsfiddle.net/fegemo/9po3sd1m/2/presentation/)

---
<!-- {"layout": "regular"} -->
## Erros comuns

1. Precisamos declarar qual o _encoding_ estamos usando no arquivo nos primeiros
512 bytes (dentro do `head`)
1. Toda imagem precisa ter um atributo `alt`
1. Não se pode/deve utilizar valores em porcentagens nos atributos `width` e
  `height` de imagens

---
## Arqueologia HTML

![Página html escrita usando padrões antigos](../../images/html-antigo.png)

---
# Referências

1. Capítulos 5 e 6 do livro

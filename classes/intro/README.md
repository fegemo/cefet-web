<!-- {"layout": "title"} -->
# **Introdução** à Programação Web
## História e conceitos básicos

---
<!-- {"layout": "centered"} -->
# Roteiro

1. [Web == Internet?](#web-igual-internet)
1. [O que é a Web](#o-que-e-a-web)
1. [As proezas de Tim](#as-proezas-de-tim)
1. [Minha primeira página web](#minha-primeira-pagina-web)

---
<!-- {"layout": "section-header", "hash": "web-igual-internet"} -->
# Web == Internet?
## A Web é a mesma coisa que a Internet?

- Personagens da história
- Surgimento da Internet
- Internet pré-web
<!-- {ul:.content} -->

---
<!-- {"layout": "regular"} -->
# Fatos importantes

Surgimento:
  ~ A **Internet** <!-- {.alternate-color} --> surgiu em 1969 com o nome
    de ARPANET
  ~ A **Web** surgiu entre 1989 e 1993

Criadores:
  ~ A **Internet** <!-- {.alternate-color} --> foi criada por pesquisadores
    nos EUA
  ~ A **Web** foi criada por um pesquisador na Europa

Fato:
  ~ A **Internet** <!-- {.alternate-color} --> é a maior rede de computadores
  ~ A **Web** é "um dos programas" (o maior) na Internet

Dúvidas:
  ~ ![](../../images/philosoraptor.jpg) <!-- {.portrait.push-right} -->
    (a) Internet é com "I" ou com "i"?
  ~ (b) Como surgiu a Internet?

---
# Alguns personagens

- ::: figure .portrait text-align: center;
  ![](../../images/larry-roberts.jpg)
  **Larry Roberts**, "pai" da ARPANET
  :::
- ::: figure .portrait
  ![](../../images/vint-cerf.jpg)
  **Vint Cerf**, "pai" dos protocolos TCP/IP
  :::
- ::: figure .portrait
  ![](../../images/bob-kahn.jpg)
  **Bob Khan**, "pai" dos protocolos TCP/IP
  :::
- ::: figure .portrait
  ![](../../images/tim-berners-lee.jpg)
  **Tim Berners-Lee**, "pai" da Web
  :::
<!-- {ul:.full-width.multi-column-list-4 style="list-style-type: none;"} -->

---
<!-- {"layout": "regular"} -->
## Linha do Tempo

1969
  ~ Larry Roberts estabelece 1º link da **ARPANET**

---
<!-- {"layout": "regular"} -->
## ARPANET

Havia **pouquíssimos computadores** com capacidade de pesquisa nos EUA e muitos
pesquisadores que deveriam ter acesso a eles estavam **geograficamente
separados**.
_(Charles Herzfeld, diretor da ARPA)_

- _Advanced Research Projects Agency Network_ (ARPANET)
- Uma das primeiras redes baseadas em trocas de pacotes
- Eventualmente foi a primeira rede a utilizar a família de protocolos TCP/IP

---
<!-- {"styles": ["../../styles/classes/bubble-chat.min.css"]} -->
### 22:30 de 29 de outubro de 1969


<div class="bubble-chat">
  <div class="narration">We set up a telephone connection between us and the
    guys at <abbr title="Stanford Research Institute">SRI</abbr>... We
    typed the L and we asked on the phone:</div>
  <img class="bubble-portrait push-left" src="../../images/leonard-kleinrock.jpg">
  <div class="bubble bubble-left">    
    <div class="bubble-author bubble-author-0">Leonard Kleinrock</div>
    <div>"Do you see the L?"</div>
  </div>
  <img class="bubble-portrait push-right" src="../../images/stanford-research-institute.jpg">
  <div class="bubble bubble-right">
    <div class="bubble-author bubble-author-1">Guys at SRI</div>
    <div>"Yes, we see the L," came the response.</div>
  </div>
  <div class="narration">We typed the O, and we asked,</div>
  <img class="bubble-portrait push-left" src="../../images/leonard-kleinrock.jpg">
  <div class="bubble bubble-left">
    <div class="bubble-author bubble-author-0">Leonard Kleinrock</div>
    <div>"Do you see the O."</div>
  </div>
  <img class="bubble-portrait push-right" src="../../images/stanford-research-institute.jpg">
  <div class="bubble bubble-right">
    <div class="bubble-author bubble-author-1">Guys at SRI</div>
    <div>"Yes, we see the O."</div>
  </div>
  <div class="narration">Then we typed the G, and the system crashed...
    Yet a revolution had begun...
</div>
</div>


_Fonte: [Estradas e Encruzilhadas da História da Internet (em inglês)][roads-crossroads]_

[roads-crossroads]: http://netvalley.com/intval1.html

*[SRI]: Stanford Reasearch Institute*

---
<!-- {"layout": "centered"} -->
Em **1969**, a ARPANET era uma conexão **entre 4 universidades apenas**.

![A configuração da ARPANET em 1969 era de apenas 4 universidades](../../images/arpanet-1969.jpg)
![](../../images/arpanet-1969-geo.jpg)

A partir de 1969 e durante a década de 1970, a ARPANET cresceu e se
conectou com várias outras grandes redes.

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
Contudo, **a falta de padrão de protocolos** de rede impedia o avanço.
Além disso, **os protocolos em vigência deixavam a REDE como responsável pela
confiabilidade**.

---
<!-- {"layout": "regular"} -->
## Linha do Tempo <small>(1/2)</small>

1969 <!-- {.bullet-old} -->
  ~ Larry Roberts estabelece 1º link da **ARPANET** <!-- {dd:.bullet-old} -->

1974
  ~ Bob Kahn e Vint Cerf **especificam os protocolos TCP/IP**

1983
  ~ Bob Kahn e Vint Cerf implantam a **família de protocolos
    TCP/IP na ARPANET**

1974 - 1990
  ~ Outras **grandes redes se conectaram a ARPANET**
    (CSNET, NIPRNET, SPAN, NSN, ESNet, NSFNET, MILNET, SATNET, WIDEBRAND)

---
<!-- {"layout": "centered"} -->


::: figure .embedded-caption
<figcaption class="caption-bottom centered">A Internet em 1986</figcaption>

![Diagrama lógico da ARPANET em 1986](../../images/arpanet-1986.png)
:::

---
<!-- {"layout": "regular"} -->
## Linha do Tempo <small>(2/2)</small>

1988 - 1989
  ~ Surgimento dos primeiros provedores de acesso ao
    público geral (ISP), dando forma à **Internet** (_case-sensitive_)

1992
  ~ O governo americano permitiu a conexão da Internet com
    outras redes que não eram exclusivamente de pesquisa

**1989 - 1993**
  ~ Tim Berners-Lee **cria a WWW** em CERN
    (_European Organization for Nuclear Research_) e a deixa aberta ao público
    geral

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
# Dúvida...
## Mas se a Web surgiu apenas em 1989, o que era a Internet antes dela?

::: figure .floating-portrait-container
![O Filosoraptor](../../images/philosoraptor.jpg) <!-- {.portrait} -->
:::

---
## A era Pré-web

- Correio eletrônico (E-mail, ~1965)
- BBS (_Bulletin Board System_, 1978), Usenet (1980), FTP (1985)
- WAIS, Archie, Veronica (mecanismos de busca)
- Gopher (1991)

---
<!-- {"layout": "centered"} -->
::: figure
![Tela do cliente de E-mail ELM](../../images/email-elm.png)
<figcaption>Cliente de E-mail ELM (1986)</figcaption>
:::

---
<!-- {"layout": "centered"} -->
::: figure
![Tela do cliente de E-mail Pine](../../images/email-pine.png)
<figcaption>Cliente de E-mail Pine (1989)</figcaption>
:::

---
<!-- {"layout": "centered"} -->
::: figure
![Tela do BBS Koala Country](../../images/bbs-koala-country.jpg)
<figcaption>BBS Koala Country (1989)</figcaption>
:::

---
<!-- {"layout": "centered"} -->
::: figure
<figcaption>Usenet GNUs</figcaption>

![Tela do Usenet GNUs](../../images/usenet-gnus.png) <!-- {style="height: 500px"} -->
:::

---
<!-- {"layout": "centered"} -->
::: figure
<figcaption>Gopher de Jospeh Maistre</figcaption>

![Tela do gopher de Jospeh Maistre](../../images/gopher-jospeh-maistre.png) <!-- {style="height: 500px"} -->
:::

---
## A era Pré-web

- O que mais se aproximava de **troca organizada de documentos** era o
  **Gopher**
- O Gopher considerou que a melhor forma para apresentar a
  informação era de **forma hierárquica**
  - Contudo, hierarquizar a informação não é fácil, nem para fazer, nem para ler
- A _World Wide Web_ (WWW), proposta por Tim Berners-Lee, apresenta a
  informação em "formato de teia"

---
<!-- {"layout": "section-header", "hash": "o-que-e-a-web"} -->
# O que é a Web
## Definição e Composição

- Definição de Web
- Linguagens da Web
<!-- {ul:.content} -->

---
## Definição **(~~in~~formal)** de Web

- **World Wide Web**, ou WWW, traduz em "teia mundial"
  - Normalmente falamos apenas: a **Web**

1ª definição
  ~ É o que estamos vendo e interagindo quando abrimos um navegador
    (Chrome, Firefox etc.)

2ª definição
  ~ Um conjunto de documentos de **hipermídia** **interconectados**, tipicamente
    acessados pela Internet. Esses documentos são as **páginas web**.
    - **Hipermídia**: conteúdo digital que envolve texto, imagens, sons,
      vídeos etc.
    - **Interconectado**: um documento contém "links" (referências) a outros
      (daí a ideia de teia :spider_web:)

<!-- {dl:.bulleted} -->

---
## Definição **(formal)** de Web

Segundo Andrew Tanembaum (autor de vários livros de Computação):

> A Web é um **arcabouço arquitetural** para acessar<br>
> **conteúdo relacionado** que está espalhado em milhões<br>
> de computadores pela Internet.

<!-- {blockquote:.centered} -->

"Arcabouço arquitetural"
  ~ Conjunto de regras para a descrição, visualização e transmissão das
    páginas web

"Conteúdo relacionado"
  ~ As páginas podem conter referências (_links_, ou melhor, _hyperlinks_) para
    outras páginas

<!-- {dl:.width-40} -->

---
<!-- { "layout": "2-column-highlight-and-content" , "hash": "o-que-compoe-web"} -->
## O que **compõe** uma página web?

::: figure . height: 90%
<figcaption><a href="https://fegemo.github.io/cefet-web-ovelhas/racas-raras.html" target="_blank"><code>racas-raras.html</code></a></figcaption>
<iframe src="https://fegemo.github.io/cefet-web-ovelhas/racas-raras.html" height="90%" width="100%">
  ![Tela da página sobre raças de ovelhas](../../images/cefet-web-ovelhas.png)
</iframe>
:::

- Uma página web é formada por **arquivos**:
  - **01** arquivo no formato HTML (*e.g.*, `racas-raras.html`)
  - Arquivos CSS (*e.g.*, `estilo.css`)
  - Arquivos JavaScript (*e.g.*, `ovelhita.js`)
  - Imagens (`.png`, `.jpg`, `.gif`)
  - Vídeos etc.

*[HTML]: Hypertext Markup Language*
*[CSS]: Cascading Stylesheets*

---
<!-- {"layout": "3-column-element-with-titles-expansible","preventSelection": "code"} -->
## ![Logomarca do HTML](../../images/logo-html.svg) <!-- {.emoji} --> `racas-raras.`**`html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Raças Raras de Ovelhas</title>
    <link rel="stylesheet" href="estilos.css">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
  </head>
  <body>
    <h1>Raças <strong>Raras</strong> de Ovelhas</h1>
    <p>O interessante animal da espécie <em>Ovis aries</em> (vulga ovelha) é
      tipicamente produzido (pela natureza) em raças distintas. Em cada uma
      delas, os indivíduos ovelhísticos possuem características fisiológicas e
      comportamentais diferentes.</p>
    <p>A seguir, veja alguns exemplos dessas raças.</p>
    <h2>Algod-ovelha</h2>
    <img src="algod-ovelha.jpg" alt="" class="circular foto-ovelha">
    <p>Em vez de lã, esta ovelha é uma exímia produtora de algodão e
      muito apreciada pela indústria têxtil chinesa.</p>
    <p>Pessoas pagam milhões para poder criar destas em suas casas.</p>
    <h2>Pirá-tovelha</h2>
    <img src="pira-tovelha.jpg" alt="" class="circular foto-ovelha">
    <p>Ovelha marinha-saqueadora frequentemente vista nas ilhas caribenhas
      (seu habitat) navegando embarcações de madeira.</p>
    <p>Ao avistar uma destas, gire o leme completamente a estibordo, ice as
      velas e fuja para terra firme.</p>
    <h2>Ovelhopixel</h2>
    <img src="ovelhopixel.png" alt="" class="circular foto-ovelha">
    <p>Uma ovelha digital formada por um conjunto de quadradinhos coloridos.</p>
    <p>Ela precisa se recarregar de tempos em tempos.</p>
    <h2>Outras</h2>
    <ul>
      <li>Robôvelha</li>
      <li>Ninjo-velha</li>
      <li>Legovelha</li>
    </ul>
    <figure id="ovelha" class="sprite">
      <img src="sheep-sprite.png" alt="" draggable="false">
    </figure>
    <script src="shake.js" charset="utf-8"></script>
    <script src="ovelhinha.js" charset="utf-8"></script>
  </body>
</html>
```

## ![Logomarca do CSS](../../images/logo-css.svg) <!-- {.emoji} --> `estilos.`**`css`**

```css
body {
  margin: 0 auto;
  max-width: 600px;
  border-left: 3px double silver;
  border-right: 3px double silver;
}

h1 {
  margin-top: 0;
  font-family: "Comic Sans", cursive;
  font-weight: normal;
  color: purple;
}

h2 {
  clear: both;
  color: black;
  font-family: "Comic Sans", cursive;
  background-image: linear-gradient(to right, yellow 1%, rgba(255,255,255,.5) 1%, transparent);
  padding: 0.15em 0.15em 0.15em 1em;
}

.circular {
  border-radius: 50%;
  shape-outside: circle(50%);
}

.foto-ovelha {
  display: inline-block;
  width: 125px;
  border: 2px solid yellow;
  box-shadow: 3px 3px 3px silver;
}

p {
  text-align: justify;
  line-height: 1.5em;
}

ul {
  list-style-image: url(ovelhinha.gif);
}

.sprite {
  width: 40px;
  height: 40px;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0;
  cursor: move;
}

.sprite.invertido {
  transform: rotateY(.5turn);
}

.sprite > img {
  position: absolute;
  top: calc(-1*40px);
  left: calc(-3*40px);
}

.sprite.parado > img {
  top: calc(-1*40px);
  left: calc(-3*40px);
  animation: parado 1.5s steps(1) 1;
}

@keyframes parado {
  100% { left: calc(-3*40px); }
}
```

## ![Logomarca do JavaScript](../../images/logo-javascript.svg) <!-- {.emoji} --> `ovelhita.`**`js`**

```js
const ANIMACOES = ['parado', 'andando', 'correndo', 'rolando', 'virando',
  'adormecendo', 'dormindo', 'despencando', 'despencado', 'pendurada'];

const ESTADOS = {
  reflexiva: { loop: 'parado', proximo: ['dormindo', 'andando', 'reflexiva'] },
  dormindo: { loop: 'dormindo', pre: 'adormecendo', pos: { anim: 'parado', duracao: 500 }, proximo: ['andando', 'reflexiva'] },
  andando: { loop: 'andando', proximo: ['andando', 'reflexiva', 'virando', 'correndo'] },
  correndo: { loop: 'correndo', proximo: ['andando', 'correndo'] },
  virando: { loop: 'virando', proximo: ['reflexiva', 'andando'] },
  rolando: { loop: 'rolando', proximo: ['reflexiva', 'dormindo'] },
  pendurada: { loop: 'pendurada', proximo: ['despencando'] },
  despencando: { loop: 'despencando', pos: { anim: 'despencado', duracao: 2000 }, proximo: ['reflexiva']}
};

const vibraTela = () => {
  // chama a vibração da bateria, se houver
  if ('vibrate' in navigator) {
    navigator.vibrate(1000);
  }

  // faz os elementos dentro do tela tremerem
  document.body.classList.add('vibrando');
  document.body.addEventListener('animationend', function(e) {
    e.target.removeEventListener(e.type, arguments.callee);
    document.body.classList.remove('vibrando');
  });
};

let ovelha = {
  el: document.querySelector('#ovelha'),

  // estado inicial
  estado: ESTADOS.reflexiva,
  tempoNoEstado: 0,
  estadosAnteriores: [],
  orientacao: 1,

  // define qual animação será tocada
  defineAnimacao(nomeAnimacao) {
    ANIMACOES.forEach((anim) => this.el.classList.remove(anim));
    this.el.classList.add(nomeAnimacao);
  },

  // define se a ovelha está olhando para esquerda ou direita
  defineOrientacao(novaOrientacao) {
    if (novaOrientacao <= 0) {
      this.el.classList.add('invertido');
    } else {
      this.el.classList.remove('invertido');
    }
    this.orientacao = novaOrientacao;
  },

  largura: 40,
  altura: 40,
  // coordenadas definem a posição do centro da ovelha
  x: 20,
  y: 20,
  // sistema de coordenadas começa na direita e embaixo
  definePosicao(x, y) {
    this.x = x;
    this.el.style.right = `${x - this.largura/2}px`;
    if (!!y) {
      this.y = y
      this.el.style.bottom = `${y - this.altura/2}px`;
    }
  },

  // invocada quando quisermos trocar o estado
  mudaEstado(novoEstado) {    
    switch (novoEstado) {
      case ESTADOS.despencando:
        this.velocidadeY = 0;
        break;
    }

    this.estadosAnteriores.unshift(this.estado);
    while (this.estadosAnteriores.length > 3) {
      this.estadosAnteriores.pop();
    }
    this.estado = novoEstado;
    this.tempoNoEstado = 0;
  },

  sorteiaProximoEstado() {
    return ESTADOS[this.estado.proximo[Math.floor(Math.random() * this.estado.proximo.length)]];
  },

  bateuNaTela() {
    return (this.x - this.largura/2 < 0 || this.x + this.largura/2 > window.innerWidth);
  },

  saiuDaTela() {
    return (this.x + this.largura/2 < 0 || this.x - this.largura/2 > window.innerWidth);
  },

  revolucionaNaTela() {
    let newX;
    if (this.x - this.largura/2 < 0) {
      newX = this.x + window.innerWidth + this.largura/2;
    } else if (this.x + this.largura/2 > window.innerWidth) {
      newX = -this.largura/2;
    }
    this.definePosicao(newX);    
  },

  passouDoChao() {
    return (this.y - this.altura/2 < 0);
  },

  tempoAntes: 0,
  atualiza(tempo) {
    let delta = tempo - this.tempoAntes;
    this.tempoNoEstado += delta;

    switch (this.estado) {
      case ESTADOS.reflexiva:
        if (this.tempoNoEstado > 1000) {
          this.mudaEstado(this.sorteiaProximoEstado());
        }
        break;

      case ESTADOS.dormindo:
        if (this.tempoNoEstado > 4000) {
          this.mudaEstado(this.sorteiaProximoEstado());
        }
        break;

      case ESTADOS.andando:
        this.definePosicao(this.x += this.orientacao * .025 * delta);
        if (this.tempoNoEstado > 3000) {
          this.mudaEstado(this.sorteiaProximoEstado());
        }
        if (this.saiuDaTela()) {
          this.revolucionaNaTela();
        }
        if (this.bateuNaTela() && this.estadosAnteriores.indexOf(ESTADOS.virando) === -1) {
          this.mudaEstado(ESTADOS.virando);
        }
        break;

      case ESTADOS.correndo:
        this.definePosicao(this.x += this.orientacao * .085 * delta);
        if (this.tempoNoEstado > 2500) {
          this.mudaEstado(this.sorteiaProximoEstado());
        }
        if (this.saiuDaTela()) {
          // dá a volta na tela
          this.revolucionaNaTela();
        }
        break;

      case ESTADOS.virando:
        // 500ms é o mesmo tempo definido na animação em CSS
        if (this.tempoNoEstado > 500) {
          this.defineOrientacao(this.orientacao * -1);
          this.mudaEstado(this.sorteiaProximoEstado());
        }
        break;

      case ESTADOS.rolando:
        // rola até bater na tela
        this.definePosicao(this.x += this.orientacao * .085 * delta);
        if (this.bateuNaTela()) {
          this.mudaEstado(this.sorteiaProximoEstado());
        }
        break;

      case ESTADOS.despencando:
        // vai caindo até atingir o chão
        this.definePosicao(this.x, this.y += this.velocidadeY * .085 * delta);
        this.velocidadeY -= 0.025;
        if (this.passouDoChao()) {
          this.definePosicao(this.x, this.altura/2);
          vibraTela();
          this.mudaEstado(this.sorteiaProximoEstado());
        }
        break;        
    }

    if (!this.deveParar) {
      requestAnimationFrame(this.atualiza.bind(this));
    }
    this.deveParar = false;
    this.tempoAntes = tempo;
  },

  para: function() {
    this.deveParar = true;
  }
};


ovelha.inicializa();
```

---
<!-- { "layout": "circling-balloons" } -->
## As três linguagens

- ![Logomarca do HTML](../../images/logo-html.svg)

  Linguagem:
    ~ HTML: Hypertext Markup Language

  O que faz:
    ~ Conteúdo e estrutura da página (*e.g.*, o texto, imagens)

- ![Logomarca do CSS](../../images/logo-css.svg)

  Linguagem:
    ~ CSS: Cascading Stylesheets

  O que faz:
    ~ Apresentação (estilos) da página (*e.g.*, core, tamanhos, detalhes)

- ![Logomarca do JavaScript](../../images/logo-javascript.svg)

  Linguagem:
    ~ JavaScript

  O que faz:
    ~ Comportamento dinâmico na página (*e.g.*, a ovelhita)

---
<!-- {
  "layout": "2-column-highlight-and-content",
  "embeddedStyles": ".titulo-raras-ovelhas { color: purple; font-family: 'Comic Sans', cursive; font-weight: normal; border-bottom: 2px solid currentColor; }"
} -->
## A página das **Raras Ovelhas** <!-- {.titulo-raras-ovelhas} -->

![Estrutura de pasta e arquivos da página de ovelhas](../../images/cefet-web-ovelhas-estrutura-pasta.png)

- O arquivo HTML referencia (usa, inclui) os arquivos de imagem, os arquivos
  de estilo e os de script. Por exemplo:
  - Incluindo imagem:
    ```html
    <img src="imagens/pira-tovelha.jpg">
    ```
  - Referenciando um arquivo CSS:
    ```html
    <link href="estilos.css" rel="stylesheet">
    ```

---
<!-- {"layout": "section-header", "hash": "as-proezas-de-tim"} -->
# Como surgiu a Web
## O que levou ao seu surgimento

- Tim, o Coração Valente
- As proezas de Tim
  - O formato HTML
  - O navegador
  - O servidor web
  - O protocolo HTTP
<!-- {ul^1:.content} -->

---
## Tim, o Coração Valente

- ::: figure .floating-portrait-container.push-right
  ![Tim Berners-Lee](../../images/tim-berners-lee.jpg) <!-- {.portrait} -->
  :::
  **Físico**, trabalhando no CERN, **Tim Berners-Lee** percebeu a necessidade
  dos físicos de compartilhar informação e a falta de máquinas ou formatos
  comuns
- **Em 1989**, Tim escreveu uma proposta: _"a large hypertext database with typed
  links"_
- Candidatos a nomes:
  - _Information Mesh_
  - _The Information Mine_
  - _Mine of Information_
  - **_World Wide Web_**

*[CERN]: Conseil Européen pour la Recherche Nucléaire*

---
## As 5 Façanhas de Tim 💓

- Ao final de 1990, Tim havia criado os **5 componentes básicos
  da Web**: <!-- {ul:.bulleted} -->
  1. O _HyperText Markup Language_ (HTML)
  1. O primeiro navegador ou _web browser_ (WorldWideWeb)
  1. O primeiro servidor ([CERN httpd][first-http-server])
  1. O _HyperText Transfer Protocol_ (HTTP)
  1. A primeira página Web servida na Internet (http://info.cern.ch)

[first-http-server]: http://www.w3.org/Daemon/User/
*[HTML]: HyperText Markup Language*
*[HTTP]: HyperText Transfer Protocol*

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
## Tim, o coração valente, tinha uma dúvida :one:

![](../../images/tim-berners-lee.jpg) <!-- {.portrait.push-left} -->
Quero que **qualquer pessoa**, em **qualquer computador** (arquitetura, sistema
operacional, rede), em qualquer lugar, consiga **visualizar documentos um do
outro**.

Mais que isso, os documentos podem **referenciar um ao outro não necessariamente
de forma hierárquica**. E quero que eles possam conter imagens, tabelas, títulos
e outras coisas legais.

---
## HyperText Markup Language (HTML)

- É um _formato de arquivo_ (`.html`) em texto simples (*plain-text*) em que
  **seleciona-se um texto** e **marca suas partes dando a ele estrutura**

  Texto puro:
    ~ ```html
      Este é um texto sem ênfases.
      ```

  Texto html:
    ~ ```html
      Este é um texto com um trecho <em>enfatizado</em>.
      ```

---
## Um **arquivo `html`** completo

- `pagina-singela.html`:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Uma página web!</title>
  </head>
  <body>
    Olá pessoal, esta é uma página com apenas este singelo texto!
  </body>
  </html>
  ```

---
<!-- {"layout": "centered-horizontal"} -->
## **Evolução** do HTML e outras **alternativas**

Versões
  ~ 1993: HTML 1.0
  ~ 1995: HTML 2.0
  ~ 1997: HTML 3.2
  ~ 1997: HTML 4.0
  ~ 2008 - hoje: **HTML 5** ![](../../images/seta-o-cara.png) <!-- {.on-line.bouncing-left} -->

Alternativas
  ~ 2000: XHTML 1.0 ![](../../images/seta-meh.png) <!-- {.on-line.bouncing-left.delay-1} -->
  ~ 2001: XHTML 1.1 ![](../../images/seta-meh.png) <!-- {.on-line.bouncing-left.delay-2} -->

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
## Tim, o coração valente, tinha uma dúvida :two:

![](../../images/tim-berners-lee.jpg) <!-- {.portrait.push-left} -->
Agora que especifiquei um formato de arquivo robusto, preciso de um **programa
que seja capaz de renderizar** seu conteúdo e permitir a **navegação** de um
arquivo html para outro.

---
<!-- {"layout": "centered-horizontal"} -->
![Foto do navegador WorldWideWeb](../../images/browser-www.jpg)
<!-- {.slide-contain.centered.block} -->

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
## Tim, o coração valente, tinha uma dúvida :three:

![](../../images/tim-berners-lee.jpg) <!-- {.portrait.push-left} -->
Até agora, consigo visualizar os arquivos `.html` no meu computador, usando um
navegador. Mas quero poder acessar **arquivos de qualquer um que se disponha a
deixar o computador ligado**, em qualquer parte do mundo.

---
## Servidores Web

- É o **programa que executa** em um computador **24/7** e _"conversa" com os
  navegadores_
- **Atende _solicitações_** de *download* de arquivos e **entrega as _respostas_**
- Funções:
  - armazenar, processar e entregar páginas web para clientes
  - receber dados de clientes (*upload*, formulários)
  - gerar páginas HTML dinamicamente
- Exemplos hoje em dia:
  - **Apache**
  - Tomcat
  - Nginx
  - IIS <!-- {ul:.multi-column-list-4} -->

---
<!-- {"layout": "main-point", "state": "emphatic"} -->
## Tim, o coração valente, tinha uma dúvida

Quero poder **transmitir** essas páginas web de um servidor para meu navegador.

![](../../images/tim-berners-lee.jpg) <!-- {.portrait.push-left} -->
Tenho o protocolo TCP/IP à minha disposição, mas preciso **transmitir mais do
que apenas o conteúdo dos arquivos**. Por exemplo, como faço caso o arquivo
solicitado não exista? **Em que "língua"** que o servidor web e o navegador vão
**conversar**?

---
<!-- {"embedSVG": "img[src$='.svg']", "styles": ["../../styles/classes/http-diagram.min.css"]} -->
## **HTTP**

- É um **protocolo** na camada de aplicação
  > Conjunto de regras bem definidas descrevendo como
  > entidades se comunicam.
  - É a **"língua falada" pelo navegador e pelo servidor web**
- Modelo requisição &rarr; resposta

::: figure .http-diagram.flex-align-center.figure-slides.clean.no-margin.invert-colors-dark-mode
![](../../images/http-diagram-informal.svg) <!-- {.step-1 style="height: 280px"} --> <!-- {p:.bullet.figure-step.bullet-no-anim} -->

![](../../images/http-diagram-informal.svg) <!-- {.step-2 style="height: 280px"} --> <!-- {p:.bullet.figure-step.bullet-no-anim} -->

![](../../images/http-diagram-informal.svg) <!-- {.step-3 style="height: 280px"} --> <!-- {p:.bullet.figure-step.bullet-no-anim} -->
:::


---
<!-- {"layout": "2-column-content", "embedSVG": "img[src$='.svg']"} -->
### **Navegador requisita** algo e **Servidor responde**

- ![](../../images/http-diagram-informal.svg) <!-- {.full-width.centered.step-3.invert-colors-dark-mode} --> <!-- {ul:.http-diagram.no-bullets.no-padding.bullet} -->
  Requisição:
  ```http
  GET /index.html HTTP/1.1
  Host: www.twitter.com
  ```

1. Resposta: <!-- {ol:.bullet.no-bullets.no-padding.compact-code} -->
   ```http
   HTTP/1.1 200 OK
   Date: Mon, 23 May 2005 22:38:34 GMT
   Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
   Content-Type: text/html; charset=UTF-8
   Content-Length: 131

   <!DOCTYPE html>
   <html>
   <head>
     <title>Twitter</title>
   </head>
   <body>
     Olá mundo, este é um tweet.
   </body>
   </html>
   ```

---
<!-- {"layout": "centered"} -->
## HTTP

- Versões
  - 1991: v0.9
  - 1996: v1.0
  - 1997 - 1999: v1.1
  - 2014 - 2016: HTTP/2
  - 2017 - atual: HTTP/3
- Alternativas
  - 2009: SPDY

---
<!-- {"layout": "section-header", "hash": "minha-primeira-pagina-web"} -->
# Minha Primeira Página Web
## Como cria-las, o que elas comem, seu habitat etc.

- Ferramentas necessárias
- Um arquivo HTML
<!-- {ul:.content} -->

---
<!-- {"layout": "tall-figure-right"} -->
## Ferramentas Necessárias

![](../../images/kit-aventureiro.jpg)
- O **KIT AVENTUREIRO** deve conter:

  01 editor de texto <!-- {dl:.width-50.bulleted-dt} -->
    ~ Pode ser o **bloco de notas** mesmo ;)
    ~ Mas existem outras ferramentas

  01 navegador web
    ~ **Chrome**, Firefox, Edge, Safari, Opera
    ~ Mas existem outras ferramentas

  ~~salgadinhos~~
    ~ fim!


---
<!-- {"layout": "centered"} -->
# Referências

- [Antes da Web: A Internet em 1991 (inglês)][before-the-web]
- [Estradas e Encruzilhadas da História da Internet (inglês)][roads-crossroads]
- [Primeiro servidor web][first-web-server]
- [Evolução da Web][evolution-of-web]

[before-the-web]: http://www.zdnet.com/blog/networking/before-the-web-the-internet-in-1991/834
[roads-crossroads]: http://www.netvalley.com/cgi-bin/intval/net_history.pl?chapter=1
[first-web-server]: http://info.cern.ch
[evolution-of-web]: http://www.evolutionoftheweb.com/

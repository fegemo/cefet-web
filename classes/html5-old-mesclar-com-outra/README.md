# HTML - Parte 5

---
# Roteiro

1. Conteúdo multimídia - Audio e Video
1. _Object_ e _Embed_
1. _Frames_ e _iframe_


---
# _Object_ e _Embed_

---
## _Object_ e _Embed_

- Elementos `<object></object>` ou `<embed></embed>` são elementos de versões
  antigas do `html`
- Usados para referenciar objetos externos
  - Comuns para plugins: java _applets_, _flash_, _adobe pdf_ etc.
- Um dos objetivos do `html5` é não precisar mais de plugins &rarr;
  `<object>`, `<embed>`

---
## Exemplo de _object_

- Incluindo um arquivo _flash_:
  ```html
  <object data="a.swf" type="application/x-shockwave-flash">
  </object>

  <!-- com parametros -->
  <object data="a.swf" type="application/x-shockwave-flash">
    <param name="foo" value="bar">
  </object>
  ```

---
# _Frames_ e _iframe_

---
## _Frames_

- Eram uma forma para dividir a tela do navegador em várias páginas

  ![](../../images/frames.png)

---
## _Frames_ (cont.)

- Podem ainda funcionar, mas os navegadores estão removendo suporte a eles
- Sua utilidade era:
  1. Criar barras de rolagem "dentro" da página
  1. Permitir a reutilização de arquivos e o carregamento de apenas partes da
     tela
- Tornou-se obsoleto porque:
  1. A propriedade `overflow` do `CSS` possibilita a criação de barras de
     rolagem em qualquer elemento `block`
  1. A reutilização de arquivos pode ser feita no servidor por meio de
     geração dinâmica de `html` ou então com atualizações parciais da tela via
     AJAX

---
## Sintaxe dos _frames_ (for fun :)

```html
<html>
<head>
  <title>Java Platform SE 7 </title>
</head>
<frameset cols="20%,80%" title="Documentation frame">
<frameset rows="30%,70%" title="Left frames">
  <frame src="o.html" name="lista" title="All Packages">
  <frame src="a.html" name="pacote" title="...">
</frameset>
<frame src="s.html" name="classFrame" title="...">
<noframes>
  Navegador não suporta frames.
</noframes>
</frameset>
</html>
```

---
## _iframe_

- Apesar da iminente remoção dos _frames_, seu primo rico ainda prospera:
  `<iframe></iframe>`
- Em vez de definir uma divisão da página (`frameset`), apenas embutimos um
  segundo arquivo suportado pelo navegador dentro do primeiro

---
## Exemplo de _iframe_

```html
<!-- url do cefet campus II no gmaps -->
<iframe src="http://..." width="400" height="300"></iframe>
```

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1875.3254574531459!2d-43.99946155000001!3d-19.939110099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6965ceade4c53%3A0x4980bb6236578f78!2sCEFET-MG+-+Campus+II!5e0!3m2!1spt-BR!2sbr!4v1414043575197" width="400" height="300" frameborder="0" style="border:0"></iframe>

---
## Exemplo loucão

<iframe width="50%" height="50%" src="http://fegemo.github.io/cefet-web/classes/html5/#23"></iframe>

---
## Usos legítimos e atuais do _iframe_

- Colocar um vídeo do youtube na página
- Colocar um mapa do google/bing maps
- Colocar um player de música do soundcloud
- Colocar código html/css/js do jsfiddle.com
- Colocar um _widget_ de previsão do tempo

---
## Usos não tão legais do _iframe_

- Colocar um sistema dentro do outro
  - Exemplo: [agências de viagem](http://www.alpsturismo.com.br/index.asp)
- Criar barras de rolagem

---
# Referências

1. Capítulo 5 do livro online diveintohtml5.info
1. Capítulo 12 do livro
1. Mozilla Developer Network (MDN)

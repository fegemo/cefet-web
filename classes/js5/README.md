<!--
backdrop: blastoff
-->

# Javascript - Parte 5

## APIs do html5

---
# Roteiro

1. APIs do HTML5
  1. Geolocation
  1. Canvas
  1. Drag'n'drop 
  1. History
  1. Web worker
  1. WebRTC

---
# APIs do HTML5

---
## APIs do HTML5

- 
---
# Geolocation API

- Possibilita uma página a solicitar ao _user agent_ (navegador) que descubra a geolocalização do usuário
- Casos de uso:
  1. Localização em um mapa
  1. Pesquisa de locais próximos ao usuário
  1. ~~Rastreador~~ intimidador de namorado/namorada
- Como o navegador consegue a localização?
  1. GPS do dispositivo, caso disponível
  1. Aproximação pelo IP

---
## Geolocation API

- Como usar:
  ```js
  navigator.geolocation.getCurrentPosition(intimidar);
  
  function intimidar(posicao) {
    var msg = 'Eu sei aonde você está!!\n\n';
    msg += 'lat: ' + posicao.coords.latitude + ', ';
    msg += 'long: ' + posicao.coords.longitude;
    window.alert(msg);
  }
  ```
<button onclick="javascript:function intimidar(posicao){var msg='Eu sei aonde você está!!\n\n';msg+='lat: '+posicao.coords.latitude+', ';msg+='long: '+posicao.coords.longitude;window.alert(msg);} navigator.geolocation.getCurrentPosition(intimidar); this.innerText='Mwahaha...';">Intimidar</button>

---
## **Métodos** da Geolocation API ([MDN](https://developer.mozilla.org/pt-BR/docs/Using_geolocation))

- O objeto `navigator.geolocation` possui três métodos:
  1. Solicita a posição **uma vez**: 
    ```js
    getCurrentPosition(successCallback, errorCallback, options)
    ```
  1. Solicita a posição sempre que ela **mudar** ou que o navegador conseguir **um valor mais preciso**:
    ```js
    watchPosition(successCallback, errorCallback, options)
    ```
  1. **Para** de observar a posição. Usa o valor retornado por `watchPosition` para identificar o "observador":
    ```js
    clearWatch(watchId)
    ```

---
## Professor, já posso usar **Geolocation**??

<div class="caniuse" data-feature="geolocation"></div>

- Para ter certeza de que pode usar, faça uma verificação:
  ```js
  if (navigator.geolocation) {
    // usa as paradas
  } else { 
    window.location.href = 'http://browsehappy.com/';
  }
  ```
  
---
# Canvas

---
## Canvas

- Expõe uma API de desenho arbitrário em uma "tela de pintura" **de forma programática**
- Representado pelo elemento `<canvas></canvas>`
- O elemento, por si só, não possui conteúdo ou borda. Por exemplo:
  ```html
  <canvas width="200" height="50" style="border: 1px solid black"></canvas>
  ```
  - Resulta em:

    <canvas width="200" height="50" style="border: 1px solid black"></canvas>
 
---
## Desenhando no canvas

- Inicialmente, o `canvas` é apenas um retângulo transparente
- Para desenharmos nele, precisamos (em javascript) solicitar um contexto de desenho, que é um objeto 
  que contém a API gráfica (os métodos para desenho)
- Para os exemplos a seguir, considere o seguinte código html:
  ```html
  ...
  <canvas id="tela" width="600" height="300">
    Seu navegador não tem suporte ao elemento <code>canvas</code>.
  </canvas>
  ```

---
## Desenhando no canvas (cont.)

- Solicitando o contexto gráfico e desenhando dois retângulos
  ```js
  function desenhaRetangulos() {
    var ctx = document.getElementById('tela').getContext('2d');
    ctx.fillStyle = 'rgb(200,0,0)';
    ctx.fillRect (10, 10, 55, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect (30, 30, 55, 50);
  }
  ```
  <button type="button" style="float:right" onclick="javascript:var ctx = document.getElementById('tela').getContext('2d');ctx.fillStyle='rgb(200,0,0)';ctx.fillRect (10, 10, 55, 50);ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';ctx.fillRect (30, 30, 55, 50);">Desenha Retângulos</button>
  <canvas id="tela" width="100" height="80">
    Seu navegador não tem suporte ao elemento <code>canvas</code>.
  </canvas>

---
## Contexto gráfico

- Solicitamos o contexto gráfico com o método `getContext(...)` de um elemento `canvas`
- Como argumento, passamos o tipo do contexto ("2d")
- Já existe o contexto "3d", que foi/está sendo adicionado ao html
  - Contudo, a API do contexto "3d" é totalmente diferente (usa WebGL)
- Obtido o contexto, podemos começar a invocar métodos para desenhar (e.g., `fillRect(x1, y1, x2, y2);`)

---
## Sistema de coordenadas

- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
- http://diveintohtml5.info/canvas.html
- https://developer.mozilla.org/pt-BR/docs/Web/HTML/Canvas

---
# Drag'n'drop

---
# History

---
# Web workers

---
# Referências

1. Mozilla Developer Network (MDN)

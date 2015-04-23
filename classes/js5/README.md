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
## Professor, já posso usar **Geolocation**??

<div class="caniuse" data-feature="geolocation"></div>


---
# Canvas

---
# Drag'n'drop

---
# History

---
# Web workers

---
# Referências

1. Mozilla Developer Network (MDN)

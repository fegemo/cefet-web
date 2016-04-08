# Seminário - APIs do HTML5


- Acesso a Dispositivo
  - _Gamepad API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.7)
  - _Vibration API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.5)
  - _Proximity API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.5)
  - _Ambient Light API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.3)
  - _Geolocation API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.3)
  - _Device Orientation API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.2)
  - _Battery Status API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.2)
- Multimídia e Gráficos
  - _Canvas API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 1.0)
  - _WebGL_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 1.0)
  - _Web Audio API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.7)
  - _Web MIDI API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.5)
  - _Pointer Lock API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.3)
  - _Fullscreen API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.3)
  - _Acessible Rich Internet Applications_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 1.0)
  - _Speech Synthesis API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.8)
  - _Speech Recognition API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.8)
  - _Presentation API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.7)
  - _Media Capture and Streams API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.7)
  - _Page Visibility API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.2)
- Conectividade
  - _WebSockets_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.7)
  - _WebRTC_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 1.0)
  - _Beacon API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.3)
- Armazenamento e _Offline_
  - _Offline Resources: application cache_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.8)
  - _Web Application SDK_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.5)
  - _IndexedDB_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.8)
  - _Web Storage_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.2)
  - _File API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.3)
- Desempenho e Segurança
  - _User Timing API_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.5)
  - _Web Cryptography_ (custo: <abbr title="Programação Web Dollars">PWD</abbr> 0.5)


## Referências

Como pontos iniciais de busca, você pode usar:

- [Artigo na MDN sobre HTML5][mdn-html5]
- APIs no [Can I Use][caniuse-pesquisa]
- [Índice de APIs do HTML5][html5-api-index]

[mdn-html5]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
[caniuse-pesquisa]: http://caniuse.com/#search=api
[html5-api-index]: http://html5index.org/

## Critérios de avaliação

O código do serviço Web será avaliado, dentre outros fatores, segundo:

1. **Esforço de implementação**
1. **Aderência** da implementação dos elementos obrigatórios **à especificação**
1. **Separação de responsabilidades** (HTML -> estrutura, CSS -> apresentação,
    JS -> comportamento)
1. **Boas práticas de programação** tanto no cliente quanto no servidor
1. Utilização de **HTML5 e CSS3 válidos** e de compatibilidade entre os
  principais navegadores

## Instruções gerais

O trabalho deve ser produzido integralmente pelo grupo. **Trabalhos muito
semelhantes receberão nota 0**, independente de quem copiou de quem.
Trabalhos semelhantes aos de outras pessoas (ex-alunos, pessoas na Internet)
também receberão nota 0.

## O que faz perder nota

Alguns descuidos podem fazer com que sua nota fique muito abaixo do esperado:
- Cópia de trabalho de outrem: nota 0
- Ausência de qualquer item obrigatório da entrega
- Ausência de itens da especificação obrigatória
- Baixa legibilidade do código
- Baixa qualidade da implementação
- Atraso na entrega. Cada dia de atraso reduz o valor máximo de nota da
 maneira abaixo. Considere `x` como dias de atraso e `y` a penalidade
 percentual na nota:

 ![Fórmula de penalidade por atraso](../../images/penalidade-por-atraso.png)
 - Isso implica que 1 ou 2 dias de atraso são pouco penalizados
 - E após 5 dias de atraso, o trabalho vale 0
 - _Seeing is believing_: https://www.google.com.br/search?q=y%3D(2%5E(x-2)%2F0.16)%2Cy%3D100

## O que deve ser **entregue**

O trabalho deve ser entregue via GitHub ou BitBucket, em um
repositório com o nome `web-projeto`. Não se esqueça de fazer vários e
pequenos _commits_, que é uma importante boa prática em `git` e também é
interessante para demonstrar seu progresso. Todos os integrantes do grupo
devem participar (vou procurar a carinha de cada um nos _commits_ :).

Além do código do seu serviço Web, seu repositório deve conter também
um arquivo README.md em sua pasta raiz que descreva brevemente o que ele é
e contenha a lista de itens extras (ou penalidades) as quais está pleiteando.

Você deve usar um serviço de hospedagem gratuito para a avaliação do seu
trabalho. Abaixo, uma lista desses serviços que possuem um plano gratuito:

- [Heroku](https://www.heroku.com/) (Java, Grails, Node, Ruby)
- [Appfog](https://www.appfog.com/) (Java, Grails, Node, Ruby)
- [cloudno.de](http://cloudno.de/) (Node)

Se você não conhecer serviços gratuitos que atendam às necessidades do seu
projeto, converse com o professor.

Ao final do seu trabalho, você deve submeter pelo Moodle o link do seu
repositório e o link do seu site hospedado.

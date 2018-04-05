# Projeto (TP1 + TP2) - CraftFolioGotchi®

![Uma árvore do jogo minecraft somada a uma mala com um porfolio somada a um tamagotchi](images/craftfoliogotchi.png)

:microphone: "O que acontece quando a (a) liberdade de se construir um mundinho
virtual se une à possibilidade de se (b) mostrar suas habilidades
em um portfolio, que também se liga aos (c) cuidados que um jogador
deve ter para cuidar de um bichinho virtual? Senhoras e senhores,
dêem boas vindas ao **CraftFolioGotchi**® :musical_note: :notes:".

O CraftFolioGotchi® é um sistema Web que dá a seus usuários a (a) possibilidade
de criar e personalizar uma (e apenas uma) página/mundo. Nela, ele pode colocar
(b) textos e galerias de imagens mostrando os seus trabalhos, ou seja, seu
portfolio. Além disso, cada usuário possui (a,c) um personagem/avatar que pode
ser controlado por ele e pode: andar no seu próprio mundo ou visitar o
mundo de outros usuários.

De tempos em tempos o personagem de um jogador pode (c) passar por necessidades,
como precisar de um remédio, de atenção ou de comida. Para atender essas
demandas, basta que o usuário dono do personagem (ou algum outro) visite
a sua página e clique nele.

O desenvolvimento do CraftFolioGotchi® deve ser feito em grupos de até 03
alunos e será dividido em duas etapas (TP1 e TP2) e os entregáveis
de cada parte estão descritos a seguir. As notas de cada etapa e o cronograma
estão definidos no [plano de ensino][plano-ensino] e no Moodle.

[plano-ensino]: https://fegemo.github.io/cefet-web/

## Trabalho Prático 1: _front-end_

Na primeira parte, o grupo deve entregar o _front-end_ com todas suas funções
implementadas, mas com dados _mocked_ em vez de usando um _back-end_ com
banco de dados e tal (TP2).

O sistema deve conter, pelo menos, as seguintes páginas:

1. Página de **cadastro/login** (pode ser a mesma, ou podem ser duas diferentes)
   - Essa página deve explicar brevemente o sistema de forma a "vender" a ideia
     para potenciais usuários
   - Nesta entrega (_front-end_ apenas), os botões logar/cadastrar devem
     apenas redirecionar o usuário para a página do mundo virtual
1. Página do **mundo virtual do usuário**
   - A página não deve ter uma barra de rolagem vertical
     (considere evitar a barra horizontal também)
   - Ela deve mostrar os _widgets_ (galeria de imagens, plaquinha etc., que
     serão descritos mais adiante) que foram adicionados à página
   - Na parte de baixo da página deve haver um "chão", que pode ser plano, e
     que deve ter uma imagem de fundo (tipo uma "textura")
   - O personagem/avatar do dono da página deve ser exibido em algum local
     do chão da página
     - O personagem pode ser controlado via teclado para andar para a
       esquerda/direita
   - A página pode estar em um modo de edição ou no modo de visualização
     - No modo de edição, o dono da página pode personalizar a página, bem como
       adicionar _widgets_ a ela
     - No modo de visualização o usuário pode interagir com os _widgets_ que
       possuem interação, como a galeria de fotos, a plaquinha de leitura etc.
       (descritos mais tarde)
1. Página de **configuração de _widget_**
   - Devem existir pelo menos 04 tipos de _widget_:
     1. **Fundo da página**, que pode ser apenas uma cor, um gradiente linear
        ou uma imagem (que pode ser uma URL hospedada em um servidor pra não
        precisar de _upload_)
     1. **Chão** plano na parte de baixo da tela, que deve ter uma "textura"
        aplicada a ele (_i.e._, imagem de fundo repetida, que pode ser passada
        como uma URL, ou que o usuário possa escolher a partir de um conjunto
        de e.g. 4 opções)
     1. **Caixa de texto**, que é um espacinho onde o usuário pode escrever
        alguma coisa e configurar a aparência: tamanho, posição, bordas,
        fonte e cor
     1. **Galeria de imagens**, uma sequência de imagens (URLs) opcionalmente
        com textos e um hiperlink associados. A galeria pode ser de slides ou
        mostrar um número máximo de imagens lado a lado. As imagens podem ser
        entradas como URLs para imagens hospedadas em algum servidor
   - Você pode ter uma única página para criar todos os tipos de _widget_, ou
     então uma página para cada um
   - Ao configurar um _widget_, seus valores de configuração devem ser
     armazenados no `localStorage`, para que a página de **mundo virtual** possa
     ler esses valores e "remontar" a página
   - Observação: para o usuário, uma experiência melhor seria configurar um
     _widget_ na mesma página onde ele se encontra (no caso,
     na página do mundo virtual em modo de edição), por exemplo, dentro de
     uma ["janelinha modal"][bootstrap-modal]. Implementar a funcionalidade
     de configuração de _widget_ na própria página do mundo virtual é um
     item opcional (que será descrito mais adiante)

[bootstrap-modal]: https://getbootstrap.com/docs/4.0/components/modal/

A implementação do _front-end_ dessas páginas e das suas respectivas
funcionalidades equivalem ao valor de 70% da nota do trabalho (TP1). Para
conseguir mais pontos, o grupo pode escolher um subconjunto de funcionalidades
extras para implementar, limitado a uma nota percentual total de 120%:

<!--
- Second life (craftfoliogotchi)
  - 01 tipo de usuário (cadastro, login)
  - sem conceito de amigo?
  - cada usuário é dono de 01 página, que representa o seu espaço dentro do mundo
  - todo mundo possui um chão, que pode ser plano
  - o usuário deve possuir um personagem que ele pode controlar com o teclado
    - o personagem deve andar e pular, com interação via teclado ou mouse
    - o personagem pode ter uma animação (opcional)
  - o usuário pode personalizar o seu mundo com _widgets_:
    - cor ou imagem de fundo
    - "textura" do chão
    - galeria com textos/linsks/vídeos com o portfolio da pessoa
    - plaquinhas pregadas no chão com texto em modal
    - caixas de texto posicionáveis/redimensionáveis (opcional)
    - escolha do personagem dentre uma lista (opcional)
    - escolha de partes do personagem (opcional)
  - -->
- **Relativos à aparência**:
  - (8%) fazer todas as **páginas _responsive_**
  - (1%) colocar um **_favicon_** bacaninha :star:
  - (2%)
- **Relativos ao uso de ferramentas**:
  - (0%) usar um **framework CSS** como Bootstrap ou MaterializeCSS
  - (3%) usar um **préprocessador CSS** como Sass, Less, Stylus ou o :star:
    postcss-cssnext (CSS4 convertido para CSS3)
  - (0%) usar um **framework JavaScript** para ajudar na estrutura dos
    programas, como Angular, React, Vue.js etc.
  - (2%) :star: **dividir o código** JavaScript em múltiplos arquivos por
    página em vez de fazer um único arquivão
    - (+2%) :star: usando o recurso de **módulos ES6** ([tutorial][tut-modules])
- **Sobre os _widgets_**:
  - (7%) **adição/configuração** de _widgets_ **na própria página do
    mundo virtual**
  - (5%) **arraste do mouse** para configurações de posição e tamanhos
  - (3%-??) novos tipos de _widget_
    - (5%) _widget_ de **áudio** - usuário pode passar um áudio (uma URL)
      que será exibido com seus controles em algum local (configurável)
      da página
    - (7%) _widget_ de **vídeo** - usuário pode passar um vídeo (uma URL)
      que será exibido com seus controles em algum local (configurável) da página
    - (6%) _widget_ de **plaquinha fincada no chão** - usuário configura um
      texto (ou, talvez, um HTML) que vai aparecer quando um visitante clica na
      plaquinha, dentro de uma janela modal

      ![Plaquinha de madeira que pode ser fincada no chão](images/sign-plaque.png)
    - (4%) _widget_ de **contador de visitas** - que pode ser posicionado pelo
      usuário e deve registrar em `localStorage` a quantidade de visitas
      recebidas (no TP2 isso será adaptado para persistir no banco de dados)
    - (4%) _widget_ de **imagem sozinha** - pra possibilitar o usuário colocar,
      posicionar e dimensionar elementos como uma árvorezinha, estrelas piscando
      no céu etc.
    - (5%) _widget_ de **condição do tempo** - mostrando a temperatura e clima
      (eg, sol, nublado, chuva) dentro do mundinho virtual - usuário pode
      definir qual é e o _widget_ deve mostrar um íconezinho e a temperatura
    - (3%) _widget_ de **_favicon_**
    - (2%+?? por cada) **novas _widgets_** propostas pelo grupo
- **Sobre o personagem**:
  - (4%) **salto** quando uma tecla é pressionada (e.g., <kbd>SPACE</kbd> ou
    <kbd>⬆️</kbd>)
  - Sobre animação de andar/saltar do personagem:
    - (2%) **animação com imagens `.gif` ou APNG** (verificar suporte dos
      navegadores no caniuse.com)
    - (4%) **animação com CSS sprites** (como o
      [incrível monstro verde][monstro-verde]) :star:
    - (10%) **animação em tempo de execução** usando algo como
      [Spriter][spriter] ([demo][spriter-demo]), [Spine][spine] ou
      [DragonBones][dragonbones]
  - (4-8%) **máquina de estados** do personagem para colocar um comportamento
    nele estilo um tamagotchi: pode ficar com fome, doente, com sono etc. Algo
    na interface precisa comunicar essa mudança de estado (eg, um balãozinho
    com um ícone). Também deve ser possível transitar de volta ao
    "estado normal" de alguma forma (eg, clicando no personagem/balão,
    ou, quem sabe, digitando um comando: "comer")
  - (4-10%) **interação do personagem com "o cenário"** - algumas _widgets_
    podem ser obstáculos, ou serem empurradas, ou ficarem meio transparentes
    quando o personagem passa por elas
- **Extras gerais**:
  - (2%) incluir o **Google Analytics** pra saber quem está visitando a página
  - (2-6% cada) **implementar APIs do HTML5** que façam sentido para a aplicação.
    Por exemplo:
    - **_Page visibility API_** pra detectar que a aba não está mais "à mostra"
    - **_Geolocatoin API_** pra detectar onde o usuário está no mundo real
      (poderia ter um _widget_ que usasse essa info, como a de clima/tempo)
    - **_Speech recognition API_** pra dar comandos de voz para o
      avatar (_e.g._, "comer!")
    - **_Canvas API_** para desenhar _e.g._ efeitos climáticos, ou o próprio
      personagem, usando JavaScript
  - (3-6% cada) **integrar a uma API de algum serviço** na web. Por exemplo:
    - (4%) :star: **previsão/condição atual do tempo** para uma localidade real,
      definida pelo usuário criador ou determinada com _geolocation API_ para o
      usuário visitante
      - (+6%) :star: **efeitos visuais**
    - (4%) **API de mapas** (Google maps, Bing maps, OpenStreetMaps etc.) para
      criar um _widget_ de mapa, por exemplo
    - (6%) **API do GitHub** pra mostrar os principais repositórios, ou as
      últimas atividades do usuário (um _widget_)

[tut-modules]: https://www.sitepoint.com/understanding-es6-modules/
[monstro-verde]: http://terrivel.herokuapp.com/monster
[spriter-demo]: https://cdn.rawgit.com/flyover/spriter.ts/master/demo/index.html
[spriter]: https://brashmonkey.com/
[spine]: http://pt.esotericsoftware.com/
[dragonbones]: http://dragonbones.com/en/index.html


## Trabalho Prático 2: _back-end_ (integrado ao _front-end_)

_Sendo redigido..._


<!-- - Extras
  - (3%) **envio de emails** para o usuário quando ele cadastra e em outras
    oportunidades importantes
  - (12%) um usuário vê o personagem do outro em tempo real, graças ao uso de :star:
    WebSockets
 -->

<!-- Como um religioso consumidor de jogos digitais multijogador _online_
competitivos, você se cansou de usar planilhinhas eletrônicas para
inscrever os participantes em campeonatos, sortear as partidas e
registrar os resultados.

Você acordou um dia extremamente empolgado e decidiu unir essa demanda
dos jogadores de _e-sports_ aos seus conhecimentos _web_, que adquiriu em um
curso por correspondência, para criar um sistemão para gerenciar campeonatos.

Reunindo um grupo de amigos jogadores de Dota/LoL, foi possível reunir o
seguinte conjunto de requisitos mínimos:

1. **Usuários** organizadores de campeonatos podem se registrar e logar
  - Pede-se ao menos os campos "nome de usuário" e "senha"/"confirmação"
1. Cada usuário pode criar um ou mais **campeonatos**
  - Campeonatos são criados com um nome e um conjunto de nomes de participantes
  - Campeonatos possuem partidas e funcionam como "mata-mata"
  - Apenas o usuário criador do campeonato pode alterá-lo
  - Qualquer usuário, mesmo sem estar logado, pode acessar um campeonato mas
    não pode editá-lo
1. As **partidas** são sorteadas aleatoriamente quando o campeonato é criado
  - Com as partidas montadas, passa a ser possível registrar a pontuação
    dos times
  - Quando uma partida tem sua pontuação registrada, o campeonato evolui:
    perdedores são eliminados e vencedores passam a integrar as partidas
    da fase seguinte
1. Campeonatos podem ser criados com número de participantes igual a
    uma potência de 2. Por exemplo:

| Participantes | Níveis de Partida | Qtde de Jogos |
|:-------------:|:-----------------:|:-------------:|
| 2             | 1                 | 1             |
| 4             | 2                 | 3             |
| 8             | 3                 | 7             |
| ...           | ...               | ...           |
| `n`           | `log_2(n)`        | `n - 1`       |

O sistema deve ter pelo menos algumas páginas listadas a seguir:
- **Inicial**, contendo:
  - descrição do sistema,
  - botão para registrar/logar,
  - imagem(ns) de eventos de e-sports,
  - logomarca,
  - lista com uma visão resumida dos 3 campeonatos mais recentes,
- De **registro/login** de usuário, com:
  - fluxo de sucesso (registro/login),
  - fluxos alternativos de senha incorreta e usuário inexistente,
  - redirecionamento para a lista de campeonatos do usuário,
- **Lista de campeonatos** do usuário, mostrando:
  - forma resumida dos campeonatos do usuário (nome, # de participantes,
    % concluído, vencedor, se houver)
  - botão para criar um novo campeonato.
- **Novo campeonato**, com:
  - campos com as propriedades do novo campeonato.
- **Um campeonato**, mostrando:
  - todos os participantes (pode ser uma lista),
  - todas as partidas (pode ser uma tabela com colunas: "time 1", "time 2",
    "fase", "pontuação time 1", "pontuação time 2"),
  - as pontuações das partidas, caso já tenham ocorrido,
  - o estado do campeonato (e.g., uma barra com a porcentagem de conclusão
    das partidas),
  - caso seja um campeonato do usuário logado, formas para editá-lo.
- Página de **erro do servidor** (erros com códigos 4xx e 5xx)
  - uma mensagem bem humorada de desculpa.

Além dos requisitos funcionais descritos, os seguintes requisitos
não-funcionais também fazem parte da especificação:

1. Bom tempo de resposta com o **uso de AJAX** para pelo menos 1 chamada a dados
  do banco
1. Persistência em **banco de dados**
1. **_Layout_ e _design_ agradáveis** - não precisa ser profissional, mas
  também não pode ter carinha de site da década de 90
  - Você deve ser o autor dos estilos usados no site - não é permitido
    o reaproveitamento de estilos de outros sites como temas, _templates_ etc.
1. A tecnologia de _back-end_ usada deve ser a mesma vista na matéria
1. Alguma funcionalidade do HTML5 deve ser implementada, e ela deve ser a mesma
  funcionalidade escolhida apra o seminário

## Funcionalidades Opcionais

O que foi descrito anteriormente do trabalho equivale a uma pontuação de 70%.
Para chegar a 100% (ou a mais e ganhar uns pontinhos extras, até o limite de
120%), você deve implementar também um conjunto de outras funcionalidades,
a saber:

- Página do campeonato com **partidas no "formato de chaves"** no estilo
  copa do mundo **(até 8%)**. Ideias:
  - Posicionar elementos das partidas com `position: relative/absolute;`
  - Usar uma biblioteca para desenhos como `d3.js`, `raphael.js` etc.
    ![Partidas distribuídas na página com o formato de chaves](images/formato-chaves.png)
- Atribuir **imagens aos participantes** dos campeonatos (_e.g._, as logos
  dos times) **(6%)**
- Usar um **_favicon_** **(3%)**
- Fazer as **páginas "responsivas"** **(até 5%)**
- **Animações e/ou transições** CSS **(até 4%)**
- **Remover a restrição** de número de participantes igual a uma
  potência de 2 **(7%)**
- Desenvolver no formato de **_Single Page Application_** usando **(até 12%)**
  algo como:
  - [Angular](http://angularjs.org/),
  - [React](https://facebook.github.io/react/),
  - [Backbone](http://backbone.org),
  - [Knockout](http://knockoutjs.com/), etc.
- Usar um **preprocessador CSS** **(até 5%)**
- Usar **_sprites_ CSS** para imagens pequenas **(até 4%)**
- Usar um serviço de **autenticação de terceiros** como Google, Facebook,
  Twitter, Github etc. **(até 8%)**
- Usar um **_task runner_** como Gulp, GruntJS, Broccoli etc. para:
  - "Minificar" os arquivos JS **(até 3%)**
  - "Minificar" os arquivos CSS **(até 3%)**
  - Reduzir tamanho de imagens **(até 3%)**
  - Outras coisas
- Usar um **carregador de módulos Javascript** AMD (RequireJS, YUI3),
  CommonJS (Browserify) ou ES6 **(até 8%)**
- Acesso aos dados do servidor exclusivamente por meio de um _web service_
  usando **arquitetura RESTful** **(até 7%)**

Você pode usar bibliotecas/_frameworks_ Javascript e CSS. Contudo, para usar as
listadas abaixo, você precisa pagar uns pontinhos:

- **jQuery** (-8%)
  - Plugin jQuery de terceiros (-2% cada)
- **Bootstrap/Foundation/Materialize** (e similares) (-8%) -->
<!--
## Entregas

O projeto será entregue em duas etapas, a saber:

1. Primeira entrega: _front-end_
  - Entregar: Páginas navegáveis, usando dados _mocked_
  - Data: daqui 16 dias (vide Moodle)
  - Pontuação: 15 pontos
1. Segunda entrega: _back-end_ + _front-end_
  - Entregar: código fonte final e _link_ para sistema publicado em
    servidor gratuito
  - Data: final do semestre (vide Moodle)
    - [Apresentação oral e demonstração](#apresentação)
  - Pontuação: 25 pontos (+extras)

## Apresentação

Devem ser entregues via Moodle:

- Link para o repositório com o código fonte da aplicação
- Link para o servidor onde a aplicação está hospedada
- Link para a apresentação de slides, se optar por ter uma
- Lista de itens opcionais implementados

**A apresentação** do trabalho deve ter, no máximo, 10 minutos e seguir este **roteiro**:

1. "Capa" com o nome do seu aplicativo e o grupo
1. Mostrar um diagrama com a arquitetura geral, contendo elementos como (1 min):
  - banco(s) de dados usados
  - como o banco de dados foi acessado (Mongoose? _driver do Mongo_?
    _web service_?)
  - tecnologias de _back-end_ usadas
  - tecnologias de _front-end_ usadas
1. Mostrar o arquivo `package.json` e comentar sobre os pacotes NPM usados (2 min)
1. Demonstrar a aplicação usando o servidor de hospedagem (7 min):
  - mostrar todos os itens obrigatórios implementados
  - mostrar os opcionais
1. Mostrar a lista de itens opcionais implementados -->

## Critérios de avaliação

O código do serviço Web será avaliado, dentre outros fatores, segundo:

1. **Aderência** da implementação dos elementos obrigatórios **à especificação**
1. **Separação de responsabilidades** (HTML -> estrutura, CSS -> apresentação,
   JS -> comportamento)
1. **Boas práticas de programação** tanto no cliente quanto no servidor
1. Utilização de **HTML5 e CSS3 válidos** e de compatibilidade entre os
   principais navegadores

## O que deve ser **entregue**

O trabalho deve ser entregue via GitHub ou BitBucket. Não se esqueça de fazer
vários e pequenos _commits_, que é uma importante boa prática em `git` e
também é interessante para demonstrar seu progresso. Todos os integrantes
do grupo devem participar (vou procurar a carinha de cada um nos _commits_ :).

Além do código do seu serviço Web, seu repositório deve conter também
um arquivo README.md em sua pasta raiz que descreva brevemente o que ele é
e contenha a lista de itens extras as quais está pleiteando.

Ao final do seu trabalho (do TP1 e do TP2), você deve submeter pelo Moodle
o link do seu repositório e o link do seu site hospedado.

### No TP1

Você pode usar o serviço [Github Pages][gh-pages] (se estiver usando o GitHub)
para hospedar seus arquivos. Senão, pode procurar algum serviço de
hospedagem gratuito.

[gh-pages]: https://pages.github.com/

### No TP2

Você deve usar um serviço de hospedagem gratuito para aplicações Node.js.
Abaixo, uma lista desses serviços que possuem um plano gratuito:

- [Heroku](https://www.heroku.com/) (Java, Grails, Node, Ruby)
- [Appfog](https://www.appfog.com/) (Java, Grails, Node, Ruby)
- [cloudno.de](http://cloudno.de/) (Node)


## Instruções gerais

O trabalho deve ser produzido integralmente pelo grupo. **Trabalhos muito
semelhantes receberão nota 0**, independente de quem copiou de quem.
Trabalhos semelhantes aos de outras pessoas (ex-alunos, pessoas na Internet)
também receberão nota 0.

### O que faz perder nota

Alguns descuidos podem fazer com que sua nota fique muito abaixo do esperado:
- Cópia de trabalho de outrem: nota 0
- Ausência de qualquer item obrigatório da entrega
- Ausência de itens da especificação obrigatória
- Baixa legibilidade do código
- Baixa qualidade da implementação
- Atraso na entrega. Cada dia de atraso reduz o valor máximo de nota da
  maneira abaixo. Considere `x` como dias de atraso e `y` a
  [penalidade percentual na nota][https://www.google.com.br/search?q=y%3D(2%5E(x-2)%2F0.16)%2Cy%3D100]:

 ![Fórmula de penalidade por atraso](../../images/penalidade-por-atraso.png)
 - Isso implica que 1 ou 2 dias de atraso são pouco penalizados
 - E após 5 dias de atraso, o trabalho vale 0

# Projeto - _Self-service_

![Um buffet de comidas self-service](images/buffet.png)

Neste trabalho você deve, sozinho, em duplas ou trio, ~~montar um prato de
comida de 1.000g~~ propor uma aplicação à sua escolha (i.e., _self-service_),
seguindo as opções disponíveis. Após aprovada pelo ~~nutricionista da casa~~ professor, você
deve ~~comer~~ implementar usando a plataforma Web como infraestrutura.

Para montar ~~seu prato~~ os requisitos da aplicação, você deve escolher uma
opção para cada pergunta a seguir:

- (até 150g) Opção de ~~carne~~ relevância:
  1. (100g) Relevância para:
     - a comunidade do CEFET ou
     - a sociedade em geral
  1. (100g) Inovação (criação de um produto)
     - Se esta for a escolha, você deve entregar uma [matriz SWOT][swot]
- (até 250g) Opção de ~~acompanhamento~~ característica de engajamento:
  1. (150g) Colaboratividade
     - O que um usuário faz impacta na visão do sistema de outro
  1. (150g) Gamificação
     - Uso de conceitos de jogos (níveis, recompensas, progressão)

[swot]: https://pt.wikipedia.org/wiki/An%C3%A1lise_SWOT

Independentemente do que seja escolhido, ~~seu prato~~ a aplicação web deve
conter ~~600g de arroz, feijão e batata frita~~ seguinte conjunto de requisitos, valendo 60% da nota:

1. Controle de usuários: criação de usuário, _login_/_logout_
1. Usuários podem "criar conteúdo" (ideia da Web 2.0)
1. **_Layout_ e _design_ agradáveis** - não precisa ser profissional, mas
 precisa ter uma identidade visual consistente e agradável (estilos, logo, favicon etc.)
1. Persistência em **banco de dados** no _back-end_
1. O _back-end_ deve ser escrito em Node.js
1. Deve-se usar o controle de versão Git hospedado em um local onde
   o professor tenha acesso de leitura
1. Disponibilização pública da aplicação (e.g., usando serviço de hospedagem gratuita)

A seguir estão listados algumas sugestões de ~~pratos~~ projetos:

- Sistema de incentivo à **doação de sangue**
  - Configuração do ~~prato~~ projeto:
    - Relevância para sociedade
    - Colaboração e Gamificação
  - Ideia: usuários vão ganhando pontos na medida em que doam sangue, divulgam que doaram e chamam amigos para o sistema - que está integrado a uma rede social
- Sistema para **submissão de TCCs**
  - Configuração:
    - Relevância para o DECOM
    - Colaboração
  - Ideia: coletar requisitos com a profa. Glivia
- **Lista de tarefas gamificada**
  - Configuração:
    - Inovação
      - Concorrentes: [Epic Win](https://play.google.com/store/apps/details?id=com.supermono.epicwin&hl=pt_BR), [Habitica](https://play.google.com/store/apps/details?id=com.habitrpg.android.habitica&hl=pt_BR)
    - Gamificação
  - Ideia: um aplicativo para gerenciamento de tarefas em que o usuário vai ganhando níveis e desbloqueando coisas, como em um jogo


## Funcionalidades Opcionais

Para chegar a 1.000g (ou até mais, limitado a 1.250g), você pode ~~colocar no prato~~ implementar também ~~um mix de saladinhas~~ um conjunto de outras funcionalidades,
a saber:

- (50g) Integrar o _login_/_sign up_ com redes sociais
- (50g) Fazer as **páginas "responsivas"**
- (120g) Desenvolver no formato de **_Single Page Application_** usando algo como:
  - [Angular](http://angularjs.org/),
  - [React](https://facebook.github.io/react/),
  - [Backbone](http://backbone.org) etc.
- (50g) Usar _efetivamente_ um **preprocessador CSS**
- (70g) Acesso aos dados do servidor exclusivamente por meio de um _web service_
  usando **arquitetura RESTful** **(até 7%)**
- (de 20g a 150g) Usar a API do HTML5 apresentada no seminário de forma interessante
- (de 50g a 200g) Uma funcionalidade que vai muito além de um CRUD
- (150g) Gerar um aplicativo híbrido para _smartphones_ (usando _e.g._, [Ionic](http://ionicframework.com/))
- (120g) Fazer um aplicativo nativo _desktop_ (usando _e.g._, [Electron](https://github.com/electron/electron) ou [NW.js](https://nwjs.io/))
- (150g) Fazer o trabalho sozinho

## Entregas

O projeto será entregue em três etapas, a saber:

1. Entrega 0:
   - Entregar: [descrição de elevador](https://en.wikipedia.org/wiki/Elevator_pitch) (e [matriz SWOT][swot], se for produto inovador)
   - Data: daqui 2 aulas
   - Valor: 5 pontos
1. Primeira entrega: _front-end_
   - Entregar: Páginas navegáveis, usando dados _hard-coded_
   - Data: daqui ~3 semanas (vide Moodle)
   - Valor: 12 pontos
1. Segunda entrega: _back-end_ + _front-end_
   - Entregar: código fonte final e _link_ para sistema publicado em
     servidor gratuito
   - Data: final do semestre (vide Moodle)
     - [Apresentação oral e demonstração](#apresentação)
   - Valor: 20 pontos


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
1. Mostrar a lista de itens opcionais implementados


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
- Atraso na entrega. Cada dia de atraso reduz o valor máximo de nota da
 maneira abaixo. Considere `x` como dias de atraso e `y` a penalidade
 percentual na nota:

 ![Fórmula de penalidade por atraso](../../images/penalidade-por-atraso.png)
 - Isso implica que 1 ou 2 dias de atraso são pouco penalizados
 - E após 5 dias de atraso, o trabalho vale 0
 - _Seeing is believing_: https://www.google.com.br/search?q=y%3D(2%5E(x-2)%2F0.16)%2Cy%3D100

Obs: no caso da última entrega (com apresentação), não é permitido entregar depois do dia da apresentação.

## O que deve ser **entregue**

O trabalho deve ser entregue via GitHub ou BitBucket. Não se esqueça de fazer vários e
pequenos _commits_, que é uma importante boa prática em `git` e também é
interessante para demonstrar seu progresso. **Todos os integrantes do grupo
devem participar** (vou procurar a carinha de cada um nos _commits_ :).

Além do código do seu serviço Web, seu repositório deve conter também
um arquivo README.md em sua pasta raiz que descreva brevemente o que ele é
e contenha a lista de itens extras (ou penalidades) as quais está pleiteando.

Você deve usar um serviço de hospedagem gratuito para a avaliação do seu
trabalho. Abaixo, uma lista desses serviços que possuem um plano gratuito:

- [Cyclic](https://cyclic.sh/) (Node)
- [Appfog](https://www.appfog.com/) (Java, Grails, Node, Ruby)
- [cloudno.de](http://cloudno.de/) (Node)

Se você não conhecer serviços gratuitos que atendam às necessidades do seu
projeto, converse com o professor.

Ao final do seu trabalho, você deve submeter pelo Moodle o link do seu
repositório e o link do seu site hospedado.

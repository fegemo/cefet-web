# TP2 - Programação Web Empreendimentos SA

Você acordou um dia sentindo-se um empreendedor nato e se juntou a outro (1)
colega para desenvolver um novo serviço Web revolucionário e, de quebra, ficar
rico.

Como você se lembra do curso de programação Web via correspondência que fez,
o serviço Web que você vai criar deve possuir os seguintes elementos:

1. Pelo menos 3 páginas diferentes
1. As páginas devem ter conteúdo dinâmico
1. Persistência de dados no servidor (banco de dados ou arquivos)
1. Chamadas AJAX para recuperação de dados ou atualização de trechos da página
1. Autenticação de usuário
1. _Layout_ e _design_ agradáveis - não precisa ser profissional, mas também não
  pode ter carinha de site da década de 90

Esse novo serviço que você vai criar deve ser um dos listados abaixo:

- Um loja de e-commerce que venda gelo para eskimó
- Um ambiente virtual de aprendizagem (AVA) que vá substituir o Moodle
- Um sistema de blogs para desbancar o Wordpress
- Um portal de notícias forjadas
- Um sistema de gerenciamento de tarefas a serem procrastinadas

Você também pode propor outra alternativa para o professor, mas faça isso o
quanto antes para que haja tempo de desenvolver.

## Funcionalidade extra

O que foi descrito anteriormente do trabalho equivale a uma pontuação de 80%.
Para chegar a 100% (ou a mais e ganhar uns pontinhos extras), você deve
implementar também um conjunto de outras funcionalidades, a saber:

- Solicitar e utilizar a localização do usuário para algum propósito (5%)
- Usar o armazenamento local e/ou de sessão (_Web Storage_) (7%)
- Fazer as páginas "responsivas" (5%)
- Animações e/ou transições CSS (5%)
- Acessibilidade (5-10%)
- Desenvolver uma _Single Page Application_ usando (15%)
  - [Backbone](http://backbone.org)
  - [Angular](http://backbone.org)
  - [Knockout](http://backbone.org)
  - [Ember](http://backbone.org)
  - [Durandal](http://backbone.org), etc
- Incluir audio/video (sem ser `iframe`) (5%)
- Usar um preprocessador CSS (7%)
- Usar _sprites_ CSS para imagens pequenas (5%)
- Usar um serviço de autenticação como Google, Facebook, Twitter, Github etc.
  (8%)
- Usar um _task runner_ como GruntJS, Gulp, Broccoli etc. para
  - "Minificar" os arquivos CSS e JS (3%)
  - Reduzir tamanho de imagens (3%)
  - Gerar CSS _sprites_ automaticamente (3%)
- Usar um carregador de módulos Javascript AMD (RequireJS, YUI3) ou CommonJS (
  Browserify) (8%)
- _Drag'n'Drop_ (7%)
- _Upload_ de arquivos (5%)
- Integrar a uma API existente, e.g., Google Analytics, Google Maps, Facebook,
  Google+ etc. (1-10%)

Você pode usar bibliotecas/frameworks Javascript e CSS. Contudo, para usar as
listadas abaixo, você precisa pagar uns pontinhos:

- jQuery (-8%)
  - Plugin jQuery de terceiros (-2% cada)
- Bootstrap/Foundation/Nib (-8%)


## Critérios de avaliação

O código do serviço Web será avaliado, dentre outros fatores, segundo:

1. Aderência da implementação dos elementos obrigatórios à especificação
1. Separação de responsabilidades (HTML -> estrutura, CSS -> apresentação, JS
    -> comportamento)
1. Boas práticas de programação tanto no cliente quanto no servidor
1. Utilização de HTML5 e CSS3 válidos

## Entrega

O trabalho deve ser realizado em grupo e deve ser entregue via GitHub, em um
repositório com o nome `web-projeto`. Não se esqueça de fazer vários e
pequenos _commits_, que é uma importante boa prática em `git` e também é
interessante para demonstrar seu progresso.

Além do código do seu serviço Web, seu repositório deve conter também um arquivo
 README.md em sua pasta raiz que descreva brevemente o que ele é, como utilizá-
lo, o nome de seus criadores e quais elementos extras foram implementados.

Você deve usar um serviço de hospedagem gratuito para a avaliação do seu
trabalho. Abaixo, uma lista desses serviços que possuem um plano gratuito:

- [Heroku](https://www.heroku.com/) (Java, Grails, Node, Ruby)
- [Appfog](https://www.appfog.com/) (Java, Grails, Node, Ruby)
- [Openshift](https://www.openshift.com/) (Java, Grails)
- [cloudno.de](http://cloudno.de/) (Node)


Se você não conhecer serviços gratuitos que atendam às necessidades do seu
projeto, converse com o professor.

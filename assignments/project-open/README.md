# Projeto de Web

Em grupo, você e +4 (no máximo) resolvem que seria legal abrir uma startup e lançar um novo produto no mercado para ficar 🌽nário. Como você quer alcançar um grande público, optou por uma aplicação Web.

O produto a ser desenvolvido deve envolver a (a) gestão de usuários e alguma forma de (b) criação de conteúdo por eles, de forma que quando estejam "logados", cada um tenha "a sua versão" do sistema. A tecnologia de _back-end_ deve ser a mesma vista em sala de aula, mas com liberdade para a escolha de banco de dados e de arquitetura _front_/_back-end_.

A (a) gestão de usuários não precisa ter um CRUD completo, mas deve possibilitar usuários se cadastrarem (registrando senha ou via autenticação de terceiros) e se autenticarem posteriormente. Além da autenticação, deve haver autorização para que um usuário não seja capaz de alterar conteúdo para o qual ele não tem permissão. Outras questões podem ser implementadas como itens extras. As senhas devem ser persistidas no banco usando algum algoritmo de criptografia de via única.

Quanto à (b) geração de conteúdo por parte dos usuários, ela deve possibilitar que eles tenham uma experiência própria ao usar o site. Por exemplo, uma loja cuja página inicial mostra itens personalizados de categorias de onde ele pode escolher quando está logado, mas que também permita o usuário avaliar e fazer comentários sobre produtos (e ver os dos outros). Ou então uma aplicação que possibilita o usuário criar seu próprio portfolio, postando imagens, vídeos e personalizando a página para que possa compartilhar sua URL com outras pessoas. Ou então um gerenciador de coisas (jogos? livros? filmes? músicas?) que permita o usuário registrar, avaliar, ordenar e interagir com essas coisas de formas diferentes, possivelmente integrado a um serviço de 3ºs (como [API do Steam][steam], [API do Spotify][spotify], [API do LoL][lol], do IMDB...). Outro exemplo é criar um jogo, não necessariamente usando renderização em tempo real como se vê nas disciplinas de CG ou Jogos, mas algo que envolva a gestão de recursos ao longo do tempo e a interação de jogadores (desafiando ou colaborando), como no [Tribal Wars][tribal-wars] (antigão) ou o [IdleScape][idlescape] (2019). **Independente da aplicação**, o usuário deve ter um link que mostre seus dados gerados dentro do sistema: na loja, uma página com "todas as reviews que fez e as categorias de produtos preferidas"; no gerador de portfolios, o seu próprio portfólio; na lista de coisas, o perfil; no jogo, a "vila" do jogador com algumas estatísticas.

A aparência da aplicação deve ser bem atrativa (design) e não pode ter uma disposição (layout) muito simples. Misture as duas dimensões, valorizando o que é mais importante e distribuindo conteúdo colateral para lugares menos nobres da página. Um _baseline_ de design/layout para seguirem é o Blog Assombrado 👻.

As funcionalidades supracitadas, se devidamente implementadas, serão avaliadas qualitativamente quanto à qualidade do resultado e do esforço, podendo chegar até 70% da nota do projeto. Para atingir mais (até um limite de 150%), você pode escolher itens opcionais da seguinte lista:


- Gestão de usuários:
  1. [ ] (4%) Receber e-mail ao se cadastrar
  1. [ ] (3%) Fluxo de "esqueci minha senha"
  1. [ ] (5%) Integração com autenticação por 3ºs
  1. [ ] (3-7%) Possibilidade de alterar dados do perfil
  1. [ ] (5%) Autenticação de 2 fatores
- Engenharia de Software:
  1. [ ] (1-10%) Testes automatizados
  1. [ ] (2-6%) Processo de _build_ para _assets_ do _front-end_:
     - [ ] Minimizar arquivos CSS e JS
     - [ ] Eliminação de código morto JS
     - [ ] Otimização de imagens
     - [ ] Pré-processamento de CSS e JS
  1. [ ] (5%) Integração contínua durante o desenvolvimento (_build_ + teste + _deploy_)
  1. [ ] (5%) Uso de _containers_ (eg Docker) para isolar ambientes e torná-los facilmente reprodutíveis
  1. [ ] (5%) Descrição histórias de usuário
     - [ ] (+5%) Uso de _pull requests_ (PRs) para cada história
       - [ ] (+5%) _Code review_ de todos os PRs
- Integração:
  1. [ ] (5-10%) APIs de terceiros para fornecer dados do usuário (eg, biblioteca de jogos no Steam, músicas do usuário no Spotify)
  1. [ ] (3-7%) APIs "cosméticas" (eg, previsão do tempo para fazer algum efeitinho)
  1. [ ] (6%) APIs de serviço de hospedagem (eg, da AWS para armazenar fotos enviadas por usuários)
- Inteligência:
  1. [ ] (5-13%) Alguma inteligência além de um CRUD. Exemplos:
     - Algoritmos de recuperação da informação
     - Algoritmos de aprendizado de máquina
     - Algoritmos de alocação de recursos/tarefas, _match-making_, problema da mochila, determinação de caminhos...
     - Algoritmos de computação gráfica _off-line_ (eg, _ray tracing_)
- _Back-end_:
  1. [ ] (4%) Agendamento de funções do _back-end_ para executar de tempos em tempos (eg, processar o ataque do reino de um jogador a outro)
  1. [ ] (5-9%) Uso de uma fila para execução de tarefas com duração maior
  1. [ ] (6%) Propagação de atualização do _back-end_ para o _front-end_ (eg, usando Web Sockets diretamente ou alguns bancos NoSQL reativos)
  1. [ ] (3%) Camada de dados RESTful
  1. [ ] (6%) Camada de dados GraphQL
  1. [ ] (5%) _Upload_ de arquivos
- _Front-end_:
  1. [ ] (7%) Todas as páginas _responsive_
  1. [ ] (3%) Modo escuro
  1. [ ] (2-5%) Animações, transições e efeitos visuais diversos (onde fizer sentido)
     - [ ] (2%) Modo com menos animações
  1. [ ] (2%) Modo de impressão (se fizer sentido)
  1. [ ] (5%) Organização em componentes
  1. [ ] (3-10%) Uso de APIs do HTML5 (vide seminário)
  1. [ ] (2-10%) Interatividade para melhorar a experiência de uso (eg, a [Ovelhita][ovelhas] na página das ovelhas)


O desenvolvimento deve ser feito acompanhado de controle de versões, em especial o Git, com repositório hospedado no Github (ou outro). O repositório não precisa ser público, mas o professor deve receber acesso. É requisito obrigatório que o trabalho seja feito ao longo do tempo de forma que o professor possa acompanhar os _commits_. Entregar um software pronto, com poucos _commits_ e apenas ao final resultará no zeramento do trabalho. A entrega, descrita a seguir, será dividida em etapas e a pontuação extra se aplica apenas à última. 


[steam]: https://steamcommunity.com/dev?l=portuguese
[spotify]: https://developer.spotify.com/documentation/web-api/
[lol]: https://developer.riotgames.com/
[tribal-wars]: https://www.tribalwars.com.br/
[idlescape]: https://idlescape.com/
[ovelhas]: https://fegemo.github.io/cefet-web-ovelhas/racas-raras.html


## Entregas

O projeto será entregue em 3 etapas, a saber:

1. Primeira entrega:
   - Entregável: [descrição de elevador](https://en.wikipedia.org/wiki/Elevator_pitch) e protótipo "em papel" (ou usando algum software) das principais telas do sistema (eg, não precisa da tela de cadastro/login porque elas são "arroz com feijão")
   - Onde: fórum no SIGAA
   - Data: daqui ~2 semanas (vide SIGAA)
   - Avaliação: entregável completo, bem descrito e dentro do prazo
   - Valor: 7 pontos
1. Segunda entrega: _front-end_
   - Entregável: URL do(s) repositório(s) contendo todas as páginas mas usando dados _mocked_ (se o _back-end_ for feito em outro repositório, entregar sua URL também)
   - Data: daqui ~4 semanas (vide SIGAA)
   - Valor: 13 pontos
   - Avaliação: entregável completo já com a maior parte dos opcionais de _front-end_ (mas seus extras serão pontuados só na última)
1. Entrega final: _back-end_ + _front-end_
   - Entregável: (a) _link_ para sistema publicado em servidor gratuito, (b) lista de itens opcionais implementados
   - Data: final do semestre (vide SIGAA)
     - [Apresentação oral e demonstração](#apresentação)
   - Valor: 30 pontos


## Instruções gerais

O trabalho deve ser produzido integralmente pelo grupo. **Trabalhos muito
semelhantes receberão nota 0**, independente de quem copiou de quem.
Trabalhos semelhantes aos de outras pessoas (ex-alunos, pessoas na Internet)
também receberão nota 0.


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

- [Heroku](https://www.heroku.com/) (Java, Grails, Node, Ruby)
- [Appfog](https://www.appfog.com/) (Java, Grails, Node, Ruby)
- [cloudno.de](http://cloudno.de/) (Node)

Se você não conhecer serviços gratuitos que atendam às necessidades do seu
projeto, converse com o professor.


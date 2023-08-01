<h1 align="center">Módulo 2 🎓 Projeto Avaliativo </h1>
<p align="center">Curso Lab365 - SESI SENAI - Projeto Floripa Mais Tec<p/>

![banner git - projeto avaliativo modulo2](https://github.com/DeiseFAS/ProjetoAvaliativoModulo2/assets/71991444/355b92be-f083-4d61-91fb-78fd5cc6fe71)

<p align="center"> Aplicação Front-End do software que intitulei de MEDIFACIL. Aplicação que foi construída utilizando a biblioteca React.</p>

# Índice 

* [Roteiro da aplicação](#roteiro-da-aplicação)
* [Requisitos da aplicação](#requisitos-da-aplicação)
* [Técnicas e padrões utilizadas](#técnicas-e-padrões-utilizadas)
* [Instalação e execução](#instalação-e-execução)
* [Dependências](#dependências)
* [Formato do Sistema ](#formato-do-sistema)
* [Layout](#layout)
* [Organização](#organização-para-o-desenvolvimento-do-projeto)
* [Melhorias](#melhorias)
* [Aprendizado](#aprendizado)
* [Autor](#autor)
* [Agradecimentos](#agradecimentos)

# Roteiro da aplicação

A MEDIFACIL LTDA, deseja gerenciar o inventário médico de hospitais e postos de saúde, através de um sistema de gestão.


# Requisitos da aplicação

Para o desenvolvimento dessa aplicação foram seguidos os seguintes requisitos:

- O sistema foi desenvolvido utilizando a biblioteca React.
- O layout da aplicação foi modelado com os formatos, tipografias, cores e organização de layout que achei mais adequado, seguindo como base a estrutura dada como exemplo no escopo do projeto.
- Usei Css puro e styled-component para estilização do layout.
- Utilizei o modelo Kanban na ferramenta Trello;

# Técnicas e padrões utilizadas

O projeto foi dividido em uma estrutura de hierarquia de pastas, de forma padronizada para melhor organização. Levando em consideração que uma boa organização é fundamental para a facilidade de navegação, escalabilidade já que, acreditando que o projeto possa vir a crescer de forma mais estruturada e gerenciável, facilita a manutenção, evolução e adição de novas funcionalidades.
A boa organização também contribui para o reaproveitamento de código, testabilidade e manutenção. Por isso sugiro que, caso opte por clonar e queira prosseguir com esse projeto, dê continuidade ao padrão já estabelecido.


# Instalação e execução

Instale esse projeto usando o comando npm e clonando [Projeto Avaliativo](https://github.com/DeiseFAS/ProjetoAvaliativoModulo2) .
Caso tenha duvidas de como clonar um repositório, siga as intruções do proprio GitHub através deste link [clonar um repositório](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository).


```bash
  npm install ProjetoAvaliativoModulo2
  cd ProjetoAvaliativoModulo2
```


# Dependências

As dependências utilizadas nessa aplicação serão instaladas automaticamente quando der o comando "npm install", logo depois de clonar o projeto. Conforme é detalhado no topico Instalação dessa documentação.

Embora não seja necessária a instalação individual de cada uma das dependencias, conforme citado no paragrafo anterior, é importante que você saiba quais são as principais e pelo que são responsáveis.

| Dependência | Versão | Uso |
| ------ | ------ | ------ |
| "react" | ^18.2.0 | Biblioteca JavaScript |


# Formato do sistema

Aplicação foi construída utilizando a biblioteca React:
- Utilizei roteamento para gerenciamento de páginas.
- Foi gerenciado o estado global quando necessário.
- Foi utilizado animações de loading e transições entre páginas.
- Foi utilizado consumo da API ViaCEP para cadastro de endereço.
- Foi utilizado favicon, título de página e demais assets.
- Foi utilizado o JSON Server para guardar as informações cadastradas.
- Foi utilizado o GitHub como versionador de código:
- Foi utilizado do padrão baseado em GitFlow com main, features e releases.
- Foi utilizado commits curtos e concisos.

# Layout

Como tivemos a liberdade para batizar a aplicação, o Layout foi pensado para seguir o ínicio de uma identidade visual criada lá no projeto do módulo1, uando o mesmo nome e logo criados por mim. 
A estrutura no entanto, segui o exemplo fornecido no escopo do projeto.

logo

![logop-git](https://github.com/DeiseFAS/ProjetoAvaliativoModulo2/assets/71991444/934ab077-a49b-499e-81e7-b27cbd8e8a56)


# Organização para o desenvolvimento do projeto

Foi criado um quadro no Trello para organizar as tarefas de criação do projeto. Utilizei, mais uma vez o modelo Kanban com as seguintes listas:
Backlog, To-Do, Doing, Blocked, Review e Done.

Foram criadas todas as tarefas necessárias ao desenvolvimento do projeto, fazendo uso de etiquetas/tags, checklists e prazos para ajudar na organização das tarefas.

Na imagem abaixo é possivel ver a organização do quadro na primeira semana e o exemplo da estrutura de um card. com etiquetas e checklist utilizado.

![trello-modulo2](https://github.com/DeiseFAS/ProjetoAvaliativoModulo2/assets/71991444/85cb6962-761a-407f-b2ec-51401dbaa8ac)

# Melhorias

O projeto pode ser considerado um MVP, minimo produto viável. Logo muitas melhorias se fazem necessárias, listarei algumas.
- Segurança, não a niveis de acesso
- Acessibilidade, não foi feito o uso de todos os recursos existentes hoje para uma melhor acessibilidade.


# Aprendizado

Com o desenvolviento desse projeto pude experimentar as "dores e delicias" de fazer uma aplicação do começo ao fim. Tive a oportunidade de fortalecer conceitos de programação, a raiva e satisfação de resolver os bugs (que eu mesmo criei por erro de lógica), vivenciei o desespero inicial de achar que não conseguiria concluir o projeto a tempo e a alegria de ver o resultado de cada teste rodando como o esperado. Quero aproveitar para registrar que "na minha máquina está tudo funcionando" rsrsrsrs Obrigada ao Prof Robert Santos pela paciência e forma generosa de ensinar. Como pontos importantes de aprendizado, destaco ainda:

- Versionamento: O que é versionamento de código, aplicações e utilização no Github.
- HTML e CSS: HTML5 (elementos semânticos) e CSS (seletores, principais estilos, layouts e flexbox).
- JavaScript: Variáveis, Tipos de Dados, Estrutura de Controle de Fluxo (condicional e repetição), Operadores (aritméticos, lógicos e relacionais), Funções, ES6+, Escopo, Arrow Functions, Operadores Rest e Spread, Funções de Arrays, Manipulação do DOM, Utilização de Seletores, Eventos, Classes, Atributos, Encapsulamento, Herança, Polimorfismo, Módulos, Funções Assíncronas, JSON, LocalStorage, Interval e Timeout.
- React: React básico, Renderização de Componentes, Props, Prop Types, Hooks Principais (useState, useEffect e useRef), eventos, renderização de listas, Hooks Avançados (useReducer e useContext), React Router, Formulários, Prop Drilling, Composition, Estilos (Styled Components e Bootstrap), Developer Tools e Deploy.
- Skills: aperfeiçoamento da minha forma de organização, criação de documentação, apresentação de solução e a pedir ajuda quando necessário.

# Autor

Esse projeto foi desenvolvido por: Deise F A S.

Mentor: Robert Santos

# Agradecimentos

     ------------- em breve -------------

<<<<<<< HEAD
REPOSITÓRIO EM ATUALIZAÇÃO.
=======


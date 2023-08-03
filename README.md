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
* [Demonstração do sistema funcionando](#demonstração-do-sistema-funcionando)
* [Layout](#layout)
* [Organização](#organização-para-o-desenvolvimento-do-projeto)
* [Melhorias](#melhorias)
* [Aprendizado](#aprendizado)
* [Autor](#autor)
* [Agradecimentos](#agradecimentos)
* [Extra](#extra)

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
  cd ProjetoAvaliativoModulo2
  npm install ProjetoAvaliativoModulo2
```

Em seguida use o comando abaixo para iniciar o projeto

```bash
  npm run dev
```
Nesse projeto fizemos o uso do JSON Server  que é uma ferramenta que simula um servidor de API RESTful com base em um arquivo JSON. Ele permite criar rapidamente uma API fictícia para testar e desenvolver sistemas sem a necessidade de um servidor real.

Entre na pasta server conforme demonstrado abaixo e instale o JSON Server no projeto executando o seguinte comando:

```bash
  cd src/
  cd src/server
  json-server --watch db.json
```



# Dependências

As dependências utilizadas nessa aplicação serão instaladas automaticamente quando usado o comando "npm install", logo depois de clonar o projeto. Conforme é detalhado no topico Instalação dessa documentação.

Embora não seja necessária a instalação individual de cada uma das dependencias, conforme citado no paragrafo anterior, é importante que você saiba quais são as principais e pelo que são responsáveis.

| Dependência | Versão | Uso |
| ------ | ------ | ------ |
| "axios" | ^1.4.0 | O Axios é uma biblioteca JavaScript que permite fazer requisições HTTP para servidores. É muito utilizado para realizar operações como buscar, enviar, atualizar e excluir dados de APIs e servidores. |
| "json-server" | ^0.17.3 | O JSON Server cria uma API RESTful falsa a partir de um arquivo JSON contendo dados simulados. Esses dados podem ser consultados, criados, atualizados e excluídos usando as rotas e métodos HTTP padrão. |
| "react" | ^18.2.0 | O React é uma biblioteca JavaScript para construção de interfaces de usuário. Ele permite criar componentes reutilizáveis, que atualizam automaticamente quando há mudanças nos dados. |
| "react-dom" | ^18.2.0 | O React-DOM é um pacote que facilita a integração do React com o DOM do navegador. Ele é responsável por renderizar os componentes React na página web. |
| "react-icons" | ^4.10.1 | O React-Icons é uma biblioteca que fornece um conjunto de ícones populares. Com ele, você pode facilmente incluir ícones em sua aplicação React sem a necessidade de imagens ou fontes adicionais. |
| "react-input-mask" | ^2.0.4 | O React-Input-Mask é uma biblioteca que permite aplicar máscaras a campos de entrada de texto. Com ele, é possível formatar e validar automaticamente campos como números de telefone, CPF, datas, entre outros. |
| "react-router-dom" | ^6.14.1 | O React-Router-DOM é uma biblioteca que oferece roteamento para aplicações React baseadas em navegadores. Ele permite criar rotas que correspondem a diferentes componentes e gerenciar a navegação entre páginas. |
| "react-toastify" | ^9.1.3 | O React-Toastify é uma biblioteca para exibir notificações e mensagens temporárias na interface do usuário.É útil para exibir mensagens de sucesso, erro ou outras informações importantes para o usuário. |
| "styled-components" | ^6.0.4 | O Styled-Components é uma biblioteca que permite escrever estilos CSS diretamente nos componentes React.Com ele, você pode criar estilos específicos para cada componente, tornando o código mais modular e reutilizável. |


DevDependencies são as dependências que são necessárias apenas durante o desenvolvimento do projeto, não sendo essenciais para o funcionamento da aplicação em ambiente de produção. Elas incluem ferramentas de desenvolvimento, bibliotecas de tipagem, plugins de linting e outras ferramentas de suporte ao desenvolvimento.


| DevDependência | Versão | Uso |
| ------ | ------ | ------ |
| "@types/react" | "^18.2.14" | Fornece tipos TypeScript para a biblioteca React, permitindo que o TypeScript verifique o código em relação ao React e suas props. |
| "@types/react-dom" | "^18.2.6" | Fornece tipos TypeScript para a biblioteca ReactDOM, permitindo que o TypeScript verifique o código em relação ao ReactDOM e suas funcionalidades. |
| "@vitejs/plugin-react" | "^4.0.1" | Plugin oficial para o Vite.js que permite a integração e configuração fácil do React no ambiente de desenvolvimento. |
| "eslint" | "^8.44.0" | Ferramenta de linting que ajuda a manter um código JavaScript ou TypeScript consistente e sem erros de estilo. |
| "eslint-plugin-react" | "^7.32.2" | Plugin do ESLint para regras específicas do React, garantindo boas práticas e padrões recomendados ao escrever código React. |
| "eslint-plugin-react-hooks" | "^4.6.0" | Plugin do ESLint que adiciona regras para verificar o uso correto dos Hooks do React. |
| "eslint-plugin-react-refresh" | "^0.4.1" | Plugin do ESLint que ajuda a manter a consistência entre o Fast Refresh e o ESLint durante o desenvolvimento com React. |
| "prop-types" | "^15.8.1" | Biblioteca utilizada para verificar as propriedades (props) passadas para componentes React, ajudando a garantir que os dados esperados sejam passados corretamente. |
| "vite" | "^4.4.0" | Vite.js é uma estrutura de desenvolvimento rápido que permite um desenvolvimento rápido e eficiente de aplicações web modernas. Essa dependência é usada no ambiente de desenvolvimento. |


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

# Demonstração do sistema funcionando

Gravei uma breve demonstração do funcionamento do sistema e postei no youtube. <br>
Segue o link:

https://youtu.be/Vued-6A8PHY 

# Layout

![image](https://github.com/DeiseFAS/ProjetoAvaliativoModulo2/assets/71991444/19db0327-6001-4731-af2c-b483a8a36d02)


Como tivemos a liberdade para batizar a aplicação, o Layout foi pensado para seguir o ínicio de uma identidade visual criada lá no projeto do módulo1, uando o mesmo nome e logo criados por mim. 
A estrutura no entanto, segui o exemplo fornecido no escopo do projeto.

## Desenvolvimento e criação

![design](https://github.com/DeiseFAS/ProjetoAvaliativoModulo2/assets/71991444/e8e5cb61-d8c8-48ca-ae3d-0623d6506a53)

| N.º | Descrição | uso na aplicação |
| ------ | ------ | ------ |
| 1 | Gradiente | usado no bacgroud de fundo na pagina de login | 
| 2 | Paleta escolhida | batizada de acqua, foi usada em toda a identidade visual | 
| 3 | Variações da logo | foram necessarias algumas alterações para esse projeto na inteção de tornala mais "amigavel" | 
| 4 | Imagem para tela de login | inclui um personagem, tbm na intenção de tornar a marca mais amigavel | 

As cores pensadas para a aplicação, foi com base ao que é familiar ao usuário quando se trata de ambientes voltados aos cuidados da saúde.
A escolha de tons claros e verdes em ambientes hospitalares é influenciada por várias razões, sendo algumas das principais:
Sensação de calma e tranquilidade,
Efeito terapêutico,
Sensação de limpeza e higiene,
Melhora da iluminação,
Facilitação da leitura de informações, e até em Aspectos psicológicos: Estudos mostram que cores claras e verdes têm um impacto positivo na mente das pessoas, promovendo uma sensação de segurança, equilíbrio e bem-estar.


# Organização para o desenvolvimento do projeto

Foi criado um quadro no Trello para organizar as tarefas de criação do projeto. Utilizei, mais uma vez o modelo Kanban com as seguintes listas:
Backlog, To-Do, Doing, Blocked, Review e Done.

Foram criadas todas as tarefas necessárias ao desenvolvimento do projeto, fazendo uso de etiquetas/tags, checklists e prazos para ajudar na organização das tarefas.

Na imagem abaixo é possivel ver a organização do quadro na primeira semana e o exemplo da estrutura de um card. com etiquetas e checklist utilizado.

![trello-modulo2](https://github.com/DeiseFAS/ProjetoAvaliativoModulo2/assets/71991444/85cb6962-761a-407f-b2ec-51401dbaa8ac)

# Melhorias

O projeto pode ser considerado um MVP, minimo produto viável. 
Logo muitas melhorias se fazem necessárias, listarei algumas que considero mais urgentes:

- Segurança, não a niveis de acesso
- Acessibilidade, não foi feito o uso de todos os recursos existentes hoje para uma melhor acessibilidade.
- Contraste em algumas partes do layout
- A inclusão de alguns alertas ( principalmente antes de excluir um arquivo )

# Aprendizado

Com o desenvolviento desse projeto pude experimentar as "dores e delicias" de fazer uma aplicação do começo ao fim. Tive a oportunidade de fortalecer conceitos de programação, a raiva e satisfação de resolver os bugs (que eu mesmo criei por erro de lógica), vivenciei o desespero inicial de achar que não conseguiria concluir o projeto a tempo e a alegria de ver o resultado de cada teste rodando como o esperado. Quero aproveitar para registrar que "na minha máquina está tudo funcionando" rsrsrsrs Obrigada ao Prof Robert Santos pela paciência e forma generosa de ensinar. Como pontos importantes de aprendizado, destaco ainda:

- Versionamento: O que é versionamento de código, aplicações e utilização no Github.
- HTML e CSS: HTML5 (elementos semânticos) e CSS (seletores, principais estilos, layouts e flexbox).
- JavaScript: Variáveis, Tipos de Dados, Estrutura de Controle de Fluxo (condicional e repetição), Operadores (aritméticos, lógicos e relacionais), Funções, ES6+, Escopo, Arrow Functions, Operadores Rest e Spread, Funções de Arrays, Manipulação do DOM, Utilização de Seletores, Eventos, Classes, Atributos, Encapsulamento, Herança, Polimorfismo, Módulos, Funções Assíncronas, JSON, LocalStorage, Interval e Timeout.
- React: React básico, Renderização de Componentes, Props, Prop Types, Hooks Principais (useState, useEffect e useRef), eventos, renderização de listas, Hooks Avançados (useReducer e useContext), React Router, Formulários, Prop Drilling, Composition, Estilos (Styled Components e Bootstrap), Developer Tools e Deploy.
- Skills: aperfeiçoamento da minha forma de organização, criação de documentação, apresentação de solução e a pedir ajuda quando necessário.

# Autor

Esse projeto foi desenvolvido por: Deise F A S.

Mentor Queridão: Robert Santos

# Agradecimentos

     ------------- em breve -------------

# Extra

Nesse projeto resolvi experimentar uma animação, por se tratar de uma aplicação para area de saúde o sistema deveria ser o mais simples, rápido e facil de usar, além de ter um layout leve. Então tinha muito espaço para explorar, então usei a página animada na rota de erro 404. Acreditando em alguns pontos:

- Atratividade visual: Uma página de erro animada pode chamar mais a atenção do usuário e tornar a experiência de erro menos frustrante. Optei por uma animação divertida, tornando o momento de erro menos desagradável.
- Personalização da experiência: Uma animação pode ser usada para personalizar a experiência do usuário e tornar o sistema mais único e memorável. Isso pode ser especialmente útil para marcas que desejam criar uma identidade visual consistente.
- Redução do abandono: Páginas de erro 404 animadas podem ajudar a manter o interesse dos usuários e evitar que eles abandonem o sistema após encontrar um erro. Se o usuário perceber que a experiência ainda é interessante e interativa, ele pode ser incentivado a explorar outras partes do sistema.


[hitpaw-1690975177678.webm](https://github.com/DeiseFAS/ProjetoAvaliativoModulo2/assets/71991444/21ecd7cb-cc44-46a9-aaa0-68f1d51b603e)

Tenho consciência que em uma aplicação real, talvez a animação não fosse aprovada, até mesmo por conta do ramo, mas por se tratar de um projeto fictício, acreditei que o cliente fictício aprovou :) 
E aproveitei a oportunidade para explorar algo novo para mim.

Embora eu tenha usado vários vetores free e feito imagens no Adobe Ilustrador para montar a cena, a logíca básica
 para os movimentos não é minha. Por isso não posso deixar de citar a referência para essa animação que vi no repositório
da brunasilvaraujo - Bruna Silva.



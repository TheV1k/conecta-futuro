# 🌐 Conecta Futuro

Projeto acadêmico desenvolvido para a disciplina de **Desenvolvimento Front-end para Web**, do curso de **Engenharia de Software da Universidade Cruzeiro do Sul**.

O **Conecta Futuro** consiste na criação de um site institucional para uma ONG fictícia, com o objetivo de apresentar sua atuação, projetos sociais e oportunidades de capacitação. A aplicação foi desenvolvida com foco em **semântica, responsividade, acessibilidade e interatividade**, proporcionando uma experiência adequada em diferentes dispositivos, desde computadores até smartphones.

## 📋 Sobre o projeto

O Conecta Futuro é uma aplicação web desenvolvida para apresentar a atuação da ONG, seus projetos sociais e oportunidades de capacitação.

A plataforma reúne informações institucionais, indicadores de impacto, projetos oferecidos e um formulário para manifestação de interesse dos usuários.

O projeto também busca aplicar, na prática, conceitos fundamentais de desenvolvimento front-end, incluindo **HTML5 semântico, CSS3, JavaScript, manipulação do DOM, responsividade, acessibilidade e organização de código**.

## 🎯 Objetivos

* Desenvolver páginas utilizando HTML5 semântico;
* Criar layouts responsivos utilizando CSS3;
* Aplicar CSS Grid e Flexbox na construção das interfaces;
* Implementar interatividade utilizando JavaScript;
* Desenvolver e validar formulário HTML5;
* Aplicar conceitos de acessibilidade;
* Criar componentes visuais interativos;
* Organizar o projeto separando estrutura, apresentação, comportamento e recursos;
* Publicar a aplicação utilizando GitHub Pages.

## 🌐 Demonstração

A aplicação está disponível em:

<<<<<<< HEAD
**[Conecta Futuro — GitHub Pages](https://TheV1k.github.io/conecta-futuro/)**
=======
**[Conecta Futuro — GitHub Pages](https://thev1k.github.io/conecta-futuro/)**
>>>>>>> 77fbaf0dd5e5bc8310de9dcfde4c6ca6dd3c5798

## 🖥️ Estrutura do projeto

```text
conecta-futuro/

├── index.html
├── projetos.html
├── cadastro.html
├── README.md
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── img/
│   ├── logo.svg
│   ├── favicon/
│   ├── projetos/
│   └── indicadores/
│
└── docs/
    └── gifs/
        ├── home.gif
        ├── projetos.gif
        └── formulario.gif
```

## 📄 Páginas

### 🏠 Página inicial

    
  ![Demonstração da Home](docs/gif/home.gif)


A página inicial apresenta a ONG, sua proposta de atuação, informações institucionais, indicadores de impacto e elementos interativos.

Entre os conteúdos apresentados estão:

* Informações sobre a organização;
* Indicadores de impacto;
* Projetos e iniciativas;
* Elementos visuais interativos;
* Navegação para as demais páginas.

### 💻 Projetos

![Demonstração dos Projetos](docs/gif/projetos.gif)

A página apresenta os principais projetos desenvolvidos pela organização:

* **Conecta Digital**
* **Código para o Futuro**
* **Conecta Profissão**
* **Conecta Empreendedor**

As informações apresentadas incluem público-alvo, descrição, atividades desenvolvidas e duração dos projetos.

No desktop, os projetos são apresentados por meio de **cards interativos com efeito `rotateY`**. Em dispositivos menores, a interface é adaptada para um formato de **carrossel**, favorecendo a navegação em telas reduzidas.

### 📝 Cadastro


![Demonstração do Formulário](docs/gif/formulario.gif)


A página de cadastro disponibiliza um formulário para preenchimento dos dados de interesse do usuário nos projetos da organização.

O formulário utiliza recursos de validação nativos do HTML5 e validações visuais implementadas com CSS e JavaScript.

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* CSS Grid
* Flexbox
* Git
* GitHub
* GitHub Pages
* Google Fonts
* Font Awesome
* SVG

## ✨ Recursos implementados

### Estrutura e apresentação

* HTML5 semântico;
* CSS3;
* CSS Grid;
* Flexbox;
* Layout responsivo;
* Breakpoints para diferentes tamanhos de tela;
* Identidade visual personalizada;
* Favicon em SVG.

### Interatividade

* Cards interativos;
* Efeito `rotateY` nos cards;
* Carrossel para dispositivos móveis;
* Manipulação do DOM com JavaScript;
* Navegação entre páginas;
* Feedback visual para interação com elementos.

### Formulários

* Formulário desenvolvido com HTML5;
* Validação nativa dos campos;
* Validação visual utilizando `:valid` e `:invalid`;
* Feedback visual para campos válidos e inválidos;
* Manipulação dos dados preenchidos utilizando JavaScript.

### Acessibilidade

* HTML semântico;
* Hierarquia adequada de títulos;
* Utilização de `label`;
* Utilização de `fieldset` e `legend`;
* Atributos relacionados à acessibilidade;
* Estrutura de navegação organizada;
* Adaptação da interface para diferentes dispositivos.

## 📱 Responsividade

A interface foi desenvolvida considerando diferentes tamanhos de tela, utilizando **breakpoints específicos para desktop, tablets e dispositivos móveis**.

No desktop, os cards dos projetos utilizam interação visual por meio do efeito de rotação.

Em dispositivos menores, a apresentação dos conteúdos é adaptada para um formato de carrossel, proporcionando uma experiência mais adequada para telas reduzidas e navegação por toque.

A estrutura utiliza **CSS Grid, Flexbox e Media Queries** para adaptar os componentes de acordo com o espaço disponível.

## ♿ Acessibilidade

A aplicação utiliza recursos de HTML semântico e boas práticas de estruturação para melhorar a compreensão e navegação do conteúdo.

Entre os recursos utilizados estão:

* Hierarquia adequada de títulos;
* Elementos semânticos do HTML5;
* Associação entre `label` e campos de formulário;
* `fieldset` e `legend` para agrupamento de informações;
* Atributos relacionados à acessibilidade;
* Feedback visual dos campos;
* Estrutura adaptada para diferentes dispositivos.

## 📁 Organização do código

A estrutura do projeto foi organizada para manter responsabilidades distintas entre **estrutura, apresentação, comportamento e recursos visuais**.

* `html` → estrutura e conteúdo das páginas;
* `css` → estilos, layout, responsividade e identidade visual;
* `js` → interações, validações e manipulação do DOM;
* `img` → imagens, logotipo, favicon e demais recursos visuais;
* `docs/videos` → vídeos utilizados para demonstrar o funcionamento da aplicação.

Essa separação facilita a manutenção, organização e evolução do projeto.

## 🚀 Como executar

### Execução local

1. Clone ou baixe o repositório;
2. Acesse a pasta do projeto;
3. Abra o arquivo `index.html` em um navegador;
4. Navegue pelas páginas utilizando o menu principal.

O projeto não necessita de servidor ou banco de dados para sua execução local, pois foi desenvolvido como uma aplicação front-end estática.

### GitHub Pages

A aplicação também pode ser acessada por meio do GitHub Pages, permitindo visualizar o projeto diretamente no navegador sem a necessidade de configuração de um ambiente local.

## 🎓 Projeto acadêmico

Projeto desenvolvido como atividade acadêmica do curso de **Engenharia de Software da Universidade Cruzeiro do Sul**, com foco na aplicação prática de conceitos de desenvolvimento front-end.

Durante o desenvolvimento foram aplicados conhecimentos relacionados a:

* HTML5 semântico;
* CSS3;
* Design responsivo;
* CSS Grid;
* Flexbox;
* JavaScript;
* Manipulação do DOM;
* Validação de formulários;
* Acessibilidade;
* Organização de arquivos;
* Controle de versão com Git;
* Publicação utilizando GitHub Pages.

## 👨‍💻 Autor

<p align="center">
  <a href="https://github.com/TheV1k">
    <img src="https://avatars.githubusercontent.com/u/62910266?s=400&v=4" width="120" alt="Victor Moreira Ramos"><br>
    <b>Victor Moreira Ramos</b>
  </a>
</p>

# Trabalho-Final-WEB-FlashCards

## Sumário

- [Sumário](#sumário)
- [Objetivo, relevância e justificativa](#objetivo-relevância-e-justificativa)
- [Desenvolvimento, estrutura e funcionamento](#desenvolvimento-estrutura-e-funcionamento)
- [Créditos](#créditos)
- [Colaboradores](#colaboradores)
- [Licença](#licença)


## Objetivo, relevância e justificativa

O nosso objetivo com o desenvolvimento era criar um [site](https://trabalho-final-web-flash-cards.vercel.app/) onde as pessoas poderiam aprender coisas básicas sobre HTML, CSS e javaScript, seja para estudar para uma prova, por curiosidade ou outros fatores.

Nosso site tem relevância principalmente entre estudantes e iniciantes no ramo de desenvolvimento WEB, onde podem ter uma introdução simples e divertida dos conteúdos básicos.

## Desenvolvimento, estrutura e funcionamento

Nosso site foi desenvolvido com o uso de HTML, CSS, JavaScript e arquivos JSON para armazenamento das perguntas. Usamos uma API de usuários fictícios chamada [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para implementar a lista de usuários do site.

A página inicial tem opções para realização de cadastro ou login, e uma opção para ver a lista de usuários do site.

> As páginas de registro e login, apesar de implementadas, ainda não funcionam de fato, exceto para acesso a área de administração do site, feita através de um usuário e senha específicos inseridos na tela de login.

<details>
  <summary>Como acessar a tela de Administração</summary>
  
  Para acessar a tela de administração, você deve digitar os seguintes usuário e senha nos respectivos espaços:

  > - Usuário: Admin@123
  > - Senha: Admin@123

  Feito isso, você chegará na seguinte página:

  ![Captura de tela da página de Administração do site](/images/readme-images/pagina-administracao.png)

  Nela, você pode escolher um dos usuários na lista de usuários clicando em seu nome, e logo em seguida, possui duas opções:

  - Clicar em `Alterar nome`, em que será requisitado ao administrador inserir o novo nome do usuário selecionado, e pode confirmar a alteração clicando em `OK`;

  - Clicar em `Remover usuário`, em que será perguntado ao administrador se ele tem certeza de que quer remover o usuário escolhido, onde ele pode optar por confirmar ou cancelar a remoção.
  
</details>


Nas páginas ou de login ou de registro, após inserir seus dados e continuar, o usuário será redirecionado a página de escolha de treino, onde poderá optar por treinar HTML, CSS ou JavaScript.

Após selecionado um tipo de treino, o usuário será redirecionado para a respectiva página, onde deverá clicar no botão `Começar` para dar início ao treino, onde estará em uma página assim:

![Captura de tela da página de treino HTML do site](/images/readme-images/exemplo-treino-html.png)

Com o treino iniciado, uma pergunta vai aparecer na tela. O usuário pode:

- Clicar no botão `➡️`, o que quer dizer que ele sabe a resposta daquela pergunta, contabilizando no contador de respostas conhecidas no topo e passando para a próxima pergunta;

- Clicar no botão `⬅️`, o que quer dizer que ele não sabe a resposta daquela pergunta - isso vai contabilizar no contador de respostas não conhecidas no topo e mostrar a resposta da pergunta atual. Depois de ler a resposta, o jogador deve clicar no botão `Continuar` para passar para a próxima pergunta.

Cada treino possui, ao todo, 20 perguntas. Ao chegar ao fim das 20 perguntas, o usuário poderá ver o tempo que levou para responder todas as perguntas, as que ele sabia a resposta e as que ele não sabia responder, e poderá tanto voltar para a página anterior para tentar outro treino, quanto recarregar a página atual para tentar novamente. 

## Créditos

### De uso geral:

https://www.w3schools.com/howto/howto_make_a_website.asp  
https://www.w3schools.com/css/css3_flexbox_container.asp  
http://howtocenterincss.com/  
https://dev.to/js_bits_bill/addeventlistener-once-js-bits-565d  
https://www.w3schools.com/jsref/coll_form_elements.asp  
https://www.w3schools.com/js/js_window_location.asp  
https://www.w3schools.com/cssref/sel_focus.php  
https://stackoverflow.com/questions/47954110/how-can-i-set-the-focus-on-the-first-li-with-javascript-or-jquery  
https://www.w3schools.com/jsref/prop_html_tabindex.asp  
https://www.w3schools.com/jsref/api_fetch.asp

### Para desenvolvimento da API:

https://jsonplaceholder.typicode.com/  
https://jsonplaceholder.typicode.com/guide/  
https://exemplos-one.vercel.app/ex-02/index.html  
https://arthurporto.notion.site/09-API-REST-f68bf87b73be448e99171e195f53dbd0  
https://www.w3schools.com/jsref/met_document_createelement.asp  

## Colaboradores

Este projeto foi desenvolvido por:

- [Davi Gomes Mendes](https://github.com/DaviGms5)
- [Luiz Felipe Pereira de Lima](https://github.com/LuizFelipeLP)
- [Rharume Neres Cruz](https://github.com/RharumeNeres)
- [Walisson Fernandes Dias](https://github.com/Murynga)


## Licença

Este repositório é público e distribuído com a [licença MIT](/LICENSE).
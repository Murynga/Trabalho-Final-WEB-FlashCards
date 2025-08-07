const perguntasHTML = 
[
    {
        pergunta: "O que é o HTML?",
        resposta: "O HTML é uma Linguagem de Marcação de texto utilizada para estruturar conteúdo de páginas Web"
    }, 

    {
        pergunta: "Para que serve o HTML?",
        resposta: "O HTML serve para estruturar conteúdo de páginas Web através de elementos definidos pelo desenvolvedor"
    },

    {
        pergunta: "Para que serve a tag <h1> em HTML?",
        resposta: "A tag h1 serve para definir um título na sua página HTML"
    },

    {
        pergunta: "Qual a diferença entre as tags <h1> e <h2> em HTML?",
        resposta: "A tag h1 define um título, enquanto a tag h2 define um subtítulo"
    },

    {
        pergunta: "Para que serve o <body> do HTML? ",
        resposta: "O body se refere ao corpo da sua página, ou seja, ele serve para colocar os elementos HTML que estarão ao decorrer da sua página"
    },

    {
        pergunta: "Para que serve a tag <p>? ",
        resposta: "A tag p se refere a um parágrafo em HTML, usada geralmente para textos"
    },

    {
        pergunta: "Para que serve o <head> do HTML?",
        resposta: "O head serve para colocar informações no cabeçalho da sua página, ou seja, não são visíveis no corpo do texto, porém configura como a página deve funcionar, bem como por exemplo, de onde virá o CSS da sua página"
    },

    {
        pergunta: "Para que serve a tag <img> ?",
        resposta: "Serve para colocar imagens na sua página HTML"
    },

    {
        pergunta: "Para que serve a tag <a> em html?", 
        resposta: "a tag <a> servem para linkar uma página interna ou externa ao seu HTML, dessa forma esse link pode ser acessado através da sua página"
    },

    {
        pergunta: "Para que serve a tag <link> em HTML?",
        resposta: "servem para conectar coisas específicas ao seu HTML, como o CSS e ícones"
    },

    {
        pergunta: "Qual a diferença da tag <a> para a tag <link>? ",
        resposta: "a tag <a> serve como link para uma página interna ou externa através da sua página HTML, enquanto o <link> serve para conectar o CSS ou um ícone a sua página. Além disso, o <link> é colocado no head, e a tag <a> é colocada no body"
    },

    {
        pergunta: "Para que serve a tag <script> no HTML?",
        resposta: "a tag <script> serve para vincular um código JS para a sua página HTML"
    },

    {
        pergunta: "Para que serve a tag <form>?",
        resposta: "Serve para criar um formulário na sua página HTML"
    },

    {
        pergunta: "Qual é o nome da estrutura básica que todo documento HTML deve ter?",
        Resposta: "Estrutura HTML básica (composta por <!DOCTYPE html>, <html>, <head> e <body>)"
    },

    {
        pergunta: "O que deve ser adicionado no início de um documento HTML para indicar o tipo de documento?",
        resposta: "A declaração <!DOCTYPE html>"
    },

    {
        pergunta: "Para que serve <HTML lang = 'pt-br'>?",
        resposta: "Serve para definir a linguagem da sua página. Neste exemplo, definida como Português(Brasil)"
    },

    {
        pergunta: "Qual a função da tag <title> no HTML?",
        resposta: "serve para definir o título da aba da página no navegador"
    },

    {
        pergunta: "Para que serve divs em HTML? ",
        resposta : "Serve para melhor organização do site, sendo mais fácil criar classes e id's para edição no CSS e uso no JS"
    },

    {
        pergunta: "Para que serve o atributo class? ",
        resposta : "Serve para dar nome a elementos para depois aplicar estilos e comportamentos através do JS e CSS"
    },

    {
        pergunta: "Como fazer comentários em HTML? ",
        resposta : "Os comentários são feitos usando a estrutura <!--  -->"
    }
]

const perguntasCSS = [
    {
        pergunta: "O que é o CSS?",
        resposta: "O CSS é uma linguagem de estilos usada para definir a aparência visual de páginas HTML"
    },

    {
        pergunta: "Para que serve o CSS?",
        resposta: "O CSS serve para estilizar elementos HTML, como cores, tamanhos, fontes, margens e posicionamento"
    },

    {
        pergunta: "O que significa a sigla CSS?",
        resposta: "CSS significa Cascading Style Sheets, ou Folhas de Estilo em Cascata"
    },

    {
        pergunta: "Qual a diferença entre HTML e CSS?",
        resposta: "HTML estrutura o conteúdo da página, enquanto o CSS cuida da aparência e estilo visual"
    },

    {
        pergunta: "O que é uma regra CSS?",
        resposta: "É uma estrutura que define o seletor e os estilos aplicados, como por exemplo: h1 { color: red; }"
    },

    {
        pergunta: "Como aplicar CSS em um arquivo HTML?",
        resposta: "Você pode aplicar CSS de forma inline, interna (dentro da tag <style>) ou externa (através da tag <link>)"
    },

    {
        pergunta: "O que é um seletor em CSS?",
        resposta: "É o elemento HTML que será estilizado, como body, h1, .classe ou #id"
    },

    {
        pergunta: "Qual a diferença entre os seletores .classe e #id no CSS?",
        resposta: ".classe estiliza todos os elementos com aquela classe, enquanto #id estiliza apenas um elemento com aquele ID"
    },

    {
        pergunta: "Para que serve a propriedade 'color' no CSS?",
        resposta: "Serve para definir a cor do texto de um elemento"
    },

    {
        pergunta: "Para que serve a propriedade 'background-color'?",
        resposta: "Serve para definir a cor de fundo de um elemento"
    },

    {
        pergunta: "Para que serve a propriedade 'font-size'?",
        resposta: "Serve para definir o tamanho da fonte de um texto"
    },

    {
        pergunta: "Para que serve a propriedade 'margin'?",
        resposta: "Serve para definir o espaço externo entre um elemento e os outros ao redor"
    },

    {
        pergunta: "Para que serve a propriedade 'padding'?",
        resposta: "Serve para definir o espaço interno entre o conteúdo e a borda de um elemento"
    },

    {
        pergunta: "O que é o box model no CSS?",
        resposta: "É o modelo de caixa usado para representar a estrutura de um elemento: content, padding, border e margin"
    },

    {
        pergunta: "O que são pseudo-classes no CSS?",
        resposta: "São palavras-chave que definem o estado de um elemento, como :hover, :active, :first-child"
    },

    {
        pergunta: "Para que serve o pseudo-classe ':hover'?",
        resposta: "Serve para aplicar um estilo quando o usuário passa o mouse sobre o elemento"
    },

    {
        pergunta: "Como aplicar uma fonte personalizada no CSS?",
        resposta: "Você pode usar a regra @font-face ou importar com @import de fontes externas como o Google Fonts"
    },

    {
        pergunta: "Para que serve a propriedade 'display' no CSS?",
        resposta: "Serve para definir o comportamento de exibição de um elemento, como block, inline ou flex"
    },

    {
        pergunta: "Para que serve a propriedade 'position'?",
        resposta: "Define o tipo de posicionamento de um elemento na página, como static, relative, absolute ou fixed"
    },

    {
        pergunta: "Como fazer comentários em CSS?",
        resposta: "Os comentários em CSS são feitos com a sintaxe /* comentário */"
    }
];


const perguntasJS = [
    {
        pergunta: "O que é o JavaScript?",
        resposta: "O JavaScript é uma linguagem de programação usada para criar interatividade em páginas web"
    },

    {
        pergunta: "Para que serve o JavaScript?",
        resposta: "Serve para adicionar comportamentos dinâmicos, como validação de formulários, animações e resposta a eventos"
    },

    {
        pergunta: "JavaScript tem alguma relação com Java?",
        resposta: "Não. Apesar dos nomes parecidos, JavaScript e Java são linguagens diferentes, com finalidades distintas"
    },

    {
        pergunta: "Como inserir JavaScript em um HTML?",
        resposta: "Você pode usar a tag <script> no head ou no final do body do HTML"
    },

    {
        pergunta: "O que é uma variável em JavaScript?",
        resposta: "É um espaço na memória para armazenar dados que podem mudar durante a execução"
    },

    {
        pergunta: "Quais são as palavras-chave para declarar variáveis em JS?",
        resposta: "As principais são: var, let e const"
    },

    {
        pergunta: "Qual a diferença entre let e const?",
        resposta: "let permite mudar o valor da variável; const define uma constante que não pode ser alterada"
    },

    {
        pergunta: "O que é uma função em JavaScript?",
        resposta: "Função é um bloco de código que pode ser executado sempre que for chamado"
    },

    {
        pergunta: "Como se declara uma função em JavaScript?",
        resposta: "Usando a palavra-chave function, seguida do nome da função e parênteses: function nome() { }"
    },

    {
        pergunta: "O que são eventos em JavaScript?",
        resposta: "Eventos são ações que ocorrem na página, como cliques, teclas pressionadas ou o carregamento da página"
    },

    {
        pergunta: "Como capturar um clique de botão em JavaScript?",
        resposta: "Usando addEventListener: botão.addEventListener('click', função)"
    },

    {
        pergunta: "O que é o DOM em JavaScript?",
        resposta: "É a estrutura em árvore da página HTML, que o JS pode acessar e modificar dinamicamente"
    },

    {
        pergunta: "Como acessar um elemento HTML no JS?",
        resposta: "Pode-se usar métodos como getElementById, querySelector ou getElementsByClassName"
    },

    {
        pergunta: "Para que serve o console.log()?",
        resposta: "Serve para exibir mensagens no console do navegador, útil para testes e depuração"
    },

    {
        pergunta: "O que é um array em JavaScript?",
        resposta: "É uma estrutura que armazena vários valores em uma única variável"
    },

    {
        pergunta: "O que é um objeto em JavaScript?",
        resposta: "É uma coleção de propriedades, com chave e valor, usada para representar entidades complexas"
    },

    {
        pergunta: "O que são operadores em JS?",
        resposta: "São símbolos que realizam operações em valores, como +, -, *, /, ===, &&, ||"
    },

    {
        pergunta: "Para que serve o if em JavaScript?",
        resposta: "Serve para executar um bloco de código apenas se uma condição for verdadeira"
    },

    {
        pergunta: "Como fazer um loop em JavaScript?",
        resposta: "Pode-se usar estruturas como for, while ou forEach para repetir blocos de código"
    },

    {
        pergunta: "Como fazer comentários em JavaScript?",
        resposta: "Comentários de uma linha usam // e comentários de múltiplas linhas usam /* */"
    }
];

const perguntasSelecionadasHTML = perguntasHTML.slice(0,20); 
const perguntasSelecionadasCSS = perguntasCSS.slice(0,20) ;
const perguntasSelecionadasJS = perguntasJS.slice(0,20);

perguntasEmbaralhadas(perguntasHTML);
perguntasEmbaralhadas(perguntasCSS);
perguntasEmbaralhadas(perguntasJS);

function perguntasEmbaralhadas(perguntas) 
{
    for (let i = perguntas.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
    }
}
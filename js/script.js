const perguntaResposta = document.getElementById("pergunta-resposta");
const atualizaEsquerdo = document.getElementById("eu-nao-sei");
const atualizaDireito = document.getElementById("eu-sei");
let contagemEsquerdo = 0;
let contagemDireito = 0;
let setaEsquerda = document.getElementById("nao-sei");
setaEsquerda.disabled = true;
let setaDireita = document.getElementById("sei");
setaDireita.disabled = true;
let tempoDecorrido = document.getElementById("tempo-decorrido");
let tempoComecado = document.getElementById("comecar");
let perguntasSelecionadas = [];
let indiceAtual = 0;
let continuar = document.getElementById("continuar");
continuar.disabled = true;

// função assíncrona pra ler as perguntas e respostas do respectivo arquivo JSON
async function carregaPerguntas(tipoTreino) {
    let url;
    if (tipoTreino == "HTML") {
        url = "/json/perguntas_html.json";
    } else if (tipoTreino == "CSS") {
        url = "/json/perguntas_css.json";
    } else {
        url = "/json/perguntas_js.json";
    }

    const response = await fetch(url);
    const perguntas = await response.json();
    return perguntas;
}

// função assíncrona que inicia o jogo
async function comecar(tipoTreino)
{
    indiceAtual = 0;
    setaEsquerda.disabled = false;
    setaDireita.disabled = false;
    iniciarTemporizador();
    tempoComecado.disabled = true;

    perguntasSelecionadas = await carregaPerguntas(tipoTreino);
    perguntasEmbaralhadas(perguntasSelecionadas);
    mostrarPerguntaAtual();
}

// função para embaralhar as perguntas
function perguntasEmbaralhadas(perguntas) 
{
    for (let i = perguntas.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
    }
}

// função para mostrar a resposta e continuar o jogo quando o usuário clicar em 'continuar' 
function botaoEsquerdo()
{
    contagemEsquerdo++;
    atualizaEsquerdo.textContent = contagemEsquerdo;
    perguntaResposta.textContent = perguntasSelecionadas[indiceAtual].resposta;

    setaEsquerda.disabled = true;
    setaDireita.disabled = true;
    continuar.disabled = false;
    continuar.addEventListener("click", () => 
    {
        indiceAtual++;
        mostrarPerguntaAtual();
        setaEsquerda.disabled = false;
        setaDireita.disabled = false;
        continuar.disabled = true;
    }, {once: true});
}

// função para passar pra próxima pergunta
function botaoDireito()
{
    contagemDireito++;
    atualizaDireito.textContent = contagemDireito;
    indiceAtual++;
    mostrarPerguntaAtual();
}

// função para começar o contador de tempo
function iniciarTemporizador() 
{
    tempo = 0;
    intervaloTempo = setInterval(() =>  
    {
        tempo++;
        tempoDecorrido.textContent = `${tempo}s`;
    }, 1000);
}

// função para mostrar as perguntas
function mostrarPerguntaAtual() 
{
    if (indiceAtual < perguntasSelecionadas.length) 
    {
        perguntaResposta.textContent = perguntasSelecionadas[indiceAtual].pergunta;
    } 
    
    else 
    {
        perguntaResposta.textContent = "Fim do treino! Recarregue a página para tentar de novo, ou volte para escolher outro treino.";
        setaDireita.disabled = true;
        setaEsquerda.disabled = true;
        clearInterval(intervaloTempo);
    }
}

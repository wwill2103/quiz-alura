const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em que ano o São Paulo Futebol Clube foi fundado?",
        alternativas: [
            {
                texto: "1930",
                afirmacao: "Quase! A data correta vem pouco depois."
            },
            {
                texto: "1935",
                afirmacao: "Correto! O Tricolor Paulista foi fundado em 25 de janeiro de 1935."
            }
        ]
    },
    {
        enunciado: "Quantos títulos da Libertadores o São Paulo tem?",
        alternativas: [
            {
                texto: "3",
                afirmacao: "Acertou! O clube venceu em 1992, 1993 e 2005."
            },
            {
                texto: "2",
                afirmacao: "Errado! O São Paulo tem um a mais."
            }
        ]
    },
    {
        enunciado: "Qual estádio é a casa do São Paulo?",
        alternativas: [
            {
                texto: "Morumbi",
                afirmacao: "Isso aí! O Estádio Cícero Pompeu de Toledo é o famoso Morumbi."
            },
            {
                texto: "Pacaembu",
                afirmacao: "Errado! O Pacaembu já foi usado, mas o verdadeiro lar é o Morumbi."
            }
        ]
    },
    {
        enunciado: "Qual desses jogadores é um ídolo histórico do clube?",
        alternativas: [
            {
                texto: "Rogério Ceni",
                afirmacao: "Sem dúvida! Maior goleiro artilheiro da história do futebol."
            },
            {
                texto: "Pelé",
                afirmacao: "Pelé jogou no Santos. Rogério é o ídolo tricolor!"
            }
        ]
    },
    {
        enunciado: "Qual foi o último título internacional conquistado até 2023?",
        alternativas: [
            {
                texto: "Copa Sul-Americana de 2012",
                afirmacao: "Correto! Foi conquistada contra o Tigre, da Argentina."
            },
            {
                texto: "Libertadores de 2005",
                afirmacao: "Quase! Esse foi o anterior. A Sul-Americana veio depois."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua trajetória como torcedor:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

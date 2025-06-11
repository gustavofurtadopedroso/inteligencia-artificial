const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você vê alguém jogando lixo na rua. O que faz?",
        alternativas: [
            { texto: "Ignora. Não é problema meu.", tipo: "indiferente" },
            { texto: "Fica incomodado, mas não fala nada.", tipo: "equilibrado" },
            { texto: "Chama atenção da pessoa de forma educada.", tipo: "consciente" }
        ]
    },
    {
        enunciado: "Ao escolher produtos no mercado, o que você prioriza?",
        alternativas: [
            { texto: "Preço baixo, independentemente da origem.", tipo: "indiferente" },
            { texto: "Produtos de marcas conhecidas, mas sem exageros.", tipo: "equilibrado" },
            { texto: "Produtos locais, orgânicos e sustentáveis.", tipo: "consciente" }
        ]
    },
    {
        enunciado: "Você está numa roda de amigos e alguém faz um comentário preconceituoso. Qual sua reação?",
        alternativas: [
            { texto: "Finge que não ouviu para evitar conflito.", tipo: "indiferente" },
            { texto: "Tenta mudar de assunto para não deixar clima ruim.", tipo: "equilibrado" },
            { texto: "Interrompe e explica por que aquilo é errado.", tipo: "consciente" }
        ]
    },
    {
        enunciado: "Você participa de atividades culturais na sua comunidade?",
        alternativas: [
            { texto: "Nunca participei.", tipo: "indiferente" },
            { texto: "De vez em quando.", tipo: "equilibrado" },
            { texto: "Sempre que posso, apoio e participo.", tipo: "consciente" }
        ]
    },
    {
        enunciado: "Quando pensa no futuro do planeta, você se sente...",
        alternativas: [
            { texto: "Desmotivado, não tem jeito mesmo.", tipo: "indiferente" },
            { texto: "Com esperança, mas sem saber o que fazer.", tipo: "equilibrado" },
            { texto: "Motivado a agir para mudar o cenário.", tipo: "consciente" }
        ]
    }
];

let atual = 0;
let pontuacao = {
    consciente: 0,
    equilibrado: 0,
    indiferente: 0
};

function mostraPergunta() {
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    caixaAlternativas.innerHTML = "";

    perguntas[atual].alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => {
            pontuacao[alternativa.tipo]++;
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                mostraResultado();
            }
        });
        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado final:";
    caixaAlternativas.innerHTML = "";

    const tipoFinal = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);

    let mensagem = "";
    if (tipoFinal === "consciente") {
        mensagem = "Parabéns! Você é uma pessoa consciente e comprometida com um mundo melhor.";
    } else if (tipoFinal === "equilibrado") {
        mensagem = "Você se importa com o mundo, mas ainda está em processo de evolução. Continue se informando!";
    } else {
        mensagem = "É hora de repensar suas atitudes. Pequenas ações podem causar grandes impactos!";
    }

    textoResultado.textContent = mensagem;
}

mostraPergunta();
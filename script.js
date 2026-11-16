
const questoes = [
    [
        {
            pergunta: "Qual era a principal função das pirâmides construídas no Egito Antigo?",
            alternativas: [
                "Servir como mercados comerciais.",
                "Servir como túmulos para os faraós.",
                "Funcionar como escolas públicas.",
                "Armazenar alimentos para a população."
            ],
            correta: 1,
            explicacao: "As pirâmides eram construções funerárias destinadas principalmente aos faraós, relacionadas às crenças egípcias sobre a vida após a morte."
        },
        {
            pergunta: "Qual civilização é conhecida pelo desenvolvimento da democracia em Atenas?",
            alternativas: [
                "Civilização Romana.",
                "Civilização Egípcia.",
                "Civilização Grega.",
                "Civilização Persa."
            ],
            correta: 2,
            explicacao: "Na Grécia Antiga, Atenas desenvolveu uma forma de democracia direta, na qual cidadãos participavam das decisões políticas."
        },
        {
            pergunta: "Qual era a língua predominante na administração do Império Romano do Ocidente?",
            alternativas: [
                "Latim.",
                "Inglês.",
                "Alemão.",
                "Francês."
            ],
            correta: 0,
            explicacao: "O latim era a principal língua administrativa e cultural do Império Romano do Ocidente e influenciou diversas línguas modernas."
        },
        {
            pergunta: "Qual instituição exerceu grande influência religiosa e política na Europa medieval?",
            alternativas: [
                "Organização das Nações Unidas.",
                "Igreja Católica.",
                "Parlamento Europeu.",
                "Organização Mundial do Comércio."
            ],
            correta: 1,
            explicacao: "A Igreja Católica teve grande influência na sociedade medieval, atuando na religião, educação, cultura e política."
        }
    ],
    [
        {
            pergunta: "Por que o Renascimento Cultural foi importante para a história europeia?",
            alternativas: [
                "Porque eliminou completamente a religião da sociedade.",
                "Porque fortaleceu o interesse pela ciência, pelas artes e pela cultura clássica.",
                "Porque impediu o desenvolvimento científico.",
                "Porque marcou o fim imediato de todas as monarquias."
            ],
            correta: 1,
            explicacao: "O Renascimento valorizou o conhecimento, a observação, a razão e a inspiração na cultura greco-romana, contribuindo para transformações artísticas e científicas."
        },
        {
            pergunta: "Uma fábrica substituiu parte do trabalho artesanal por máquinas movidas a vapor. Qual transformação histórica está relacionada a essa situação?",
            alternativas: [
                "Revolução Francesa.",
                "Revolução Industrial.",
                "Guerra Fria.",
                "Reforma Protestante."
            ],
            correta: 1,
            explicacao: "A Revolução Industrial transformou os meios de produção, ampliando o uso de máquinas e a produção em fábricas."
        },
        {
            pergunta: "Em 1789, a população francesa participou de um movimento que questionava os privilégios da nobreza e do clero. Qual era esse movimento?",
            alternativas: [
                "Revolução Russa.",
                "Revolução Americana.",
                "Revolução Francesa.",
                "Revolução Industrial."
            ],
            correta: 2,
            explicacao: "A Revolução Francesa questionou as desigualdades sociais e os privilégios do Antigo Regime, defendendo princípios como liberdade e igualdade."
        },
        {
            pergunta: "Qual acontecimento foi considerado o estopim da Primeira Guerra Mundial, em 1914?",
            alternativas: [
                "A queda do Muro de Berlim.",
                "O assassinato do arquiduque Francisco Ferdinando.",
                "A Revolução Industrial.",
                "A independência dos Estados Unidos."
            ],
            correta: 1,
            explicacao: "O assassinato do arquiduque Francisco Ferdinando, herdeiro do Império Austro-Húngaro, desencadeou uma crise diplomática que contribuiu para o início da guerra."
        }
    ],
    [
        {
            pergunta: "Durante a Guerra Fria, Estados Unidos e União Soviética disputavam influência política, econômica, militar e tecnológica. Por que esse período ficou conhecido como Guerra Fria?",
            alternativas: [
                "Porque aconteceu exclusivamente em regiões polares.",
                "Porque não houve disputas entre os dois países.",
                "Porque houve rivalidade intensa sem uma guerra direta generalizada entre as duas superpotências.",
                "Porque os dois países eram aliados militares."
            ],
            correta: 2,
            explicacao: "A Guerra Fria foi marcada pela rivalidade entre Estados Unidos e União Soviética, envolvendo disputas ideológicas, corrida armamentista e conflitos indiretos."
        },
        {
            pergunta: "Uma cidade passou a receber muitos trabalhadores vindos do campo para trabalhar nas fábricas. Ao mesmo tempo, surgiram problemas de moradia e condições de trabalho. Qual transformação histórica explica melhor essa situação?",
            alternativas: [
                "O crescimento da urbanização provocado pela industrialização.",
                "O desaparecimento das cidades.",
                "O fim das atividades comerciais.",
                "A redução da produção industrial."
            ],
            correta: 0,
            explicacao: "A industrialização estimulou o crescimento das cidades e a migração de trabalhadores do campo para os centros urbanos, criando novos desafios sociais."
        },
        {
            pergunta: "Em 1989, ocorreu a queda do Muro de Berlim. Qual foi uma de suas principais consequências históricas?",
            alternativas: [
                "O início da Primeira Guerra Mundial.",
                "A divisão definitiva da Alemanha.",
                "O fortalecimento da divisão entre Alemanha Oriental e Ocidental.",
                "O avanço do processo de reunificação alemã e o enfraquecimento da divisão da Europa durante a Guerra Fria."
            ],
            correta: 3,
            explicacao: "A queda do Muro de Berlim simbolizou o enfraquecimento da divisão entre os blocos da Guerra Fria e abriu caminho para a reunificação alemã, concretizada em 1990."
        },
        {
            pergunta: "Ao longo da história, diferentes revoluções transformaram a organização política e econômica das sociedades. Qual alternativa apresenta corretamente a relação entre acontecimento e transformação histórica?",
            alternativas: [
                "Revolução Francesa: fortalecimento dos privilégios feudais.",
                "Revolução Industrial: ampliação da produção mecanizada e transformação das relações de trabalho.",
                "Guerra Fria: união política definitiva entre Estados Unidos e União Soviética.",
                "Renascimento: abandono completo das artes e das ciências."
            ],
            correta: 1,
            explicacao: "A Revolução Industrial modificou profundamente a economia e a sociedade, ampliando a mecanização, a produção fabril e o trabalho assalariado."
        }
    ]
];

const niveis = [
    {
        nome: "Explorador do Passado",
        numero: "NÍVEL 01",
        recompensa: "Explorador do Passado",
        icone: "🏺"
    },
    {
        nome: "Mestre da História",
        numero: "NÍVEL 02",
        recompensa: "Mestre da História",
        icone: "🏛️"
    },
    {
        nome: "Lenda Histórica",
        numero: "NÍVEL 03",
        recompensa: "Lenda Histórica",
        icone: "🏆"
    }
];

const letras = ["A", "B", "C", "D"];

const coresAlternativas = [
    "answer-a",
    "answer-b",
    "answer-c",
    "answer-d"
];

const TEMPO_QUESTAO = 30;

let nivelAtual = 0;
let questaoAtual = 0;

let pontuacaoTotal = 0;
let pontosTentativa = 0;

let acertos = 0;
let erros = 0;

let respondeu = false;

let niveisConcluidos = [];
let conquistas = [];

let tempoRestante = TEMPO_QUESTAO;
let intervaloCronometro = null;

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const retryButton = document.getElementById("retry-button");
const continueButton = document.getElementById("continue-button");
const restartButton = document.getElementById("restart-button");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");

const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");

const scoreElement = document.getElementById("score");
const questionCounter = document.getElementById("question-counter");

const progressBar = document.getElementById("progress-bar");
const progressPercentage = document.getElementById("progress-percentage");

const levelNumber = document.getElementById("level-number");
const levelName = document.getElementById("level-name");

const levelSummary = document.getElementById("level-summary");
const questionArea = document.querySelector(".question-area");

const timerElement = document.getElementById("timer");

/* Para o cronômetro */
function pararCronometro() {
    if (intervaloCronometro !== null) {
        clearInterval(intervaloCronometro);
        intervaloCronometro = null;
    }
}

/* Atualiza a aparência do cronômetro */
function atualizarCronometro() {
    if (!timerElement) return;

    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;

    timerElement.textContent =
        `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;

    if (tempoRestante <= 10) {
        timerElement.classList.add("timer-warning");
    } else {
        timerElement.classList.remove("timer-warning");
    }
}

/* Inicia a contagem regressiva */
function iniciarCronometro() {
    pararCronometro();

    tempoRestante = TEMPO_QUESTAO;
    atualizarCronometro();

    intervaloCronometro = setInterval(() => {
        tempoRestante--;

        atualizarCronometro();

        if (tempoRestante <= 0) {
            pararCronometro();

            if (!respondeu) {
                responderQuestao(null, true);
            }
        }
    }, 1000);
}

/* Troca de telas */
function mostrarTela(tela) {
    pararCronometro();

    startScreen.classList.remove("active");
    gameScreen.classList.remove("active");
    resultScreen.classList.remove("active");

    tela.classList.add("active");
}

/* Inicia uma nova partida */
function iniciarJogo() {
    nivelAtual = 0;
    questaoAtual = 0;

    pontuacaoTotal = 0;
    pontosTentativa = 0;

    acertos = 0;
    erros = 0;

    respondeu = false;

    niveisConcluidos = [];
    conquistas = [];

    pararCronometro();

    atualizarPlacar();
    atualizarConquistas();

    mostrarTela(gameScreen);
    carregarQuestao();
}

/* Placar */
function atualizarPlacar() {
    scoreElement.textContent = pontuacaoTotal;
}

/* Barra de progresso */
function atualizarProgresso() {
    const progresso = ((questaoAtual + 1) / 4) * 100;

    questionCounter.textContent =
        `Questão ${questaoAtual + 1} de 4`;

    progressPercentage.textContent = `${progresso}%`;

    progressBar.style.width = `${progresso}%`;
}

/* Carrega uma pergunta */
function carregarQuestao() {
    pararCronometro();

    respondeu = false;

    const questao = questoes[nivelAtual][questaoAtual];

    levelNumber.textContent = niveis[nivelAtual].numero;
    levelName.textContent = niveis[nivelAtual].nome;

    questionText.textContent = questao.pergunta;

    answersContainer.innerHTML = "";

    atualizarProgresso();

    feedback.hidden = true;
    feedback.className = "feedback";

    nextButton.hidden = true;

    nextButton.textContent =
        questaoAtual === 3
            ? "VER RESULTADO DO NÍVEL →"
            : "PRÓXIMA QUESTÃO →";

    questao.alternativas.forEach((alternativa, indice) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = `answer-button ${coresAlternativas[indice]}`;

        const letter = document.createElement("span");
        letter.className = "answer-letter";
        letter.textContent = letras[indice];

        const text = document.createElement("span");
        text.textContent = alternativa;

        button.appendChild(letter);
        button.appendChild(text);

        button.addEventListener("click", () => {
            responderQuestao(indice);
        });

        answersContainer.appendChild(button);
    });

    questionArea.hidden = false;
    levelSummary.hidden = true;

    iniciarCronometro();
}

/* Corrige a resposta ou registra o tempo esgotado */
function responderQuestao(indiceEscolhido, tempoEsgotado = false) {
    if (respondeu) {
        return;
    }

    respondeu = true;

    pararCronometro();

    const questao = questoes[nivelAtual][questaoAtual];

    const acertou =
        !tempoEsgotado && indiceEscolhido === questao.correta;

    const botoes = answersContainer.querySelectorAll(".answer-button");

    botoes.forEach((button, indice) => {
        button.disabled = true;

        if (indice === questao.correta) {
            button.classList.add("correct");
        }

        if (
            !tempoEsgotado &&
            indice === indiceEscolhido &&
            !acertou
        ) {
            button.classList.add("wrong");
        }
    });

    if (acertou) {
        acertos++;
        pontosTentativa += 10;

        feedback.className = "feedback success";
        feedbackTitle.textContent = "🏆 Resposta correta! +10 pontos";

    } else {
        erros++;

        feedback.className = "feedback error";

        if (tempoEsgotado) {
            feedbackTitle.textContent = "⏰ Tempo esgotado!";
        } else {
            feedbackTitle.textContent = "📜 Resposta incorreta!";
        }
    }

    feedbackText.textContent =
        `A resposta correta é: ${letras[questao.correta]}) ${questao.alternativas[questao.correta]}. ${questao.explicacao}`;

    feedback.hidden = false;

    nextButton.hidden = false;
}

/* Próxima pergunta */
function proximaQuestao() {
    if (!respondeu) {
        return;
    }

    pararCronometro();

    if (questaoAtual < 3) {
        questaoAtual++;
        carregarQuestao();
    } else {
        finalizarNivel();
    }
}

/* Finaliza o nível */
function finalizarNivel() {
    pararCronometro();

    questionArea.hidden = true;
    levelSummary.hidden = false;

    document.getElementById("summary-correct").textContent =
        `${acertos}/4`;

    document.getElementById("summary-icon").textContent =
        acertos >= 3 ? niveis[nivelAtual].icone : "📜";

    if (acertos >= 3) {
        pontuacaoTotal += pontosTentativa;

        if (!niveisConcluidos.includes(nivelAtual)) {
            niveisConcluidos.push(nivelAtual);
        }

        concederRecompensa(nivelAtual);

        document.getElementById("summary-title").textContent =
            "Expedição concluída!";

        document.getElementById("summary-message").textContent =
            `Parabéns! Você demonstrou seu conhecimento histórico, acertou ${acertos} questões e conquistou ${pontosTentativa} pontos nesta etapa. Uma nova etapa da história está esperando por você!`;

        retryButton.hidden = true;
        continueButton.hidden = false;

        atualizarPlacar();
        atualizarConquistas();

    } else {
        document.getElementById("summary-title").textContent =
            "Sua jornada continua!";

        document.getElementById("summary-message").textContent =
            `Você acertou ${acertos} questões. São necessários pelo menos 3 acertos para conquistar esta etapa. Os pontos desta tentativa foram descartados, mas suas conquistas anteriores continuam preservadas.`;

        retryButton.hidden = false;
        continueButton.hidden = true;

        pontosTentativa = 0;
    }
}

function concederRecompensa(nivel) {
    if (conquistas.includes(nivel)) {
        return;
    }

    conquistas.push(nivel);
}

function atualizarConquistas() {
    const itens = document.querySelectorAll(".achievement");

    itens.forEach((item, indice) => {
        if (conquistas.includes(indice)) {
            item.classList.remove("locked");
            item.classList.add("unlocked");
        } else {
            item.classList.remove("unlocked");
            item.classList.add("locked");
        }
    });
}

function repetirNivel() {
    questaoAtual = 0;

    acertos = 0;
    erros = 0;

    pontosTentativa = 0;

    carregarQuestao();
}

function avancarNivel() {
    if (nivelAtual < 2) {
        nivelAtual++;

        questaoAtual = 0;

        acertos = 0;
        erros = 0;

        pontosTentativa = 0;

        carregarQuestao();
    } else {
        mostrarResultados();
    }
}

function mostrarResultados() {
    pararCronometro();

    mostrarTela(resultScreen);

    document.getElementById("final-score").textContent =
        pontuacaoTotal;

    const lista = document.getElementById("final-achievements-list");

    lista.innerHTML = "";

    conquistas.forEach(indice => {
        const recompensa = niveis[indice];

        const badge = document.createElement("div");
        badge.className = "final-badge";

        const icon = document.createElement("span");
        icon.textContent = recompensa.icone;

        const title = document.createElement("strong");
        title.textContent = recompensa.recompensa;

        badge.appendChild(icon);
        badge.appendChild(title);

        lista.appendChild(badge);
    });

    const mensagem = document.getElementById("final-message");

    if (pontuacaoTotal === 120) {
        mensagem.textContent =
            "Incrível! Você acertou todas as 12 questões e alcançou a pontuação máxima. Seu conhecimento merece entrar para os livros de História!";
    } else if (pontuacaoTotal >= 90) {
        mensagem.textContent =
            "Excelente desempenho! Você demonstrou grande domínio sobre os acontecimentos históricos.";
    } else if (pontuacaoTotal >= 70) {
        mensagem.textContent =
            "Muito bem! Você concluiu sua jornada e ampliou seus conhecimentos sobre a História Geral.";
    } else {
        mensagem.textContent =
            "Sua jornada foi concluída! Continue estudando e descobrindo os acontecimentos que transformaram a humanidade.";
    }
}

function reiniciarJogo() {
    pararCronometro();

    nivelAtual = 0;
    questaoAtual = 0;

    pontuacaoTotal = 0;
    pontosTentativa = 0;

    acertos = 0;
    erros = 0;

    respondeu = false;

    tempoRestante = TEMPO_QUESTAO;

    niveisConcluidos = [];
    conquistas = [];

    atualizarPlacar();
    atualizarConquistas();

    levelSummary.hidden = true;
    questionArea.hidden = false;

    if (timerElement) {
        timerElement.textContent = "00:30";
        timerElement.classList.remove("timer-warning");
    }

    mostrarTela(startScreen);
}

startButton.addEventListener("click", iniciarJogo);

nextButton.addEventListener("click", proximaQuestao);

retryButton.addEventListener("click", repetirNivel);

continueButton.addEventListener("click", avancarNivel);

restartButton.addEventListener("click", reiniciarJogo);

const logo = document.querySelector(".brand");

if (logo) {
    logo.addEventListener("click", function(event) {
        event.preventDefault();
        reiniciarJogo();
    });
}


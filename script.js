const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const sceneImage = document.getElementById('scene-image');
const backgroundMusic = document.getElementById('background-music');
const soundEffect = document.getElementById('sound-effect');

let storyData = {
    start: {
        text: "Você está na entrada de uma floresta sombria. Você pode ouvir sons estranhos, como sussurros e o farfalhar das folhas.",
        choices: [
            { text: "Entrar na floresta", next: 'enter_forest', image: 'entrance.jpg' },
            { text: "Voltar para casa", next: 'go_home', image: 'home.jpg' }
        ]
    },
    enter_forest: {
        text: "Dentro da floresta, uma neblina densa se forma ao seu redor. Você vê dois caminhos: um à esquerda, iluminado, e outro à direita, escuro.",
        choices: [
            { text: "Seguir o caminho à esquerda", next: 'left_path', image: 'left_path.jpg' },
            { text: "Seguir o caminho à direita", next: 'right_path', image: 'right_path.jpg' }
        ]
    },
    left_path: {
        text: "Você se depara com um lago mágico, suas águas brilhando. Há uma pedra com inscrições antigas.",
        choices: [
            { text: "Beber da água", next: 'drink_water', image: 'lake.jpg' },
            { text: "Ler as inscrições", next: 'read_inscriptions', image: 'inscriptions.jpg' }
        ]
    },
    right_path: {
        text: "A escuridão se intensifica e você encontra uma caverna. Um brilho azul emana de dentro.",
        choices: [
            { text: "Entrar na caverna", next: 'enter_cave', image: 'cave.jpg' },
            { text: "Voltar para o caminho iluminado", next: 'enter_forest', image: 'forest.jpg' }
        ]
    },
    drink_water: {
        text: "A água do lago te dá poderes mágicos! Você se sente mais forte.",
        choices: [
            { text: "Explorar mais a floresta", next: 'explore_forest', image: 'explore.jpg' },
            { text: "Voltar para casa", next: 'go_home', image: 'home.jpg' }
        ]
    },
    read_inscriptions: {
        text: "As inscrições falam sobre um tesouro escondido. Você ganha um mapa misterioso.",
        choices: [
            { text: "Seguir o mapa", next: 'follow_map', image: 'map.jpg' },
            { text: "Deixar o mapa e voltar", next: 'enter_forest', image: 'forest.jpg' }
        ]
    },
    enter_cave: {
        text: "Dentro da caverna, você encontra um dragão feroz!",
        choices: [
            { text: "Tentar negociar com o dragão", next: 'negotiate_dragon', image: 'dragon.jpg' },
            { text: "Lutar contra o dragão", next: 'fight_dragon', image: 'fight.jpg' }
        ]
    },
    negotiate_dragon: {
        text: "O dragão parece impressionado e concorda em te deixar passar.",
        choices: [{ text: "Continuar sua aventura com o dragão", next: 'adventure_with_dragon', image: 'dragon_ally.jpg' }]
    },
    fight_dragon: {
        text: "Você lutou bravamente, mas o dragão é forte. Você se retira.",
        choices: [{ text: "Recomeçar", next: 'start', image: 'start.jpg' }]
    },
    explore_forest: {
        text: "Você se aventura mais fundo e encontra criaturas mágicas.",
        choices: [{ text: "Recomeçar", next: 'start', image: 'start.jpg' }]
    },
    follow_map: {
        text: "O mapa leva a uma caverna cheia de ouro e pedras preciosas!",
        choices: [{ text: "Recomeçar", next: 'start', image: 'start.jpg' }]
    },
    go_home: {
        text: "Você decidiu voltar para casa. Fim da aventura.",
        choices: [{ text: "Recomeçar", next: 'start', image: 'start.jpg' }]
    },
    adventure_with_dragon: {
        text: "Você e o dragão partem em uma grande aventura.",
        choices: [{ text: "Recomeçar", next: 'start', image: 'start.jpg' }]
    }
};

function startGame(node) {
    const currentNode = storyData[node];
    storyElement.innerText = currentNode.text;
    choicesElement.innerHTML = '';
    sceneImage.src = currentNode.choices[0].image || '';

    currentNode.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            soundEffect.play();
            startGame(choice.next);
        };
        choicesElement.appendChild(button);
    });

    // Tocar música de fundo ao iniciar o jogo
    if (node === 'start') {
        backgroundMusic.play();
    }
}

startGame('start');

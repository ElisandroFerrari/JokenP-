const results = document.querySelector('.results')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

// Troquei o link da pedra para um mais estável
const gameData = {
    rock: { 
        emoji: '<img src="./assets/pedra.png" class="img-icon">', 
        color: 'rgba(50, 205, 50, .5)' 
    },
    paper: { 
        emoji: '<img src="https://img.icons8.com/emoji/48/000000/raised-hand-emoji.png" class="img-icon">', 
        color: 'rgba(30, 144, 255, .5)' 
    },
    scissors: { 
        emoji: '<img src="https://img.icons8.com/emoji/48/000000/victory-hand-emoji.png" class="img-icon">', 
        color: 'rgba(220, 20, 60, .5)' 
    },
    lizard: { 
        emoji: '<img src="https://img.icons8.com/emoji/48/000000/lizard-emoji.png" class="img-icon">', 
        color: 'rgba(147, 112, 219, .5)' 
    },
    spock: { 
        emoji: '<img src="https://img.icons8.com/emoji/48/000000/vulcan-salute-emoji.png" class="img-icon">', 
        color: 'rgba(255, 165, 0, .5)' 
    }
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    const randomNumber = Math.floor(Math.random() * 5)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    const arena = document.querySelector('#vs-arena')
    const playerDisplay = document.querySelector('#player-display')
    const machineDisplay = document.querySelector('#machine-display')

    arena.style.display = 'flex'
    playerDisplay.innerHTML = gameData[human].emoji
    playerDisplay.style.backgroundColor = gameData[human].color
    machineDisplay.innerHTML = gameData[machine].emoji
    machineDisplay.style.backgroundColor = gameData[machine].color

    if (human === machine) {
        results.innerHTML = "Deu empate!"
    } else if (
        (human === 'scissors' && (machine === 'paper' || machine === 'lizard')) ||
        (human === 'paper' && (machine === 'rock' || machine === 'spock')) ||
        (human === 'rock' && (machine === 'lizard' || machine === 'scissors')) ||
        (human === 'lizard' && (machine === 'spock' || machine === 'paper')) ||
        (human === 'spock' && (machine === 'scissors' || machine === 'rock'))
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        results.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        results.innerHTML = "CPU ganhou!"
    }
}
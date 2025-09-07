const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let choice = prompt('Make your choice:').toLowerCase();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playGame() {
    
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    const tieMessage = `It's a tie. ${humanChoice} ties ${computerChoice}.`;
    const winMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
    const loseMessage = `You lose. ${humanChoice} loses to ${computerChoice}.`;

    let roundResult = '';

    // humanChoice 'Rock'
    if (humanChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            roundResult = winMessage;
            humanScore++
        } else if (computerChoice === 'Paper') {
            roundResult = loseMessage;
            computerScore++;
        }
    }
    // humanChoice 'Paper'
    if (humanChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            roundResult = winMessage;
            humanScore++;
        } else if (computerChoice === 'Scissors') {
            roundResult = loseMessage;
            computerScore++;
        }
    }
    // humanChoice 'Scissors'
    if (humanChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            roundResult = winMessage;
            humanScore++;
        } else if (computerChoice === 'Rock') {
            roundResult = loseMessage;
            computerScore++;
        }
    }
    // tie result
    if (humanChoice === computerChoice) {
        roundResult = tieMessage;
    }
            
    return console.log(roundResult);
}

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

//gameResults
if (humanScore > computerScore) {
    console.log(`Congrats, you win the game! Player: ${humanScore}, Computer: ${computerScore}`);
} else if (humanScore < computerScore) {
    console.log(`Sorry, you lose the game. Player: ${humanScore}, Computer: ${computerScore}`);
} else if (humanScore === computerScore) {
    console.log(`Tie game! Player: ${humanScore}, Computer: ${computerScore}`);
}

}

playGame();
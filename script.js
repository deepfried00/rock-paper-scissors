function getComputerChoice() {
    const randomnum = Math.random();
    if ( randomnum < 0.33 ) {
        return "rock";
    }
    else if ( randomnum  < 0.5) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


let humanScore = 0;
let computerScore = 0;

let humanChoice = document.querySelector('.humanchoice');
humanChoice.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const playerChoice = event.target.id;
        playRound(playerChoice, getComputerChoice());

    }
});


const message = document.querySelector('.result');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');
function playRound( humanChoice , computerChoice) {
    if (humanChoice == computerChoice) {
        message.innerHTML = `Tie! You both chose " ${humanChoice} <br>` ;
        humanScore ++;
        computerScore ++;

    }
    else if  (humanChoice == "rock" && computerChoice == "scissors" || 
                humanChoice == "paper"  && computerChoice == "rock" ||
                humanChoice == "scissors" && computerChoice == "paper") {
        message.innerHTML = `You win! " ${humanChoice} " beats "${computerChoice} <br>`;
        humanScore ++; 
        }
    else {
        message.innerHTML = `You lose! "  ${computerChoice} " beats "  ${humanChoice} <br>`;        computerScore ++;
    }
    score.innerHTML = `Score: You ${humanScore} - Computer ${computerScore} <br>`;
    
    if (humanScore >= 5 || computerScore >= 5) {


        if (humanScore > computerScore) {
            winner.innerHTML = `You win the game! Final score: ${humanScore} to ${computerScore}`;
        } else if (humanScore < computerScore) {
            winner.innerHTML = `You lose the game! Final score: ${humanScore} to ${computerScore}`;
        } else {
            winner.innerHTML = `It's a tie! Final score: ${humanScore} to ${computerScore}`;      
          
    }
    const buttons = document.querySelectorAll('.humanchoice button');
    buttons.forEach(button => {
        button.disabled = true;;
    });


};
}
 


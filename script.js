

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

function getHumanChoice () {
   return choice = prompt("Please enter rock, paper or scissors").toLowerCase(); 
}


let humanScore = 0;
let computerScore = 0;

playGame();


function playRound( humanChoice , computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie! You both chose " + humanChoice);
        humanScore ++;
        computerScore ++;
    }
    else if  (humanChoice == "rock" && computerChoice == "scissors" || 
                humanChoice == "paper"  && computerChoice == "rock" ||
                humanChoice == "scissors" && computerChoice == "paper") {

        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore ++; 
        }
    else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore ++;
    }
}

console.log( "humanScore:  "+ humanScore + " computerScore: " + computerScore);

function playGame() {
    for (let i = 0; i < 5; i++) {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log("You win the game! Final score: " + humanScore + " to " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lose the game! Final score: " + humanScore + " to " + computerScore);
    } else {
        console.log("It's a tie! Final score: " + humanScore + " to " + computerScore);
    }
}

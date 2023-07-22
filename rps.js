
let playerChoice

function getPlayerChoice(){
    const input = prompt("Rock, Paper, or Scissors?");
    playerChoice = input.toLowerCase();
    console.log(playerChoice);
} 


const choice = ["rock","paper","scissors"];
console.log(choice);

let computerChoice

function getComputerChoice(arr) {
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice;
}


let playerScore = 0;
let computerScore = 0;


function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice) {
        console.log("It's a tie!")
    }  
    else if(playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        playerScore += 1;
        console.log(playerScore);
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.")
        playerScore += 1;
        console.log(playerScore);
    }
    else if(playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.")
        playerScore += 1;
        console.log(playerScore);
    }
    else if(playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.")
        computerScore += 1;
        console.log(computerScore);
    }
    else if(playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.")
        computerScore += 1;
        console.log(computerScore);
    }
    else if(playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
        console.log(computerScore);
    }
}

function declareWinner() {
    if(computerScore === 5) {
        console.log("The computer won! Try again!");
    }
    else if(playerScore === 5) {
        console.log("Hooray! You beat the computer!");
    }
}

function playGame(){
    while (playerScore < 5 && computerScore < 5){
        getPlayerChoice();
        if (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
            alert("Invalid input");
        }
        getComputerChoice(choice);
        playRound(playerChoice, computerChoice);
        
    }
    declareWinner();

}

playGame();


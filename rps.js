
const input = prompt("Rock, Paper, or Scissors?");
const playerChoice = input.toLowerCase();
console.log(playerChoice);

/*

if (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
    alert("Invalid input");
}

*/

const choice = ["rock","paper","scissors"];
console.log(choice);

let computerChoice

function getComputerChoice(arr) {
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice;
}

getComputerChoice(choice);

console.log(computerChoice); 


function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice) {
        console.log("It's a tie!")
    }  
    else if(playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.")
    }
    else if(playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.")
    }
    else if(playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.")
    }
    else if(playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.")
    }
    else if(playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
    }
}

playRound(playerChoice, computerChoice);



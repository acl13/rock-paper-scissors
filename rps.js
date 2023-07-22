
const input = prompt("Rock, Paper, or Scissors?");
const playerChoice = input.toLowerCase();
console.log(playerChoice);



if (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
    alert("Invalid input");
}



const choice = ["rock","paper","scissors"];
console.log(choice);

let computerChoice

function getComputerChoice(arr) {
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice;
}

getComputerChoice(choice);

console.log(computerChoice);



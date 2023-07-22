const input = prompt("Rock, Paper, or Scissors?");
const playerChoice = input.toLowerCase();
console.log(playerChoice);

if (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
    alert("Invalid input");
}

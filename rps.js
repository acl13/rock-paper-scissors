let computerChoice

const choice = ["rock","paper","scissors"];
console.log(choice);


function getComputerChoice(arr) {
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

const p1 = document.querySelector("#player");
const p2 = document.querySelector("#computer");
const comments = document.querySelector(".comments");
const gameOver = document.querySelector(".end");
const refresh = document.querySelector(".refresh");


function playRound(playerChoice, computerChoice){
    if(playerChoice === computerChoice) {
        comments.textContent = "It's a tie!";
    }  
    else if(playerChoice === "rock" && computerChoice === "scissors") {
        comments.textContent = "You win! Rock beats scissors.";
        playerScore += 1;
        p1.textContent = playerScore;
        if (playerScore === 5) {
            declareWinner();
        } else {
        return playerScore;
        }
        
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        comments.textContent = "You win! Paper beats rock."
        playerScore += 1;
        p1.textContent = playerScore;
        if (playerScore === 5) {
            declareWinner();
        } else {
        return playerScore;
        }
        
    }
    else if(playerChoice === "scissors" && computerChoice === "paper") {
        comments.textContent = "You win! Scissors beats paper."
        playerScore += 1;
        p1.textContent = playerScore;
        if (playerScore === 5) {
            declareWinner();
        } else {
        return playerScore;
        }
        
    }
    else if(playerChoice === "rock" && computerChoice === "paper") {
        comments.textContent = "You lose! Paper beats rock."
        computerScore += 1;
        p2.textContent = computerScore;
        if (computerScore === 5) {
            declareWinner();
        } else {
        return computerScore;
        }
    }
    else if(playerChoice === "paper" && computerChoice === "scissors") {
        comments.textContent = "You lose! Scissors beats paper."
        computerScore += 1;
        p2.textContent = computerScore;
        if (computerScore === 5) {
            declareWinner();
        } else {
        return computerScore;
        }
        
    }
    else if(playerChoice === "scissors" && computerChoice === "rock") {
        comments.textContent = "You lose! Rock beats scissors.";
        computerScore += 1;
        p2.textContent = computerScore;
        if (computerScore === 5) {
            declareWinner();
        } else {
        return computerScore;
        }
    } else {
        console.log("whoops, something went wrong...")
    }
} 

    

function declareWinner() {
gameOver.textContent = "Game Over";
refresh.textContent = "Please refresh the page to play again."
document.removeEventListener("click", function(event) {});
    if(computerScore > playerScore) {
        comments.textContent = "The computer won! Try again!";
    }
    else if(playerScore > computerScore) {
        comments.textContent = "Hooray! You beat the computer!";
    }
    else {
        console.log("whoops");
    }
}



let playerChoice;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


document.addEventListener("click", function(event) {
    if (event.target.matches('#rock')){
        playerChoice = "rock";
        console.log(playerChoice);
        getComputerChoice(choice);
        playRound(playerChoice, computerChoice);
    } else if(event.target.matches("#scissors")) {
        playerChoice = "scissors"
        console.log(playerChoice);
        getComputerChoice(choice);
        playRound(playerChoice, computerChoice);
    } else if(event.target.matches("#paper")) {
        playerChoice = "paper"
        console.log(playerChoice);
        getComputerChoice(choice);
        playRound(playerChoice, computerChoice);
    }

    });

  









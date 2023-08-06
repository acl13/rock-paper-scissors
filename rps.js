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



function playRound(playerChoice, computerChoice){
    getComputerChoice(choice);
    if(playerChoice === computerChoice) {
        console.log("It's a tie!")
    }  
    else if(playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        playerScore += 1;
        p1.textContent = playerScore;
        return playerScore;
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.")
        playerScore += 1;
        p1.textContent = playerScore;
        return playerScore;
    }
    else if(playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.")
        playerScore += 1;
        p1.textContent = playerScore;
        return playerScore;
    }
    else if(playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.")
        computerScore += 1;
        p2.textContent = computerScore;
        return computerScore;
    }
    else if(playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.")
        computerScore += 1;
        p2.textContent = computerScore;
        return computerScore;
    }
    else if(playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
        p2.textContent = computerScore;
        return computerScore;
    }
    }
   


/*

let computerChoice

const choice = ["rock","paper","scissors"];
console.log(choice);


function getComputerChoice(arr) {
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice;
}

*/

/*
let playerChoice;

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playerChoice = "rock";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playerChoice = "paper";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
});

*/


/*

let playerChoice

function getPlayerChoice(){
    const input = prompt("Rock, Paper, or Scissors?");
    playerChoice = input.toLowerCase();
    console.log(playerChoice);
} 

*/ 

/*

let computerChoice

const choice = ["rock","paper","scissors"];
console.log(choice);


function getComputerChoice(arr) {
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    return computerChoice;
}


*/

//const p1 = document.querySelector("#player");
//const p2 = document.querySelector("#computer");


/*
let playerScore = 0;
let computerScore = 0;


function playRound(playerChoice, computerChoice){
    getComputerChoice(choice);
    if(playerChoice === computerChoice) {
        console.log("It's a tie!")
    }  
    else if(playerChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        playerScore += 1;
        //p1.textContent = playerScore;
    }
    else if(playerChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.")
        playerScore += 1;
       //p1.textContent = playerScore;
    }
    else if(playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.")
        playerScore += 1;
        //p1.textContent = playerScore;
    }
    else if(playerChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats rock.")
        computerScore += 1;
        //p2.textContent = computerScore;
    }
    else if(playerChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats paper.")
        computerScore += 1;
        //p2.textContent = computerScore;
    }
    else if(playerChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
        //p2.textContent = computerScore;
    }
}
*/

function declareWinner() {
    if(computerScore > playerScore) {
        console.log("The computer won! Try again!");
    }
    else if(playerScore > computerScore) {
        console.log("Hooray! You beat the computer!");
    }
    else {
        console.log("whoops");
    }
}


let playerChoice;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

/*

function chooseRock(e){
   
    playerChoice = "rock";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
    
}

// rock.addEventListener("click", chooseRock);  

 function choosePaper(e){
    playerChoice = "paper";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
    };

 //paper.addEventListener("click", choosePaper); 

 function chooseScissors(e){
    playerChoice = "scissors";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
    };

 //scissors.addEventListener("click", chooseScissors); 

 */

document.addEventListener("click", function(event) {
    if (event.target.matches('#rock')){
        playerChoice = "rock";
        console.log(playerChoice);
    } else if(event.target.matches("#scissors")) {
        playerChoice = "scissors"
        console.log(playerChoice);
    } else if(event.target.matches("#paper")) {
        playerChoice = "paper"
        console.log(playerChoice);
    }

    });


/*

 function playGame() {
   
     rock.addEventListener("click", chooseRock); 
     paper.addEventListener("click", choosePaper); 
    scissors.addEventListener("click", chooseScissors);
   
 }

 playGame();

 */
    
    /*
    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
    playerChoice = "paper";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
    p1.textContent = playerScore;
    p2.textContent = computerScore;
    });
    
    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
    p1.textContent = playerScore;
    p2.textContent = computerScore;
    });  */
     
/*

function getPlayerChoice(){
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
playerChoice = "rock";
console.log(playerChoice);
playRound(playerChoice, computerChoice);
p1.textContent = playerScore;
p2.textContent = computerScore;
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
playerChoice = "paper";
console.log(playerChoice);
playRound(playerChoice, computerChoice);
p1.textContent = playerScore;
p2.textContent = computerScore;
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
playerChoice = "scissors";
console.log(playerChoice);
playRound(playerChoice, computerChoice);
p1.textContent = playerScore;
p2.textContent = computerScore;
});
} 


function playGame(){
    getPlayerChoice();
    console.log(`playerscore ${playerScore}`);
    console.log(`comscore ${computerScore}`); 
    
  

}

*/

/*
function getPlayerChoice(e) {
    const btn = document.querySelector('button');
    btn.addEventListener("click", () => {
        playerChoice = `test`;
        console.log(playerChoice);
    })
}

*/




//getPlayerChoice();

/*
function declareWinner() {
    if(computerScore === 5) {
        console.log("The computer won! Try again!");
    }
    else if(playerScore === 5) {
        console.log("Hooray! You beat the computer!");
    }
}
*/

/*

function playGame(){
    
        getPlayerChoice(); 
        console.log(`playerscore ${playerScore}`);
    console.log(`comscore ${computerScore}`); 

    } 
  
*/


 //playGame();



/*

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

*/

/*

let playerChoice;

function playGame(){
while (playerScore < 5 && computerScore < 5){
    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
    playerChoice = "rock";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
});

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
    playerChoice = "paper";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
});

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    console.log(playerChoice);
    playRound(playerChoice, computerChoice);
});
} 
 declareWinner();
}
//}

playGame();

*/
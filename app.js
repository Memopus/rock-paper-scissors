const choices = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let userScore = 0;

let playerSelection = prompt("Rock , Paper , Scissors ? ");
let computerSelection = getComputerChoice();

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissors") {
    console.log("You won ! Rock beats Scissors");
    alert("You won ! Rock beats Scissors");
    userScore++;
  } else if (playerSelection === computerSelection) {
    console.log("Tie Game");
    alert("Tie Game");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    console.log("You won ! Rock beats Scissors");
    alert("You won ! Rock beats Scissors");
    userScore++;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    console.log("You won ! Rock beats Scissors");
    alert("You won ! Rock beats Scissors");
    userScore++;
  } else {
    console.log(`You Lose ! ${computerSelection} beats ${playerSelection}`);
    alert(`You Lose ! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
}

function getWinner() {
  if (userScore > computerScore) {
    return "Congrats!! You won";
  } else if (computerScore > userScore) {
    return "Computer won :(";
  }
}

for (let i = 0; i <= 5; i++) {
  playRound(playerSelection, computerSelection);
  playerSelection = prompt("Rock , Paper , Scissors ? ");
  computerSelection = getComputerChoice();
  console.log(`Computer Score :${computerScore} PlayerScore : ${userScore}`);
  if (i === 5) {
    getWinner();
  }
}

const options = ["rock", "paper", "scissors"];
const choices = document.querySelectorAll(".choice");
const score = document.querySelector(".scores");
const playerDiv = document.querySelector(".player");
const computerDiv = document.querySelector(".computer");
const result = document.querySelector(".result");
const outputs = document.querySelector(".outputs");
const selections = document.querySelector(".selections");
const userScore = document.createElement("p");
const machineScore = document.createElement("p");
const comment = document.createElement("h2");
const computerSelection = document.createElement("img");
const playerSelection = document.createElement("img");
outputs.insertBefore(comment, selections);

let playerScore = 0;
let computerScore = 0;

console.log(choices);
choices.forEach((item) => {
  item.addEventListener("click", (e) => {
    const computerChoice = getComputerChoice();
    game(e.target.alt, computerChoice);
    userScore.textContent = `Your Score : ${playerScore}`;

    machineScore.textContent = `Machine Score : ${computerScore}`;
    console.log(e.target.src);
    playerSelection.src = `${e.target.src}`;
    computerSelection.src = `assets/${computerChoice}.png`;
    computerDiv.appendChild(computerSelection);
    playerDiv.appendChild(playerSelection);
    computerDiv.appendChild(machineScore);
    playerDiv.appendChild(userScore);

    if (playerScore === 5) {
      const body = document.querySelector("body");
      document.getElementById("result").textContent = "You Won !!!!";
      document.querySelector("button").addEventListener("click", reset);
      document.querySelector(".choices").classList.add("stop");
      result.classList.add("active");
    }
    if (computerScore === 5) {
      result.classList.add("active");
      document.getElementById("result").textContent = "You Lost ...";
      document.querySelector(".choices").classList.add("stop");

      document.querySelector("button").addEventListener("click", reset);
    }
  });
});

function game(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You won ! Rock beats Scissors");

    comment.textContent = `You Won !!! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else if (playerSelection === computerSelection) {
    console.log("Tie Game");
    playerSelection.src = `assets/${playerSelection}.png`;
    computerSelection.src = `assets/${computerSelection}.png`;

    comment.textContent = `Tie Game`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You won ! Rock beats Scissors");
    comment.textContent = `You Won !!! ${playerSelection} beats ${computerSelection}`;
    playerSelection.src = `assets/${playerSelection}.png`;
    computerSelection.src = `assets/${computerSelection}.png`;

    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You won ! Rock beats Scissors");
    comment.textContent = `You Won !!! ${playerSelection} beats ${computerSelection}`;
    playerSelection.src = `assets/${playerSelection}.png`;
    computerSelection.src = `assets/${computerSelection}.png`;

    playerScore++;
  } else if (playerSelection === undefined) {
    comment.textContent = "Please Select a valid option";
  } else {
    console.log(`You Lose ! ${computerSelection} beats ${playerSelection}`);
    comment.textContent = `You Lose ! ${computerSelection} beats ${playerSelection}`;
    playerSelection.src = `assets/${playerSelection}.png`;
    computerSelection.src = `assets/${computerSelection}.png`;
    console.log(playerSelection.src);
    computerScore++;
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  userScore.textContent = `Your Score : ${playerScore}`;
  machineScore.textContent = `Machine Score : ${computerScore}`;
  comment.textContent = "";
  document.querySelector(".choices").classList.remove("stop");
  result.classList.remove("active");
}

// const
// const choices = ["Rock", "Paper", "Scissors"];
// let computerScore = 0;
// let userScore = 0;

// let playerSelection = prompt("Rock , Paper , Scissors ? ");
// let computerSelection = getComputerChoice();

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === "Rock" && computerSelection === "Scissors") {
//     console.log("You won ! Rock beats Scissors");
//     alert("You won ! Rock beats Scissors");
//     userScore++;
//   } else if (playerSelection === computerSelection) {
//     console.log("Tie Game");
//     alert("Tie Game");
//   } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//     console.log("You won ! Rock beats Scissors");
//     alert("You won ! Rock beats Scissors");
//     userScore++;
//   } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//     console.log("You won ! Rock beats Scissors");
//     alert("You won ! Rock beats Scissors");
//     userScore++;
//   } else {
//     console.log(`You Lose ! ${computerSelection} beats ${playerSelection}`);
//     alert(`You Lose ! ${computerSelection} beats ${playerSelection}`);
//     computerScore++;
//   }
// }

// function getWinner() {
//   if (userScore > computerScore) {
//     return "Congrats!! You won";
//   } else if (computerScore > userScore) {
//     return "Computer won :(";
//   }
// }

// for (let i = 0; i <= 5; i++) {
//   playRound(playerSelection, computerSelection);
//   playerSelection = prompt("Rock , Paper , Scissors ? ");
//   computerSelection = getComputerChoice();
//   console.log(`Computer Score :${computerScore} PlayerScore : ${userScore}`);
//   if (i === 5) {
//     getWinner();
//   }
// }

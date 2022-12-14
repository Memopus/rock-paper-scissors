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

playerSelection.src = `assets/interrogation.png`;
computerSelection.src = `assets/interrogation.png`;
comment.textContent = "Choose a Weapon";

computerDiv.appendChild(computerSelection);
playerDiv.appendChild(playerSelection);

userScore.textContent = `Your Score : 0`;
machineScore.textContent = `Machine Score : 0`;

computerDiv.appendChild(machineScore);
playerDiv.appendChild(userScore);

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

    if (playerScore === 5) {
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
  comment.textContent = "Choose a Weapon";
  playerSelection.src = `assets/interrogation.png`;
  computerSelection.src = `assets/interrogation.png`;
  document.querySelector(".choices").classList.remove("stop");
  result.classList.remove("active");
}

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

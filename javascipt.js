function getComputerChoice() {
  const computer_Choice = Math.floor(Math.random() * 3);

  if (computer_Choice === 0) {
    return "rock";
  } else if (computer_Choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
//console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("Please enter your input;");

  return choice.toLowerCase();
}
//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  } else {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    humanScore++;
  }
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i}`);
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You won the game");
  } else {
    console.log("You lost the game");
  }
}
playGame();

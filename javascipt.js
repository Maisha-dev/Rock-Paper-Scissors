let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  return ["rock", "paper", "scissors"][random];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    computerScore++;
    return `You lose!  ${computerChoice}  beats  ${humanChoice}`;
  } else {
    humanScore++;
    return `You win!   ${humanChoice}   beats ${computerChoice}`;
  }
}

const btn = document.querySelectorAll("button");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    document.getElementById("result").textContent = result;
    document.getElementById(
      "score"
    ).textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
  });
});

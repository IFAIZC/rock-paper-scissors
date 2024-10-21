console.log("Welcome to RPS game!")

let getHumanChoice = prompt("Please choose [Rock, Paper or Scissors]");
    console.log("You chose: " + getHumanChoice);

const getComputerChoice = ["Rock", "Paper", "Scissors"];
const randomIndex = Math.floor(Math.random() * getComputerChoice.length);
const computerChoice = getComputerChoice[randomIndex];
    console.log("Computer chose: " + computerChoice);

if (getHumanChoice === computerChoice) {
    console.log("It's a tie!");
} else if (getHumanChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You win! Rock crushses Scissors!");
} else if (getHumanChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win! Paper covers Rock!");
} else if (getHumanChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You win! Scissors cut Paper!");
} else {
    console.log("You lose!" + computerChoice + " beats " + getHumanChoice + ".");
}


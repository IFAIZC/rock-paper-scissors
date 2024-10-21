console.log("Welcome to RPS game!")

let getHumanChoice = prompt("Please choose [Rock, Paper or Scissors]");
console.log(getHumanChoice);

const getComputerChoice = ["Rock", "Paper", "Scissors"];
const randomIndex = Math.floor(Math.random() * getComputerChoice.length);
console.log(getComputerChoice[randomIndex]);

console.log("You chose: " + getHumanChoice);
console.log("Computer chose: " + getComputerChoice[randomIndex]);


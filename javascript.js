// Initial greeting
console.log("Welcome to the Rock, Paper, Scissors game!");

// Initial Scores
let humanScore = 0;
let computerScore = 0;
const scoreLimit = 5; // The score limit to win

// Function to play a single round of Rock, Paper, Scissors
function playRound() {
    // Get human choice from the prompt
    let getHumanChoice = prompt("Please choose [Rock, Paper or Scissors]");
    console.log("You chose: " + getHumanChoice);

    // Get random computer choice
    const getComputerChoice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * getComputerChoice.length);
    const computerChoice = getComputerChoice[randomIndex];
    console.log("Computer chose: " + computerChoice);

    // Determine the winner
    if (getHumanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (getHumanChoice === "Rock" && computerChoice === "Scissors" ||
               getHumanChoice === "Paper" && computerChoice === "Rock" ||
               getHumanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! " + getHumanChoice + " beats " + computerChoice + "!");
        humanScore += 1; // Increase human score
    } else {
        console.log("You lose! " + computerChoice + " beats " + getHumanChoice + ".");
        computerScore += 1; // Increase computer score
    }

    // Show current score
    console.log(`Current Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

// Function to simulate the game until one reaches the score limit
function playGame() {
    while (humanScore < scoreLimit && computerScore < scoreLimit) {
        playRound(); // Play a round
    }

    // Determine and show the overall winner
    if (humanScore === scoreLimit) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore === scoreLimit) {
        console.log("Game over! The computer won the game.");
    }
}

// Start the game
playGame();

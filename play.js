// score board

let wins = 0;
let losses = 0;
let ties = 0;
let timer;
const timeLimit = 10; // Time limit in seconds


// Computer choice function
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}


// Player choice function

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        ties++;
        return "It's a tie!";
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        wins++;
        return "You win!";
    }
    
    losses++;
    return "Computer wins!";
}

// Game logic function
function updateScore() {
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('ties').innerText = ties;
}

// Function Start time 
function startTimer() {
    let timeLeft = timeLimit;
    document.getElementById('timeLeft').innerText = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timeLeft').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Time's up! The computer will choose for you.");
            playGame(getComputerChoice());
        }
    }, 1000);
}
// function player
function playerSelect(playerChoice) {
    clearInterval(timer); // Stop the timer when the player makes a choice
    playGame(playerChoice);
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    document.getElementById('result').innerHTML = `
        You chose: <strong>${playerChoice}</strong><br>
        Computer chose: <strong>${computerChoice}</strong><br>
        Result: <strong>${result}</strong>
    `;
    updateScore();
    startTimer(); // Restart the timer for the next round
}

// Start the timer when the page loads
window.onload = startTimer;
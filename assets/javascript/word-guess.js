

// Global Variables================================================================
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Here is my randon letter selector
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);
console.log("=====================");

//Guess counter
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


// FUNCTIONS ==========================================================================
document.onkeyup = function (event) {

    var playerGuess = event.key;

    // Here user wins are logged and if guessed correctly resets
    if (playerGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        document.getElementById("my-wins").innerText = wins;
        document.getElementById("guesses-left").innerText = guessesLeft;
        
    // Here guesses left counts down to 0
    } if (playerGuess != computerGuess) {
        //guessesLeft--;
        guessesLeft--;
        document.getElementById("guesses-left").innerText = guessesLeft;

    // If player guess is not the same as computer guess a loss is added
    } if (guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
        document.getElementById("my-losses").innerText = losses;

    // Here guessed letter is displayed    
    } if (guessesSoFar != computerGuess) {
        document.getElementById("my-guessed-letters").innerText = playerGuess;
    }
}


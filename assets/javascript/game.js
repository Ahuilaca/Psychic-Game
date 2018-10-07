
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var letterGuess = Math.floor(Math.random() * 26);
var computerGuess = alphabet[letterGuess];


//Guess counter
var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];


document.onkeyup = function (event) {

    //Need to place a reset here. Having difficulty with a reset that works
    var reset = function() {
        computerGuess;
    }
    var playerGuess = event.key;

    //Here user wins are logged. Because I couldn't figure out the reset the game would not start anew and the same letter would win repeatedly.
    if (playerGuess === computerGuess) {
        wins++;
        document.getElementById("my-wins").innerText = wins;
        (guesses) = 0;
        reset(computerGuess);

    } if (playerGuess != computerGuess) {
        losses++;
        document.getElementById("my-losses").innerText = losses;

    } if (playerGuess != computerGuess) {
        guesses --;
        document.getElementById("my-guess").innerText = guesses;

    } if (guesses === 0) {
        guesses = 9;
        losses ++;
        guessedLetters = [];

    }


    //function ()
    //playerGuess.push("my-guessed-letters: " + 1);
}




//guessedLetters.push(playerGuess);
alphabet.push

   //document.getElementById("my-guesses").innerHTML = alphabet[1];

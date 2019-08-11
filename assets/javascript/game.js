

//to determine if its the first keypress of the game
var firstTime = true;

//if games <0, change ./assets/images/titleContinue.png to ./assets/images/titleRestart.png
var games = 0;

var wins = 0;
var losses = 0;

//if remainingGuesses =0, run function to enable a restart of game with any keypress
var remainingGuesses = 10;
var failedGuesses = [];

//all guesses -- MAKE ONLY FAILED ONES !!!!!!!!
var guesses = [];

//current word being guessed (initially in underscores) !!!!!!!
var currentWord = "";

//the word currently being guessed !!!!!!!!
var correctWord = "";

//to display stats to html
document.getElementById("winCount").innerHTML = wins;
document.getElementById("lossCount").innerHTML = losses;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
document.getElementById("failedGuesses").innerHTML = guesses;


//CODE TO DISPLAY CORRECT CURRENT AMOUNT OF REMAINING ATTEMPTS
/* for (q = remainingGuesses; q > 0; q--) {
    remainingGuesses = q;
} */




//███████████████████████████████████████████████████████████

//keyThatWasPressed tells us WHAT key was pressed, and true or false depending on if it is a letter or not.

document.addEventListener('keydown', keyThatWasPressed);

function keyThatWasPressed(event) {
    var key = event.key;
    console.log(event.key);
    var regEx = /^[a-z]{1}$/i;
    var validKey = regEx.test(key);
    console.log(validKey);


    var isKeyInCorrectWord = (correctWord.indexOf(String(event.key)));





    //IF KEY IS PRESSED, AND IT IS NOT THE FIRST TIME, AND IT IS A LETTER, CONTINUE...
    if (!firstTime && validKey) {
        //IF LETTER IS PRESENT IN THE CORRECT WORD
        if (isKeyInCorrectWord !== -1) {
            console.log("THIS LETTER IS IN THE WORD!")
            //FIGURE OUT WHERE THAT LETTER IS IN THE CORRECT WORD AND REPLACE THAT SAME SLOT IN THE UNDERSCORE STRING
            for(var i=0; i<currentWord.length; i++) {
                if (correctWord[i] == String(event.key))
                    var correctLetter = currentWord.concat(String(event.key))
                    document.getElementById("currentWord").innerHTML = correctLetter;
            }








        }
        else if (guesses.includes(String(event.key))) {
            //DO NOTHING
        }

        else {
            guesses.push(String(event.key));
            document.getElementById("failedGuesses").innerHTML = guesses.join("");

        }
    }

    //This initiates the randomizer when ANY key is pressed, only if its the first key press.
    if (firstTime && event.key) {
        pickWord();
        firstTime = false;
        document.getElementById('image').src="./assets/images/titleDuring.png";
    }
}

//███████████████████████████████████████████████████████████









//███████████████████████████████████████████████████████████

var pickWord = function() {

  var wordBank = [
    "charizard",
    "gengar",
    "alakazam",
    "gyrados",
    "kabutops",
    "victreebel",
    "golem",
    "machamp",
    "nidoking",
    "snorlax"
  ];

  var wordNumber = Math.floor(Math.random() * 10);
  console.log(wordNumber);

  correctWord = (wordBank[wordNumber])
  console.log(wordBank[wordNumber]);
  var letters = wordBank[wordNumber].split('');
  var wordLength = wordBank[wordNumber].length;
  console.log(wordLength);

  for (i = 0; i < wordLength; i++) {
    oneUnderScore = "_";
    currentWord = currentWord.concat(oneUnderScore)
    document.getElementById("currentWord").innerHTML = currentWord;
  };

  return letters;
};





//███████████████████████████████████████████████████████████







//Guess
function processGuess(guess) {
  // Check to see if they have already used this letters
  for (i = 0; i < guesses.length; i++) {
    if (guess == guesses[i]) {
      return;
    }
  }

  for (j = 0; j = letters.length; j++) {

  }


}




























/* I know what I have to do, just not how to make it happen










*/











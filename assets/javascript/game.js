

//███████████████████████████████████████████████████████████

//keyThatWasPressed tells us WHAT key was pressed, and true or false depending on if it is a letter or not.

document.addEventListener('keydown', keyThatWasPressed);

function keyThatWasPressed(event) {
    var key = event.key;
    console.log(event.key);
    var regEx = /^[a-z]{1}$/i;
    var validKey = regEx.test(key);
    console.log(validKey);


    //This begins pushing the key pressed into an array as a string to be showed on html
    if (!firstTime && validKey) {
   /*      if () */
        //Adds the key pressed to guesses box(array)
        guesses.push(String(event.key));
        document.getElementById("failedGuesses").innerHTML = guesses.join("");
    }

    //This initiates the randomizer when ANY key is pressed, only if its the first key press of the game.
    if (firstTime && event.key) {
        pickWord();
        firstTime = false;
        document.getElementById('image').src="./assets/images/titleDuring.png";
    }

    var keyToString = String(event.key);
    
    console.log(correctWord.indexOf(keyToString));
}

//███████████████████████████████████████████████████████████

var firstTime = true;

//if games <0, change ./assets/images/titleContinue.png to ./assets/images/titleRestart.png
var games = 0;

var wins = 0;
var losses = 0;

//if remainingGuesses =0, run function to enable a restart of game with any keypress
var remainingGuesses = 10;
var failedGuesses = [];

//all guesses --MAKE ONLY FAILED ONES
var guesses = [];

//current word being guessed (initially in underscores)
var currentWord = "";

//the word currently being guessed
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

var pickWord = function() {

  var wordBank = [
    "Charizard",
    "Gengar",
    "Alakazam",
    "Gyrados",
    "Kabutops",
    "Victreebel",
    "Golem",
    "Machamp",
    "Nidoking",
    "Snorlax"
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


var displayUnderscores = function pickWord() {
    console.log(pickWord());
  }





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







































/* var correctWord = a ["a", "b", "a", ""] */


/* document.addEventListener('keydown', testFunc);

function testFunc(event) {
  // This fucntion is being passed into the event listener.
  // The 'event' parameter is provided by the "addEventListener" function which contains the event information (ex: in the instance of a keypress, it has the details of the keypress)

  // Storing the value of the key that was pressed (Ex: a, b, g);
  var key = event.key;

  //Regular expression to validate if the keypress was a letter
  var regEx = /^[a-z]{1}$/i;
  var validKey = regEx.test(key);

  if (validKey) {
    // Code to replace the underscore with the letter that was guessed
    processGuess(key, letters);
  } else {
    // Code to put the letter in the box of used letters
  }

  // Replace an underscore
  // OR put letter in box of used letters
}

function addEventListener(event) {
  if (event = 'keydown') {
    // Take the event and process all the information about it and then call the function
    function(event);
  }
} */



/* var startGame = function() {
  return pickWord();
}

var letters = startGame(); */
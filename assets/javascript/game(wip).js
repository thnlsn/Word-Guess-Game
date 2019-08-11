
document.addEventListener('keydown', keyThatWasPressed);

//FUNCTION THAT DOES SOMETHING WITH A VALID KEYPRESS
function keyThatWasPressed(event) {
    var key = event.key;
    console.log(event.key);
    var regEx = /[a-z]+/i;
    var validKey = regEx.test(key);
    console.log(validKey)
}

//STATUS
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var failedGuesses = [];



//WORD BANK
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

//PICK WORD FUNCTION
var pickWord = function() {
   var wordNumber = Math.floor(Math.random() * 10);
   console.log(wordNumber);
   console.log(wordBank[wordNumber]);
   var wordLength = wordBank[wordNumber].length;
   for (i = 0; i < wordLength; i++) {
       console.log("_")
   };
};

//SETGAME




//EVENT LISTENERS???





















//console.log(wordBank);
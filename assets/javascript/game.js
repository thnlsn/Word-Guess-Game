
//STATUS
var wins = 0;
var losses = 0;
var remainingGuesses = 0;
var validGuesses = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
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
   return wordNumber;
};





















//console.log(wordBank);
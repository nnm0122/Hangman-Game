window.onload = function (){
}

// My arrary of Scary Movies. There are 15 items in my Scary Movies Array.
var wordList=["Carrie","Ring","Dracula","Insidious","Jigsaw","It","Halloween","Conjuring","Mama","Annabelle","Chucky","Scream","Omen","Saw","Candyman"];

//store letters  inside array
  var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z']; 

// Randomly chooses a choice from the options array.
var wordChoice= wordList[Math.floor(Math.random() * wordList.length)];
console.log("computer word" + wordChoice);

//returns an array-like object of all child elements
  var elementWord= document.getElementByClassName("hangman-word")
   var elementGuessedLetters = document.getElementsByClassName("text-guessed")
   var elementGuessesRemaining = document.getElementsByClassName("text-remain")

var wordLength = wordChoice.length;
var guessedWord = [];
for ( var i =0; i< wordLength; i++){
  guessedWord.push("_");

var guessesRemaining = 6;
var guessedLetters = [];


elementWord[0].innerHTML = guessedWord;
elementGuessesRemaining[0].innerHTML = guessesRemaining;

}

// This function is run whenever the user presses a key.
   document.onkeyup = function(event) {
 console.log(event.key);
if (event.which >= 65 && event.which <= 90) {  //letters are in a keycode and makes sure only a letter is pressed. 
        var keyPressed = event.key.toLowerCase();
        console.log("good!");

        if (guessedLetters.indexOf(keyPressed) !== -1) {  //means it found the letter. If letter has already been guessed it does nothing
          return;
        }


        guessedLetters.push(keyPressed);
        console.log(guessedLetters);
            elementGuessedLetters[0].innerHTML = guessedLetters; //displays letters guessed so far
        guessesRemaining--;
            elementGuessesRemaining[0].innerHTML = guessesRemaining; //display # of guesses to HTML
        console.log(guessesRemaining);

        var matchFound = false;

        for (var i = 0; i < wordChoice.length; i++){
          wordChoice.charAt(i);
          if (wordChoice.charAt(i) == keyPressed) {
            guessedWord[i] = keyPressed;
            matchFound = true;
          }

                console.log("match found? " + matchFound);
        }

        // Updates the HTML
        console.log(guessedWord);
            elementWord[0].innerHTML = guessedWord;
 
            console.log("enter if statement")
            if (wordChoice.indexOf() === guessedWord.indexOf()) {
                console.log("guessed it!!!!")
            }

      } 




//Determines which key was pressed.
//var userGuess = event.key;      


  
 
//Alerts the key the user pressed ( userGuess)
  //alert("User guess: " + userGuess);

//if (userGuess === letter){
 // document.write("letters")
//}

 //if (userGuess === computerChoice){
 // document.write("word")
  //alert("user win");
 //}
   
  //loop repeat 26 times
 // for (var i = 1; i<27; i++) {

//}

 };
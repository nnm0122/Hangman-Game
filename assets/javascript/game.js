// My arrary of Scary Movies. There are 15 items in my Scary Movies Array.
var wordBank=["Carrie","Ring","Dracula","Insidious","Jigsaw","It","Halloween","Conjuring","Mama","Annabelle","Chucky","Scream","Omen","Saw","Candyman"];

var rand = Math.floor(Math.random() * wordBank.length);


var movieChoice = wordBank[rand];
console.log("computer word " + movieChoice);

var elementWord = document.getElementsByClassName("hangman-word");
var elementGuessesRemaining = document.getElementsByClassName("text-remain");
var elementGuessedLetters = document.getElementsByClassName("text-guessed");


var guessedWord = [];
for (var i = 0; i < movieChoice.length; i++) {
  guessedWord.push("_");
  //console.log( "guessedWord",guessedWord);
}   

var wrongGuesses = 6;
var guessedLetters = [];
var wins = 0;



elementWord[0].innerHTML = guessedWord;
elementGuessesRemaining[0].innerHTML = wrongGuesses;

document.onkeyup = function(event) {


      console.log(event.key);
      if (event.which >= 65 && event.which <= 90) {  //letters are in a keycode and makes sure only a letter is pressed. 65 is =a and 90 is = to z.
        var keyPressed = event.key.toLowerCase();
        console.log("good!");
        guessedLetters.push(keyPressed);
        console.log(guessedLetters);
            elementGuessedLetters[0].innerHTML = guessedLetters; //displays letters guessed so far
        wrongGuesses--;
            elementGuessesRemaining[0].innerHTML = guessesRemaining; //display # of guesses to HTML
        console.log(guessesRemaining);

        if (guessedLetters.indexOf(keyPressed) !== -1) {  //means it found the letter. If letter has already been guessed it does nothing
          return;
        }



        var matchFound = false;

        for (var i = 0; i < movieChoice.length; i++){
          movieChoice.charAt(i);
          if (movieChoice.charAt(i) == keyPressed) {
            guessedWord[i] = keyPressed;
            matchFound = true;
          

                console.log("match found? " + matchFound);
        }
}
        // Updates the HTML
        //console.log(guessedWord);
            elementWord[0].innerHTML = guessedWord;
   
            console.log("enter if statement")
            if (movieChoice.indexOf() === guessedWord.indexOf()) {
                console.log("Correct!")
            }

      } 

 }


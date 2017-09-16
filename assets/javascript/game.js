
// My arrary of Scary Movies. There are 15 items in my Scary Movies Array.
var movieBank=["Carrie","Ring","Dracula","Insidious","Jigsaw","It","Halloween","Conjuring","Mama","Annabelle","Chucky","Scream","Omen","Saw","Candyman"];

var rand = Math.floor(Math.random() * movieBank.length);
var movieChoice = movieBank[rand];

var elementWord = document.getElementsByClassName("hangman-word");
var elementGuessesRemaining = document.getElementsByClassName("text-remain");
var elementGuessedLetters = document.getElementsByClassName("text-guessed");
var sound = new Audio("audio_file.mp3");

var wins = 0;
elementWord[0].innerHTML = guessedWord;
// elementGuessesRemaining[0].innerHTML = guessesRemaining;
console.log("computer word " + movieChoice);
var guessedWord = [];


// creating underscores of title letters with string.length...
for (var i = 0; i < movieChoice.length; i++) {
  guessedWord.push("_");
}


elementWord[0].innerHTML = guessedWord;


  guessesRemaining = 15;
    guessedLetters = [];
    correctGuessedLetters = 0;



// on keyup event will return an obect with metadata about events, of any kind, but here it's the keyup event.
document.onkeyup = function(event) {
  {
    if (guessesRemaining==0){
  return;
  var sound = Notification.sound;{
    sound: "assets/wlaugh.mp3"
  }
  notification("GameOver!", elementNotification);
}
  }

      console.log(event.key);
      if (event.which >= 65 && event.which <= 90) {  //letters are in a keycode and makes sure only a letter is pressed. 65 is =a and 90 is = to z.
        var keyPressed = event.key.toLowerCase();

        if (guessedLetters.indexOf(keyPressed) == -1) {  //means if keyPressed is NOT in the guessedLetters array, then...
          guessedLetters.push(keyPressed); // put the letter in the array.
          // console.log(guessedLetters);

          guessesRemaining--; // subtract one from guessesRemaining.
          elementGuessesRemaining[0].innerHTML = guessesRemaining; //display # of guesses remaining to HTML

          elementGuessedLetters[0].innerHTML += keyPressed + ',  '; //displays letters guessed so far
          for(i = 0; i < movieChoice.length; i++){

        if (movieChoice.toLowerCase().charAt(i) == keyPressed) { //need toLowerCase() to find the first letter.

                console.log('movieChoice.charAt(i): ',movieChoice.charAt(i));
                console.log('here is keyPressed: ', keyPressed);
                guessedWord[i] = movieChoice.charAt(i);
                elementWord[0].innerHTML = guessedWord;

            }
          }
        }
}
}
// Things I could not figure out.
//How to get the sound to play once the user won.
//How to get the # of wins to calculate. I tried using function increments (++ and --) and the following code:
//if (userGuess === computerGuess) {
        //  wins++
  //How to reset the game once the word was guessed. I tried adding a reset button on my HTML page and then.addEventListener function to execute the reset. But it did not work.
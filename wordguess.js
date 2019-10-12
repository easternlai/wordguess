//Creates an array of strings
var wordArray = ["javascript", "responsive", "browser", "computer", 
"markup", "styles", "margin", "debug", "coditionals", "console", 
"array", "loop", "function"];

//defines valid keys user can press.
var validKey = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// declares necessary variables
var guesses = 5;
var winsTotal = 0;
var lettersUsed = [];
var currentWord = [];
var startGame = true;



//series of function calls necessary to begin program.

document.getElementById("start-game").textContent="Press any key to start";

document.onkeyup = function(event){
    if(startGame === true){
        currentWord = wordPicker(wordArray);
        wordPrint(currentWord);
        remainingGuesses(currentWord);
        wins();
        startGame= false;
        document.getElementById("start-game").textContent="";
    }
    else{
        var userGuess = event.key;

        //inputs user guess to variable, verifies key is valid character   
        if(validKey.includes(userGuess)){

        //variable used to allow user to keep their guess if guess is correct
            var keepGuess=false;

            //changes value of user guess to true if the user guess is correct
            for(i=0; i < currentWord.length; i++){
                if(userGuess == currentWord[i].letter){
                    currentWord[i].chosen = true;
                    keepGuess=true; 
                }
        }

            //decrements user guess if incorrect
            if(keepGuess===false){
                guesses--;
            }

            //prints word to screen
            wordPrint(currentWord);

            //calculates remaining guesses
            remainingGuesses(currentWord);

            //displays letter to user
            addLetter(userGuess);

            //displays wins count
            wins();

            //determines if game is over, resets game.
            if(endGame(currentWord)){
                wordPrint(currentWord);
                resetGame();
            } 
        }
    }
}


//functions

function wordPrint(word){
    document.getElementById("hidden-word").textContent = "";
    for(i=0; i<word.length; i++){
        if(word[i].chosen == true){
        document.getElementById("hidden-word").textContent += word[i].letter;
        }
    else {
        document.getElementById("hidden-word").textContent += "-";
        }
    }

}

function endGame (currentWord){
    if(guesses == 0){
        alert("You lose!!!");
        resetGame();
    }

    for (i = 0; i < currentWord.length; i++){
        if (currentWord[i].chosen === false){
             return false;
        }
    }

        winsTotal++;
        wins();
            alert("You Win!!!");
        return true;
}

function remainingGuesses (){
    document.getElementById("attempts-remaining").textContent = guesses;
}

function addLetter (x){
    lettersUsed.push(x);
    document.getElementById("letters-used").textContent += lettersUsed[lettersUsed.length -1] + " ";   
}


function wins(){
    var x = winsTotal;
    document.getElementById("wins-total").textContent = x;
}

function resetGame() {
    currentWord = wordPicker(wordArray);
    lettersUsed = [];
    document.getElementById("letters-used").textContent = "";
    guesses = 5;
    wordPrint(currentWord);
    remainingGuesses(currentWord);
    wins();
}

function wordPicker(array){
    var randWord = array[Math.floor(Math.random() * array.length)];
    var wordKey = {};
    var arrayHolder = [];
    for (i=0; i<randWord.length; i++){
        arrayHolder[i] = {letter: randWord[i], chosen:false};
    }
    return arrayHolder;
}
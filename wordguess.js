var wordArray = ["javascript", "responsive", "browser", "computer", 
"markup", "styles", "margin", "debug", "coditionals", "console", 
"array", "loop", "function"];

var testWord = [{letter:"c", chosen:false}, {letter:"a",chosen:false},{letter:"t", chosen:false}];
var guesses = 5;
var winsTotal = 0;
var lettersUsed = [];

wordPrint(testWord);
remainingGuesses(testWord);
wins();

document.onkeyup = function(event){
    var userGuess = event.key;

    for(i=0; i < testWord.length; i++){
        if(userGuess == testWord[i].letter){
            testWord[i].chosen = true;
        }
    }

    guesses--;
    wordPrint(testWord);
    remainingGuesses(testWord);
    addLetter(userGuess);
    wins();

    if(endGame(testWord)){
        wordPrint(testWord);
        alert("you have won");
        resetGame();
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
    for (i = 0; i < currentWord.length; i++){
        if (currentWord[i].chosen === false){
             return false;
        }
    }
        winsTotal++;
        wins();
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

function resetGame(){
   testWord = [{letter:"c", chosen:false}, {letter:"a",chosen:false},{letter:"t", chosen:false}];
   lettersUsed = [];
   guesses = 5;
   wordPrint(testWord);
    remainingGuesses(testWord);
    wins();

}
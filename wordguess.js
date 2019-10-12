var wordArray = ["javascript", "responsive", "browser", "computer", 
"markup", "styles", "margin", "debug", "coditionals", "console", 
"array", "loop", "function"];

// var randWord = wordPicker(word);
var guesses = 5;
var winsTotal = 0;
var lettersUsed = [];
var currentWord = [];

currentWord = wordPicker(wordArray);
wordPrint(currentWord);
remainingGuesses(currentWord);
wins();

document.onkeyup = function(event){



    var userGuess = event.key;
    var keepGuess=false;
    for(i=0; i < currentWord.length; i++){
        if(userGuess == currentWord[i].letter){
            currentWord[i].chosen = true;
            keepGuess=true; 
        }
    }
    if(keepGuess===false){
        guesses--;
    }
    wordPrint(currentWord);
    remainingGuesses(currentWord);
    addLetter(userGuess);
    wins();

    if(endGame(currentWord)){
        wordPrint(currentWord);
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
    //document.getElementById("h1-letters-used").textContent = "Letters Used:  ";  
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
var wordArray = ["javascript", "responsive", "browser", "computer", 
"markup", "styles", "margin", "debug", "coditionals", "console", 
"array", "loop", "function"];



var testWord = [{letter:"c", chosen:false}, {letter:"a",chosen:false},{letter:"t", chosen:false}];
var guesses = 5;



wordPrint(testWord);
remainingGuesses(testWord);


document.onkeyup = function(event){
    var userGuess = event.key;

    for(i=0; i < testWord.length; i++){
        if(userGuess == testWord[i].letter){
            testWord[i].chosen = true;
        }

    }
    guesses--;
    wordPrint(testWord);
    console.log(endGame(testWord));
    remainingGuesses(testWord);
}

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
        return true;
}

function remainingGuesses (){
    document.getElementById("attempts-remaining").textContent = guesses;
    
}
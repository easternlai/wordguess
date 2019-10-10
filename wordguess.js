var wordArray = ["javascript", "responsive", "browser", "computer", 
"markup", "styles", "margin", "debug", "coditionals", "console", 
"array", "loop", "function"];



var testWord = [{letter:"c", chosen:false}, {letter:"a",chosen:false},{letter:"t", chosen:false}];
var maxGuess = 5;

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

wordPrint(testWord);
wordPrint(testWord);
wordPrint(testWord);

document.onkeyup = function(event){
    var userGuess = event.key;

    for(i=0; i < testWord.length; i++){
    if(userGuess == testWord[i].letter){
        testWord[i].chosen = true;
        console.log(testWord[i].letter);
    }

    }
    maxGuess--;
    console.log(maxGuess);
    wordPrint(testWord);
}
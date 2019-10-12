# wordguess

##By Eastern Lai

##Tecnologies Used

1. HTML
2. CSS
3. Github
4. visual studio code
5. Git Bash
6. Media Queries
7. JavaScript
8. Google Fonts


Functions used

```
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

```
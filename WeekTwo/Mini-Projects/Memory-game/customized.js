const cards24 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12]
const cards20 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
const cards18 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]
const cards16 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
const cards14 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
const cards12 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]
const cards10 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
const cards8 = [1, 1, 2, 2, 3, 3, 4, 4]
const cards6 = [1, 1, 2, 2, 3, 3]

const tableSize = {
    6  : "450px",
    8  : "550px",
    10 : "550px",
    12 : "550px",
    14 : "550px",
    16 : "550px",
    18 : "730px",
    20 : "650px",
    24 : "730px"
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const cardTable = document.getElementById("card-table");
const buttonCollection = document.getElementsByClassName("cardButton");
var firstGuess;
var firstButton;
var turnCounter;
var endTurn;
var shuffledCards;
var numOfCards;


function memory(buttonID) {
    if (endTurn) {
        return
    }
    // buttonCollection[buttonID].innerHTML = shuffledCards[buttonID][0]
    buttonCollection[buttonID].style.backgroundImage = "url(images/"+ shuffledCards[buttonID][0]  +".jpg)"

    
    //If this is the first card of the guessed pair 
    if (!firstGuess) {
        firstGuess = shuffledCards[buttonID][0];
        firstButton = buttonID;
    }

    //If it's the second card of the guessed pair
    else {
        turnCounter++
        document.getElementById("turns").innerHTML = `Turn Number: ${turnCounter}`

        if (shuffledCards[buttonID][0] == firstGuess) {
            // console.log("You found a pair")
            shuffledCards[buttonID][1] = true;
            shuffledCards[firstButton][1] = true;
            buttonCollection[buttonID].style.border = "2px solid blue"
            buttonCollection[firstButton].style.border = "2px solid blue"
        }
        else{
            // console.log("Not a match.")
            endTurn = true;
            document.getElementById("clear").style.visibility = "visible";
        }
        firstGuess = null;
        firstButton = null;

    }
    // console.log(buttonID, shuffledCards[buttonID]);
}

function reset() {
    endTurn = false;
    document.getElementById("clear").style.visibility = "hidden";
    for (i=0; i<numOfCards; i++) {
        if (!shuffledCards[i][1]) {
            buttonCollection[i].style.backgroundImage = "url(images/back.jpg)";
            
        }
    }
}

function playGame(num) {
    turnCounter = 0;
    endTurn = false;
    firstButton = null;
    firstGuess = null;
    shuffledCards = {};
    numOfCards = num;

    for (let i = 0; i < 24; i++){
        buttonCollection[i].style.display = "none";
        buttonCollection[i].style.border = "none";
    }
    document.getElementById("turns").innerHTML = `Turn Number: ${turnCounter}`

    let deck = [...eval("cards" + num)]
    shuffle(deck)

    cardTable.style.visibility = "visible";
    cardTable.style.width = tableSize[num];

    for (let i = 0; i < num; i++) {
        buttonCollection[i].style.display = "inline-block";
        shuffledCards[i] = [deck[i], false]
    }  
    
    reset()
}

function cheat() {
    for (let i = 0; i<numOfCards; i++) {
        buttonCollection[i].style.backgroundImage = "url(images/"+ shuffledCards[i][0]  +".jpg)"}
}

document.addEventListener("keypress", function AKey(event) {
    if (event.key == "a") {
        reset()
    }
});
const cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

buttonArray = document.getElementsByClassName("cardButton");

shuffle(cards);

shuffledCards = {
    0: [cards[0], false],
    1: [cards[1], false],
    2: [cards[2], false],
    3: [cards[3], false],
    4: [cards[4], false],
    5: [cards[5], false],
    6: [cards[6], false],
    7: [cards[7], false],
    8: [cards[8], false],
    9: [cards[9], false],
    10:[cards[10], false],
    11:[cards[11], false]
}

console.log(shuffledCards)

var firstGuess = null;
var firstButton = null;
var turnCounter = 0;
var endTurn = false;

function memory(buttonID) {
    if (endTurn) {
        // alert("Cheater");
        return
    }
    // buttonArray[buttonID].innerHTML = shuffledCards[buttonID][0]
    buttonArray[buttonID].style.backgroundImage = "url(images/"+ shuffledCards[buttonID][0]  +".jpg)"


    
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
            console.log("You found a pair")
            shuffledCards[buttonID][1] = true;
            shuffledCards[firstButton][1] = true;
        }
        else{
            console.log("Not a match.")
            endTurn = true;
        }
        firstGuess = null;
        firstButton = null;

    }
    console.log(buttonID, shuffledCards[buttonID]);
}

function reset() {
    endTurn = false;
    for (i=0; i<cards.length; i++) {
        if (!shuffledCards[i][1]) {
            buttonArray[i].style.backgroundImage = "url(images/back.jpg)";
        }
    }
}

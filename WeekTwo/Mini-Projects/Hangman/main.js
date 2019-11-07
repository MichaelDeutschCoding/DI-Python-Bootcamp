const enterSecretWord = () => {
    
    let validated;
    do {
        var word = prompt("Enter your secret word. (minimum four letters)")
        validated = validateWord(word);
    }
    while (!validated)
    word = word.toUpperCase()
    word = word.split("")
    return word
}

const validateWord = (word) => {
    if (word.length < 4) {
        alert("Your word must have a minimum of four letters.")
        return false
    }
    if (word.match(letters)) {
        return true
    }
    else {
        alert("Please enter alphabet characters only")
        return false
    }
}

const guessLetter = (word) => {
    let guess = prompt(`Guess a letter. You have ${10 - wrongGuesses.length} guesses remaining.`);
    // allow option for user to quit!

    if (guess == "exit" || guess == "quit") {
        quit = true;
        return []
    }
    if (!guess.match(letters)){
        alert("Not a valid guess. Type a real letter.")
        return []
    }
    if (guess.length != 1) {
        alert("You can only guess one letter.")
        return []
    }
    guess = guess.toUpperCase();
    if (correctGuesses.includes(guess) || wrongGuesses.includes(guess)) {
        alert("You've already guessed that letter. Try again.")
        return []
    }
    var corrrectIndexes = [];
    for (i=0; i<word.length; i++) {
        if (guess == word[i]) {
            corrrectIndexes.push(i)
        }
    }
    if (corrrectIndexes.length == 1) {
        console.log(`Yay! There is a ${guess} in the secret word.`)
        correctGuesses.push(guess);
    }
    else if (corrrectIndexes.length > 1) {
        console.log(`Yay! There are ${corrrectIndexes.length} '${guess}'s in the secret word.`)
        correctGuesses.push(guess);
    }
    else{
        console.log(`Sorry there is no letter ${guess} in the secret word.`)
        wrongGuesses.push(guess);
    }
    return corrrectIndexes;

}

var wrongGuesses;
var correctGuesses;
var letters = (/^[A-Za-z]+$/);
var quit = false;


const playHangman = () => {
    var secretWord = enterSecretWord();
    // var secretWord = ["H", "E", "L", "L", "O"]

    var displayWord = new Array(secretWord.length).fill("_")
    // console.log(secretWord)
    console.log(displayWord)
    wrongGuesses = [];
    correctGuesses = [];

    while (wrongGuesses.length < 10) {
        for (i of guessLetter(secretWord)) {

            displayWord[i] = secretWord[i];
        }
        if (quit) {
            console.log("Goodbye")
            return
        }

        console.log(displayWord.join(" "));
        console.log(`Already guessed: ${wrongGuesses.join(", ")}`)

        if (JSON.stringify(secretWord) == JSON.stringify(displayWord)) {
            alert("Congratulations! You won!")
            return
        }
    }
    alert(`You LOSE! The word was: ${secretWord.join("")}`)

}

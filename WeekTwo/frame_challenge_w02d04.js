function framedString (phrase) {
    let arr = phrase.split(" ")
    let longest = 0;
    
    for (w of arr) {
        if (w.length > longest) {
            longest = w.length
        }
    }
    let line = ""
    for (i=0; i<longest+4; i++) {
        line += "*"
    }
    console.log(line)
    
    for (word of arr) {
        let numMarginR = longest +1 -word.length;
        rightSpaces = ""
        for (i=0; i<numMarginR; i++) {
            rightSpaces += " ";
        }
        console.log("* " + word + rightSpaces + "*")
    }
    console.log(line)
}


framedString("Hello I am a string")
framedString("Test me with different length words")
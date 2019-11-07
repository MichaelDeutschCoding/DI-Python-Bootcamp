const bottles = (bottles=99) => {
    let falling = 1;

    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take ${falling} down, pass it around, ${bottles-falling} bottles of beer on the wall!`)
    bottles = bottles - falling;
    falling ++;

    while (bottles > falling) {
        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer. Take ${falling} down, pass them around, ${bottles-falling} bottles of beer on the wall!`)
        bottles = bottles - falling;
        falling ++
    }

}


function loadWelcomePage(){
    alert("Load the Page!");
}

//get random number between in range of [0, ... , max)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//When 'Get Started' button is pressed, call loadCards() to start displaying
function loadCards(){
    //Get two random cards for first guess, add a left and right card

    //var makes item accessible in entire function, let makes it only accessible within scope of statement. Max should be number of items in dataset
    var cardNum1 = getRandomInt(10);
    var cardNum2 = getRandomInt(10);

    //make sure they are not the same numbers, recall getRandomInt() until they are not equal
    while (cardNum1 == cardNum2){
        cardNum2 = getRandomInt(10);
    }

    //append to DOM
    document.getElementById('cardHolder').innerHTML += `<p> num1 = ${cardNum1}, num2 = ${cardNum2} </p>`;
    // alert("Loaded the Cards!");
}
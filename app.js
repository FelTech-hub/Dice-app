document.addEventListener('click', function (e) {
    let diceNum1 = Math.floor(Math.random() * 6) + 1; //Dice Number 1-6

    let randomDiceImg = 'dice' + diceNum1 + '.png'; //Getting a random images
    let randomDiceSource1 = 'images/' + randomDiceImg; //The image source

    let imge1 = document.querySelectorAll('img')[0]; //looping the images

    imge1.setAttribute('src', randomDiceSource1); // Set Attribute


    let diceNum2 = Math.floor(Math.random() * 6) + 1; //Dice Number 1-6
    console.log(diceNum2)

    let randomDiceSource2 = 'images/dice' + diceNum2 + '.png'; //The image source

    // let imge1 = document.querySelectorAll('img')[1]; //looping the images

    document.querySelectorAll('img')[1].setAttribute('src', randomDiceSource2); // Set Attribute



    if (diceNum1 > diceNum2) {
        document.querySelector('h1').innerHTML = "Player 1 Wines";
    } else if (diceNum2 > diceNum1) {
        document.querySelector('h1').innerHTML = "Player 2 Wines";
    } else {
        document.querySelector('h1').innerHTML = "Draw";
    }

})


/* Opgave 1*/

let myBall = document.getElementById('ballOne');
let myBuhButton = document.getElementById('buhOneButton');

myBuhButton.addEventListener('click', () => {
    myBall.classList.toggle('animateRight')
})



/*opgave 2*/

let myBalls = document.getElementsByClassName('balls');
let myBuhTwoButton = document.getElementById('buhTwoButton');


myBuhTwoButton.addEventListener('click', () => {
    for (ball of myBalls) {
        ball.classList.toggle('animateRight')
    }
})



/*opgave 3*/


let myRedBalls = document.getElementsByClassName('hardBalls')
let myBuhThreeButton = document.getElementById('buhThreeButton')
let myBallVar = 0

myBuhThreeButton.addEventListener('click', () => {
    for (ball of myRedBalls) {
        switch (myBallVar) {
            case 0:
            case 2:
            case 4:
            case 6:
                ball.classList.toggle('animateLeft')
                break;
            case 1:
            case 3:
            case 5:
            case 7:
                ball.classList.toggle('animateRight')
                break;
        }
        myBallVar++
    }
})
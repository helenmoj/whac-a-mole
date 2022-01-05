// add in logic

const squares = document.querySelectorAll('.square');

const mole= document.querySelector('.mole');

const timeLeft = document.querySelector('#time-left'); //searching for an id

const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;



function randomSquare() {

    squares.forEach(square =>  {
        square.classList.remove('mole');
        // remove the mole if exists on any of the squares
        // getting each square and removing the class of mole (before adding mole)
    });


    let randomSquare = squares[Math.floor(Math.random() * 9)]; //square array
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMole() {
timerId = setInterval(randomSquare, 500);
}

moveMole(); // call the function
// additional work, could attach this to a button


function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    }

}

let countDownTimerId = setInterval(countDown, 1000);
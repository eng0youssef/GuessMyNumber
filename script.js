"use strict";
function x() {
    let value = Number(document.querySelector('.guess').value);
    if (!value) {
        document.querySelector('.message').textContent = "❌❌\nNo number..!";
    }
    else if (value === secNum) {
        document.querySelector('.message').textContent = "✔Correct Number!";
        document.querySelector('.number').textContent = value;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.check').style.display = 'none';

        if (score > high) {
            high = score;
            document.querySelector('.highscore').textContent = high;
        }

    }
    else if (value !== secNum) {
        if (score > 1) {
            score--;
            document.querySelector('.message').textContent = value > secNum ? "👎Too high!!!" : "👎Too low!";
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "💔You lost the game";
            score = 0;
            document.querySelector('.score').textContent = score;
            document.querySelector('.check').style.display = 'none';
        }
    }

}
function y() {
    secNum = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.check').style.display = 'block';
    document.querySelector('.guess').value = undefined;

    document.querySelector('.message').textContent = "Start guessing...";
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';

}

let secNum = Math.trunc(Math.random() * 20) + 1;

let high = 0;
let score = 20;
document.querySelector('.check').addEventListener('click', x);
document.querySelector('.again').addEventListener('click', y);


//sorting array fun
//t2.sort(function (a, b) { return a - b });


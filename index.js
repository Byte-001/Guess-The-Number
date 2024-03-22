'use strict'

//* selecting html elements
const resetButton = document.querySelector('.again');
let numberDiv = document.querySelector('.number');
let guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
let msg = document.querySelector('.message');
let highScore = document.querySelector('.high-score');
let score  = document.querySelector('.score');

//* default number
numberDiv.textContent = 0;

//* functions 
checkButton.addEventListener('click', checkNumbers);

function changeMsg(message){
    msg.textContent = message;
}

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 21) + 1;
    return randomNumber;
}

function checkNumbers(){
    let inputNumber = guessInput.value;
    let rndNumber = generateRandomNumber(); 

    if(inputNumber < rndNumber){
        changeMsg('📉 Too small!');

    }
    if(inputNumber > rndNumber){
        changeMsg('📈 Too high!');
    }
    if(inputNumber === rndNumber){
         numberDiv.textContent = String(rndNumber);
         document.body.style.backgroundColor = '#C1F2B0';
         changeMsg('✅ Congratss! u guessed right');
    }
}

resetButton.addEventListener('click',resetAll);

function resetAll(){
    changeMsg('');
    numberDiv.textContent = 0;
    score.textContent = 0;
    highScore.textContent = 0;
    document.body.style.backgroundColor = '#222';
}
//'use strict';
// console.log(document.querySelector('.message').textContent)
// console.log(document.querySelector('message').textContent='yes')
const secretNumber = Math.trunc(Math.random()*20)+1;
let score =20;
document.querySelector(".number").textContent=secretNumber
function eventClick(){
    const guess =Number(document.querySelector('.guess').value)
    console.log(typeof guess)
    if(!guess){
        document.querySelector('.message').textContent='No number!'
    }
    else if(guess === secretNumber){
      document.querySelector('.message').textContent='correct number'
    }
    else if(guess>secretNumber){
        document.querySelector('.message').textContent='too high'
        score--
        document.querySelector('.score').textContent=score
    }
    else if (guess<secretNumber){
        document.querySelector('.message').textContent='too low'
        score--
        document.querySelector('.score').textContent=score
    }
}
document.querySelector('.check').addEventListener('click',eventClick)
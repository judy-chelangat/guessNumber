//'use strict';
// console.log(document.querySelector('.message').textContent)
// console.log(document.querySelector('message').textContent='yes')
let secretNumber = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore =0;
function eventClick(){
    const guess =Number(document.querySelector('.guess').value)
    console.log(typeof guess)
    // when there is no input
    if(!guess){
        document.querySelector('.message').textContent='No number!'
    }
    // when player wins
    else if(guess === secretNumber){
        document.querySelector(".number").textContent=secretNumber
      document.querySelector('.message').textContent='correct number'
      document.querySelector('body').style.backgroundColor='#60b347';
      document.querySelector(".number").style.width ='30rem';
      if(score >highscore){
        highscore =score;
        document.querySelector('.highscore').textContent=highscore
      }
    }
    // when guess is too high
    else if(guess>secretNumber){
        if(score>1){
        document.querySelector('.message').textContent='too high'
        score--
        document.querySelector('.score').textContent=score
        }
        else{
            document.querySelector('.message').textContent='You lost the game'
            document.querySelector('.score').textContent=0;
        }
    }
    // when guess is too low
    else if (guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='too low'
            score--
            document.querySelector('.score').textContent=score
            }
            else{
                document.querySelector('.message').textContent='You lost the game'
                document.querySelector('.score').textContent=0;
            }
       
    }
}
// function to reset the game
function resetGame(){
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=20;
    document.querySelector('.guess').value=''
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector(".number").style.width ='15rem';
    document.querySelector(".number").textContent ='?';
}
document.querySelector('.check').addEventListener('click',eventClick)
document.querySelector(".again").addEventListener("click" , resetGame)
'use strict';
const secretNumber =Math.trunc(Math.random()*20) +1;


let score =20;
let highscore =0;
document.querySelector('.check').addEventListener('click',function(){
const guess=Number(document.querySelector('.guess').value);

if(!guess){
    document.querySelector('.message').textContent ="No number found";
}else if(guess ===secretNumber){
document.querySelector('.message').textContent='You won';
document.querySelector('body').style.backgroundColor="green";
document.querySelector('.number').style.width ="300px";
if(score>highscore){
    highscore= score;
    document.querySelector('.highscore').textContent=highscore;
}
}else if(guess !==  secretNumber){
    if(score>1){
         document.querySelector('.message').textContent=guess >secretNumber?'Too High':'Too Low';
        score--;
        document.querySelector('.score').textContent=score;
    }else
    document.querySelector('.message').textContent='You lost the game';
    document.querySelector('.score').textContent=score;
}
// else if(guess<secretNumber){
//     if(score>1){
//     document.querySelector('.message').textContent='Too Low `';
//     score--;
//     document.querySelector('.score').textContent=score;
//     }else
//     document.querySelector('.message').textContent='You lost the game';
// }
// }
// }else if(guess>secretNumber){
//     if(score>1){
//         document.querySelector('.message').textContent='Too High';
//         score--;
//         document.querySelector('.score').textContent=score;
//     }else
//     document.querySelector('.message').textContent='You lost the game';
// }
// else if(guess<secretNumber){
//     if(score>1){
//     document.querySelector('.message').textContent='Too Low `';
//     score--;
//     document.querySelector('.score').textContent=score;
//     }else
//     document.querySelector('.message').textContent='You lost the game';
// }

});
const CHOICES = ["rock","paper","scissors"];
const NUM_CHOICES = 3;
const explanation = document.querySelector('#round-explanation');
function getComputerChoice(){
 return CHOICES[Math.floor(Math.random() * NUM_CHOICES)];
}
function playRound(p,c){
    if( p==c ){
        explanation.textContent = "Tie. No Winner";
        return 0;
    }
    else if(p == "paper"){
        if(c == "rock"){
            explanation.textContent = "You win. Paper beats rock.";
            return 1;
        }
        if(c == "scissors"){
            explanation.textContent = "You lose. Scissors beat paper";
            return 2;
        }
    }
    else if(p == "rock"){
        if(c == "paper"){
            explanation.textContent = "You Lose. Paper beats rock.";
            return 2;
        }
        if(c == "scissors"){
            explanation.textContent = "You Win. Rock beats scissors";
            return 1;
        }
    }
    else{
        if(p == "scissors"){
            if(c == "rock"){
                explanation.textContent = "You lose. Rock beats scissors";
                return 2;
            }
            if(c == "paper"){
                explanation.textContent = "You win. Scissors beat paper."
                return 1;
            }
        }
    }
}
let pScore = 0;
let cScore = 0;
const playerScoreDiv = document.querySelector('#player-box div.score');
const computerScoreDiv = document.querySelector('#computer-box div.score');

function game(playerC, computerC){
    if(pScore === 5 || cScore === 5){
        return
    };
    
    rv = playRound(playerC,computerC);
    switch(rv){
        case 0:
            pScore++;
            cScore++;
            playerScoreDiv.textContent = `${pScore}`;
            computerScoreDiv.textContent = `${cScore}`;
            break;
        case 1:
            pScore++;
            playerScoreDiv.textContent = `${pScore}`;
            break;
        case 2:
            cScore++;
            computerScoreDiv.textContent = `${cScore}`;
            break;
        }
    if(pScore == 5 || cScore === 5){
        gameOver = true;
        if(pScore == 5 && cScore==5){
            console.log("Game ended in a tie.")
        }
        else console.log((pScore > cScore?"Player won the game": "Computer won the game"))
    }
}

const buttons = document.querySelectorAll('button.choice-btn');
buttons.forEach((button) => {

    button.addEventListener('mouseover', function(e) {
        button.classList.add('hovered');
    })
  

    function handleRound(e){
        game(this.id,getComputerChoice());
    }

    button.addEventListener('mouseout',function(e){
        button.classList.remove('hovered');
    });

    button.addEventListener('click',handleRound);
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click',()=>{
    pScore = 0;
    cScore = 0;
    playerScoreDiv.textContent = `0`;
    computerScoreDiv.textContent = '0';
    explanation.textContent = '';
})

resetButton.addEventListener('mouseover', function(e) {
    resetButton.classList.add('hovered');
})

resetButton.addEventListener('mouseout',function(e){
    resetButton.classList.remove('hovered');
});

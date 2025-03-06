"use strict";
const player = document.getElementById('player-throw');
const playerThrow = player.querySelectorAll('img');

const computerThrow = document.getElementById('computer-throw');
const compThrowImg = document.getElementById('throw');
const throws = ["./assets/images/rock.PNG", "./assets/images/paper.PNG", "./assets/images/scissors.PNG"];
const throwValues = ["rock", "paper", "scissors"];

const reset = document.getElementById('reset-btn');

let playerChoice;
let shuffleInterval;
let computerChoice;

playerThrow.forEach((img) => {
    img.addEventListener('click', () => {
        playerThrow.forEach((img) => img.style.border = "none");
        img.style.border = "10px solid red"; 

        if (img.id === "rock") {
            playerChoice = "rock";
        } else if (img.id === "paper") {
            playerChoice = "paper";
        } else if (img.id === "scissor") {
            playerChoice = "scissors";
        }

        shuffleComputerThrow();

        setTimeout(() => { 
            clearInterval(shuffleInterval); 
            const randomIndex = Math.floor(Math.random() * throws.length);
            
            computerChoice = throwValues[randomIndex];
            compThrowImg.src = throws[randomIndex]; 

            const gameResult = winner();

            document.getElementById('result').textContent=gameResult;
            let userWins = parseInt(document.getElementById('user-wins').textContent);
            let computerWins = parseInt(document.getElementById('computer-wins').textContent);

            if(gameResult === "You win"){
                userWins++;
                document.getElementById('user-wins').textContent = userWins;
            }
            else if (gameResult === "Computer win"){
                computerWins++;
                document.getElementById('computer-wins').textContent = computerWins;
            }

            reset.addEventListener('click', () => {
                playerThrow.forEach((img) => img.style.border = "none");
                compThrowImg.src = "./assets/images/question-mark.png";
                document.getElementById('result').textContent= "";
                document.getElementById('computer-wins').textContent = "0";
                document.getElementById('user-wins').textContent = "0";
            });
        }, 3000); 
        
    });

 });
 function shuffleComputerThrow() {
    let index = 0;
    shuffleInterval = setInterval(() => {
        compThrowImg.src = throws[index]; 
        index = (index + 1) % throws.length;
    }, 500); 
}

function winner(){
    if(playerChoice ==="rock" && computerChoice ==="paper"){
        return "Computer win";
    }
    else if(playerChoice ==="rock" && computerChoice ==="scissors"){
        return "You win";
    }
    else if(playerChoice ==="paper" && computerChoice ==="rock"){
        return "You win";
    }
    else if(playerChoice ==="paper" && computerChoice ==="scissors"){
        return "Computer win";
    }
    else if(playerChoice ==="scissors" && computerChoice ==="rock"){
        return "Computer win";
    }
    else if(playerChoice ==="scissors" && computerChoice ==="paper"){
        return "You win";
    }
    else if(playerChoice === computerChoice){
        return "It's a draw";
    }
}
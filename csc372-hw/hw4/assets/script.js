"use strict";
const player = document.getElementById('player-throw');
const playerThrow = player.querySelectorAll('img');

const computerThrow = document.getElementById('computer-throw');
const compThrowImg = document.getElementById('throw');
const throws = ["./assets/images/rock.png", "./assets/images/paper.png", "./assets/images/scissors.png"];
const throwValues = ["rock", "paper", "scissors"];

// const outcome = document.get('outcome');

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
            document.getElementById('result').textContent=winner();
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
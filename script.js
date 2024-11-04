let playerScore = 0;
let computerScore = 0;
let computerChoice, playerChoice;
document.getElementById("pScore").textContent = playerScore;
document.getElementById("cScore").textContent = computerScore;
let round = 1;
let gameEnd = document.getElementById("gameEnd");



document.getElementById("playRound").addEventListener("click", () =>{
    getComputerChoice();
});

document.getElementById("endGame").addEventListener("click", () =>{
    endGame();
});

function getComputerChoice(){
    gameEnd.style.display = "none";
    beat.textContent = "";
    document.getElementById("pChoice").style.display = "none";
    document.getElementById("cChoice").style.display = "none";
    document.getElementById("round").textContent = "Round " + round;
    document.getElementById("choices").style.display = "flex";
    document.getElementById("buttons").style.display = "none";

    //get computer choice
    let choice = Math.random();    
    if(choice > .66) computerChoice = "Rock";
    else if(choice > .33) computerChoice = "Scissors";
    else computerChoice = "Paper";
}

document.getElementById("rock").addEventListener("click", ()=>{
    playerChoice = "Rock";
    getPlayerChoice();
});

document.getElementById("paper").addEventListener("click", ()=>{
    playerChoice = "Paper";
    getPlayerChoice();
});

document.getElementById("scissors").addEventListener("click", ()=>{
    playerChoice = "Scissors";
    getPlayerChoice();
});


function endGame(){
    gameEnd.style.display = "block";
    let outcome;

    if(computerScore > playerScore) outcome = "Computer Win!";
    else if(computerScore < playerScore) outcome = "Player Win";
    else outcome = "Draw!";

    gameEnd.textContent =  "Game Ended. " + outcome + "(" + computerScore + " - " + playerScore + ")";

    beat.textContent = "";
    document.getElementById("pChoice").style.display = "none";
    document.getElementById("cChoice").style.display = "none";
    round = 1;
    document.getElementById("round").textContent = "";
    document.getElementById("choices").style.display = "none";
    playerScore = 0;
    computerScore = 0;
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("pScore").textContent = playerScore;
};

function getPlayerChoice(){
    let c = computerChoice;
    let p = playerChoice
    //used to print who wins after comparisons
    let cScore = computerScore;
    let pScore = playerScore;

    let cImage = document.getElementById("cChoice");
    let pImage = document.getElementById("pChoice");
    let beat = document.getElementById("beat");

    //comparisons to see who wins round
    if(c == "Rock"){
        cImage.src = "images/rock.jpg";
        if(p == "Scissors") computerScore++;
        if(p == "Paper") playerScore++;
    }else if (c == "Scissors"){
        cImage.src = "images/scissors.png"
        if(p == "Paper") computerScore++;
        if(p == "Rock") playerScore++;
    }else{
        cImage.src = "images/paper.png"
        if(p == "Rock") computerScore++;
        if(p == "Scissors") playerScore++;
    }

    if(p == "Rock") pImage.src = "images/rock.jpg";
    else if (p == "Scissors") pImage.src = "images/scissors.png";
    else pImage.src = "images/paper.png";

    pImage.style.display = "block";
    cImage.style.display = "block";

    if (cScore < computerScore) beat.textContent = ">";
    else if (pScore < playerScore) beat.textContent = "<";
    else beat.textContent = "=";


    document.getElementById("buttons").style.display = "flex";
    document.getElementById("choices").style.display = "none";
    document.getElementById("cScore").textContent = computerScore;
    document.getElementById("pScore").textContent = playerScore;
    round++;
}
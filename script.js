let humanScore = 0;
let computerScore = 0;
let play = true;
let computerChoice, humanChoice;
let round = 1;

//while user wants to play
while(play){
    //print the round #
    console.log("Round: " + round);

    //play round
    playRound(computerChoice, humanChoice);

    //prompt user if they want to keep playing
    play = 1 == prompt("Enter 1 for next round, 2 to end the game: ");
    round++;
}

//print who won game or draw
gameEnd(computerScore, humanScore);


function getComputerChoice(){
    const choice = Math.random();

    if(choice > .66) return "Rock";
    else if(choice > .33) return "Scissors";
    else return "Paper";
}

function getHumanChoice(){
    const choice = prompt("Enter 1 for rock, 2 for scissors, 3 for paper");

    if(choice == 1) return "Rock";
    else if(choice == 2) return "Scissors";
    else return "Paper";
}

function playRound(){
    //get computer/player choices
    let c = getComputerChoice();
    let h = getHumanChoice();

    //used to print who wins after comparisons
    let cScore = computerScore;
    let hScore = humanScore;
``
    //comparisons to see who wins round
    if(c == "Rock"){
        if(h == "Scissors") computerScore++;
        if(h == "Paper") humanScore++;
    }else if (c == "Scissors"){
        if(h == "Paper") computerScore++;
        if(h == "Rock") humanScore++;
    }else{
        if(h == "Scissors") computerScore++;
        if(h == "Rock") humanScore++;
    }

    //print who won or draw
    console.log("Computer Choice: " + c + ", Player Choice: " + h);
    if(computerScore > cScore) console.log("Computer Win");
    else if (humanScore > hScore) console.log("Player Win");
    else console.log("Draw");

    console.log("Computer Score: " + computerScore + ", Player Score: " + humanScore);
}

function gameEnd(cScore, hScore){
    if(cScore > hScore) console.log("Computer Wins! GG");
    else if(cScore < hScore) console.log("Player Wins! GG");
    else console.log("Draw! GG");

}
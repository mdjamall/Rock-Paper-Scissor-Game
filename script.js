let userScore = 0;
let compScore = 0;
let drawScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let drawScorepara = document.querySelector("#draw-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random(options) * 3);
  return options[randIdx];
};

const drawGame = () => {
    drawScore++;
    drawScorepara.innerText = drawScore;
    msg.innerText = "Game Draw! Play again";
    msg.style.backgroundColor = "purple";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you win");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }else{
        console.log("you lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);
    if(userChoice === compChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

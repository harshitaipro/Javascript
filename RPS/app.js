let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
 const drawGame=()=>{
    console.log("Game Draw")
    msg.innerText="Game draw Play Again!";
    msg.style.backgroundColor="black";
    
 }
 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! your choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("computer wins");
        msg.innerText=`you lose ${compChoice}beats your${userChoice}` ;
        msg.style.backgroundColor="Red";
      }

 }
const playGame=(userChoice)=>{
    console.log("userchoice is",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice is",compChoice);
    if(userChoice===compChoice){
        drawGame();
    
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin = compChoice==="paper"? false: true;

        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors" ? false : true;


        }
        else {
           userWin= compChoice==="rock"? false :true;
        }
        showWinner(userWin,userChoice,compChoice);


    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    
        
    });
});
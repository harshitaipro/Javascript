let boxes=document.querySelectorAll(".box");
let reset =document.querySelector("#reset");
let newGamwBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turno=true;
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[2,5,8],[2,4,6],[1,4,7],[6,7,8],[3,4,5]
];
const resetGame=()=>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
    
        if (turno==true){
            box.innerText = "0";
            turno=false;
        }
        else{
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
}    
    )
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner)=>{
    msg.innerText=`Congratulations ${winner} is Winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if (pos1Val!=""&&pos2Val!="",pos3Val!=""){

            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
                
            }
            
        }
    }

};
newGamwBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
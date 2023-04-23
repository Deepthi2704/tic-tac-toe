let btnRef=document.querySelectorAll(".button-option");
let popupRef=document.querySelector(".popup");
let newgameBtn=document.getElementById("new-game");
let restartBtn=document.getElementById("restart");
let msgRef=document.getElementById("message");
//winning pattern Array
let winningPattern=[
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];
//player 'X' palys first
let xTurn = true;
let count=0;
//disable all buttons
const disableButtons=() =>{
    btnRef.forEach((element)=> (element.disabled=true));
    //enable popup
    popupRef.classList.remove("hide");
};


 //enable all buttons (for new game and restart)
 const enableButtons=()=>
 {
     btnRef.forEach((element)=>{
   element.innerText="";
   element.disabled=false;

 });
 popupRef.classList.add("hide");
};


//new game
newgameBtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
});
restartBtn.addEventListener("click",()=>{
    count=0;
    enableButtons();
});


 //function for draw
const drawFunction=()=>{
    disableButtons();
    msgRef.innerHTML="&#x1F60E; <br> Its a Draw";
};

   //this function is executed when player wins
   const winFunction=(letter)=>{
    //disable all buttons
    disableButtons();
    if(letter=="X"){
        msgRef.innerHTML="&#x1F389; <br> 'X' wins";
    }
    else{
        msgRef.innerHTML="&#x1F389; <br> 'O' wins";
    }
};



//win logic
const winChecker=()=>
{
    for(let i of winningPattern){
        let [element1, element2, element3]=[
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        //check if elementsare filled
        //if 3 empty elements are same and would give win as would
        if(element1!= "" && element2!="" && element3!=""){
        if(element1==element2 && element2 ==element3){
            //if all 3 buttons have same values then pass the value to win function
            winFunction(element1);
        }
    }
    }
};

//dispaly x/o on click
btnRef.forEach((element) =>{
    element.addEventListener("click",()=>{
        if(xTurn)
        {
            xTurn=false;
            //display x
            element.innerText="X";
            element.disabled=true;
        }
        else{
            xTurn=true;
            //display O
            element.innerText="O";
            element.disabled=true;
        }
        //increment count on each click
        count+=1;
        if(count==9)
        {
            //its a draw since ther are total of 9 boxes
            drawFunction();
        }
        //check for win on every click
        winChecker();
    });
});
//Enable buttons and disable popup on page load
window.onload=enableButtons();
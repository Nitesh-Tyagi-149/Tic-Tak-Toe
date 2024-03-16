let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count =0;

let turnO= true;
const winPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count=0;
}


function draw (){
    msg.innerText = "Match Draw"
    msgContainer.classList.remove("hide");
    disableBoxes();
};

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        count++;
        if(count >=9){
            draw();
        }
        // console.log(count)
    if(turnO){
        box.innerText="O";
        turnO=false;
    }else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled = true;
    checkWinner();
        
    
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => 
{
    msg.innerText = `Congratulation, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};



const checkWinner = () => {
    for (let pattern of winPatterns){
            
            let pos1val =boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val != "" && pos2val!=""&&pos3val!=""){
                if(pos1val==pos2val&&pos2val==pos3val){
                    showWinner(pos1val);
                }
            }
    }
}

newgamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);




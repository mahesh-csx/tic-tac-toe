let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;////playerX;playerO

// let arr = ["apple","banana","orange"];////1D array

// let arr2 = [["apple","banana"],["patato","brinjal"],["chips","biscuits"]];////2D ARRAY

const winPossibilities = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetButton = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked");
        if(turnO){
            // //playerO
            box.innerText = "X";
            turnO = false;
        }else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// //const checkWinner = () => {
//    // for(let pattern of winPossibilities){
//        // console.log(pattern[0],pattern[1],pattern[2]);
//      //   // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]); 
//    //     console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText); 
//  //   }
//// }
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

const showWinner = (winner) => {
    msg.innerText = `congratulations the winnner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPossibilities){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};


newGameBtn.addEventListener("click",resetButton);
resetBtn.addEventListener("click",resetButton);
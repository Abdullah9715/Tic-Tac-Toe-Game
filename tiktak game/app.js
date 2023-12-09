let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameButton = document.querySelector(".new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;
let winnigPattrem = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkWinner = () => {
  for (let pattren of winnigPattrem) {
    let pattren1 = boxes[pattren[0]].innerText;
    let pattren2 = boxes[pattren[1]].innerText;
    let pattren3 = boxes[pattren[2]].innerText;
    if (pattren1 != "" && pattren2 != "" && pattren3 != "") {
      if (pattren1 === pattren2 && pattren2 === pattren3) {
        showWinner(pattren1);
      }

    }
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations ,winner Is ${winner}`;
  msgContainer.classList.remove("hide");
disabledBoxes()}
;

const disabledBoxes=()=>{
for (let box of boxes){
    box.disabled=true
}
}


const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false
        box.innerText="";
    }
    }

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame=()=>{
turnO=true;
enableBoxes();msgContainer.classList.add("hide")
}

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame)
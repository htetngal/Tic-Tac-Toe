const one = document.querySelector(".one") as HTMLElement;
const two = document.querySelector(".two") as HTMLElement;
const three = document.querySelector(".three") as HTMLElement;
const four = document.querySelector(".four") as HTMLElement;
const five = document.querySelector(".five") as HTMLElement;
const six = document.querySelector(".six") as HTMLElement;
const seven = document.querySelector(".seven") as HTMLElement;
const eight = document.querySelector(".eight") as HTMLElement;
const nine = document.querySelector(".nine") as HTMLElement;
const td = document.querySelector(".td") as HTMLElement;
const start = document.querySelector(".start") as HTMLElement;
const restart = document.querySelector(".restart") as HTMLElement;

const table = document.querySelector(".tableTag") as HTMLTableElement;
const playerContainer = document.querySelector(".player") as HTMLElement;

const cells = [one, two, three, four, five, six, seven, eight, nine];
const winStates = [
  [one, two, three],
  [four, five, six],
  [seven, eight, nine],
  [one, four, seven],
  [two, five, eight],
  [three, six, nine],
  [one, five, nine],
  [three, five, seven],
];

let currentPlayer = "";
let i = 0;

const checkPlayer = () => {
  if (i % 2 === 0) {
    currentPlayer = "X";
    playerContainer.innerHTML = "";
    playerContainer.append(currentPlayer + "'s turn");
    console.log("counter" + i);
    i++;
  } else if (i % 2 !== 0) {
    currentPlayer = "O";
    playerContainer.innerHTML = "";
    playerContainer.append(currentPlayer + "'s turn");
    console.log("counter" + i);
    i++;
  }
};

const winStateCheck = (): boolean => {
  let condition = false;

  winStates.forEach((element) => {
    if (
      element[0].textContent === element[1].textContent &&
      element[1].textContent === element[2].textContent &&
      element[0].textContent != ""
    ) {
      condition = true;
    }
  });

  return condition;
};

const restartFun = () => {
  cells.forEach((element) => {
    element.innerHTML = "";
    if (element.classList.contains("disabled"))
      element.classList.remove("disabled");
  });
  playerContainer.innerHTML = "";
  i = 0;
};

start.addEventListener("click", () => {
  start.innerHTML = "";
  start.append("Restart");
  table.classList.remove("disabled");
  restartFun();
  checkPlayer();
  console.log("after cp " + currentPlayer);
});

cells.forEach((ele) => {
  ele.addEventListener("click", () => {
    console.log(currentPlayer);
    ele.append(currentPlayer);
    ele.classList.add("disabled");
    if (winStateCheck()) {
      playerContainer.innerHTML = "";
      playerContainer.append("The winner is " + currentPlayer + ".");
      cells.forEach((ele) => {
        ele.classList.add("disabled");
      });
      currentPlayer = "";
      console.log(currentPlayer);
      i = 0;
      console.log("winstate " + i);
    } else if (i === 9) {
      playerContainer.innerHTML = "";
      playerContainer.append("It's a Tie.");
      currentPlayer = "";
      i = 0;
    } else {
      checkPlayer();
    }
  });
});

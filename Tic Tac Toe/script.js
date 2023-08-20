var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var td = document.querySelector(".td");
var start = document.querySelector(".start");
var restart = document.querySelector(".restart");
var table = document.querySelector(".tableTag");
var playerContainer = document.querySelector(".player");
var cells = [one, two, three, four, five, six, seven, eight, nine];
var winStates = [
    [one, two, three],
    [four, five, six],
    [seven, eight, nine],
    [one, four, seven],
    [two, five, eight],
    [three, six, nine],
    [one, five, nine],
    [three, five, seven],
];
var currentPlayer = "";
var i = 0;
var checkPlayer = function () {
    if (i % 2 === 0) {
        currentPlayer = "X";
        playerContainer.innerHTML = "";
        playerContainer.append(currentPlayer + "'s turn");
        console.log("counter" + i);
        i++;
    }
    else if (i % 2 !== 0) {
        currentPlayer = "O";
        playerContainer.innerHTML = "";
        playerContainer.append(currentPlayer + "'s turn");
        console.log("counter" + i);
        i++;
    }
};
var winStateCheck = function () {
    var condition = false;
    winStates.forEach(function (element) {
        if (element[0].textContent === element[1].textContent &&
            element[1].textContent === element[2].textContent &&
            element[0].textContent != "") {
            condition = true;
        }
    });
    return condition;
};
var restartFun = function () {
    cells.forEach(function (element) {
        element.innerHTML = "";
        if (element.classList.contains("disabled"))
            element.classList.remove("disabled");
    });
    playerContainer.innerHTML = "";
    i = 0;
};
start.addEventListener("click", function () {
    start.innerHTML = "";
    start.append("Restart");
    table.classList.remove("disabled");
    restartFun();
    checkPlayer();
    console.log("after cp " + currentPlayer);
});
cells.forEach(function (ele) {
    ele.addEventListener("click", function () {
        console.log(currentPlayer);
        ele.append(currentPlayer);
        ele.classList.add("disabled");
        if (winStateCheck()) {
            playerContainer.innerHTML = "";
            playerContainer.append("The winner is " + currentPlayer + ".");
            cells.forEach(function (ele) {
                ele.classList.add("disabled");
            });
            currentPlayer = "";
            console.log(currentPlayer);
            i = 0;
            console.log("winstate " + i);
        }
        else if (i === 9) {
            playerContainer.innerHTML = "";
            playerContainer.append("It's a Tie.");
            currentPlayer = "";
            i = 0;
        }
        else {
            checkPlayer();
        }
    });
});

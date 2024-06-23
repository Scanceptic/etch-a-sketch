const etch = document.querySelector("#etch");

const makeSquare = function (num) {
    let square = document.createElement("div");
    square.className = "square";
    square.textContent = "Square " + num;
    return square;
}

for (let i=1; i <= 16*16; i++) {
    etch.appendChild(makeSquare(i));
}
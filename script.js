const etch = document.querySelector("#etch");

const makeSquare = function (num) {
    let square = document.createElement("div");
    square.className = "square";
    square.id = "square"+num;
    square.textContent = "Square " + num;
    let color = `rgb(255,${num},255)`;
    square.style.backgroundColor = color;
    return square;
}

for (let i=1; i <= 16*16; i++) {
    etch.appendChild(makeSquare(i));
}
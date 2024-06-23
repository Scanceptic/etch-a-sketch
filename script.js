const etch = document.querySelector("#etch");

const makeSquare = function (num) {
    let square = document.createElement("div");
    square.className = "square";
    square.id = "square"+num;
    square.textContent = "Square " + num;
    let color = `rgb(255 ${num} 255)`;
    square.style.backgroundColor = color;
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "rgb(255, 85, 150)";
    })
    /*
    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = color; 
    });
    */
    return square;
}
// Add shake function to reset colours

for (let i=1; i <= 16*16; i++) {
    etch.appendChild(makeSquare(i));
}
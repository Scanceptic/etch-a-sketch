const etch = document.querySelector("#etch");

const makeSquare = function (num, sideLength) {
    let square = document.createElement("div");
    square.className = "square";
    square.id = "square"+num;
    if (sideLength !== undefined && sideLength <= 100) {
        square.style.width = `${100/sideLength}%`;
    } else {
        square.style.width = `${100/16}%`;
    }
    //let color = `rgb(255 ${num} 255)`;
    //square.style.backgroundColor = color;
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

const button = document.querySelector("#newsquare");
button.addEventListener("click", () => {
    const promise1 = new Promise((resolve, reject) => {
        resolve(sideLength = prompt("How many squares per side? (Maximum 100)"));
    });
    promise1.then((sideLength) => {
        if (sideLength <= 100 && sideLength > 0) {
            while (etch.firstChild) {
            etch.removeChild(etch.firstChild);
            };
            for (let i=1; i <= sideLength*sideLength; i++) {
                etch.appendChild(makeSquare(i, sideLength));
            };
        } else {
            alert("Invalid side length");
        }
    }); 
});
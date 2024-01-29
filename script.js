const gridContainer = document.querySelector('.grid-container');

const resetButton = document.querySelector('.reset');
const eraseButton = document.querySelector('.erase');

let eraseMode = false;

eraseButton.style.color = 'aliceblue';
eraseButton.style.backgroundColor = 'black';


const SQUARE_SIZE = 48;

const numSquaresWidth = Math.floor(screen.availWidth / SQUARE_SIZE);
const numSquaresHeight = Math.floor(screen.availHeight / SQUARE_SIZE);

gridContainer.style.width = `${numSquaresWidth * SQUARE_SIZE}px`;
gridContainer.style.height = `${numSquaresHeight * SQUARE_SIZE}px`;

for (i=0;i<numSquaresHeight*numSquaresWidth;i++) {
    const newGrid = document.createElement('div');
    newGrid.classList.toggle('square');
    newGrid.style.width = SQUARE_SIZE + "px";

    gridContainer.appendChild(newGrid);
}

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', ()=>{

        if (eraseMode) {
            resetSquare(square)
        } else {
            const valueR = 0;
            const valueG = Math.floor(Math.random()*255);
            const valueB = 255;

            square.classList.remove('square');
            square.classList.add('square-touched');
            square.style.backgroundColor = `rgb(${valueR}, ${valueG}, ${valueB})`;
        }
    });
});

eraseButton.addEventListener('click', () => {
    let temp = eraseButton.style.color;
    eraseButton.style.color = eraseButton.style.backgroundColor;
    eraseButton.style.backgroundColor = temp;
    eraseMode = !eraseMode;
});

resetButton.addEventListener('click', () => {
    squares.forEach(square => {
        resetSquare(square)

    }) 
});

function resetSquare(square) {
    square.classList.remove('square-touched');
    square.classList.add('square');
    square.style.backgroundColor = `rgb(39,39,39)`;
}
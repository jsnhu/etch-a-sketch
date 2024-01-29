const gridContainer = document.querySelector('.grid-container');

const resetButton = document.querySelector('.reset');
const eraseButton = document.querySelector('.erase');

let eraseMode = false;

eraseButton.style.color = 'aliceblue';
eraseButton.style.backgroundColor = 'black';


const SQUARE_SIZE = 48;

gridContainer.style.width = screen.availWidth;
gridContainer.style.height = screen.availHeight;

const numSquaresWidth = Math.floor(screen.availWidth / SQUARE_SIZE);
const numSquaresHeight = Math.floor(screen.availHeight / SQUARE_SIZE);

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
            square.classList.remove('square-touched');
            square.classList.add('square');
            square.style.backgroundColor = 'black';
        } else {
            const randR = Math.random()*255;
            const randG = Math.random()*255;
            const randB = Math.random()*255;

            square.classList.remove('square');
            square.classList.add('square-touched');
            square.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
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
        square.style.backgroundColor = 'black';
    }) 
});
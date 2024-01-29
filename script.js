const gridContainer = document.querySelector('.grid-container');

const SQUARE_SIZE = 30;

gridContainer.style.width = screen.availWidth;
gridContainer.style.height = screen.availHeight;

const numSquaresWidth = Math.floor(screen.availWidth / SQUARE_SIZE);
// - 0 makes a scroll bar. - 3 seems to perfectly fit my screen on chrome
const numSquaresHeight = Math.floor(screen.availHeight / SQUARE_SIZE) - 3;

for (i=0;i<numSquaresHeight*numSquaresWidth;i++) {
    const newGrid = document.createElement('div');
    newGrid.classList.toggle('square');
    newGrid.style.width = SQUARE_SIZE + "px";

    gridContainer.appendChild(newGrid);
}

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = "black";
    });
});
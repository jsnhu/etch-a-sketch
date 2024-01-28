const gridContainer = document.querySelector('.grid-container');

for (i=0;i<256;i++) {
    const newGrid = document.createElement('div');
    newGrid.classList.toggle('square');

    gridContainer.appendChild(newGrid);
}

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', ()=>{
        square.style.backgroundColor = "black";
    });
});
gridContainer = document.querySelector('.grid-container');

for (i=0;i<16;i++) {
    const newGrid = document.createElement('div');
    newGrid.classList.toggle('square');

    gridContainer.appendChild(newGrid);
}
let gridInput = 'How large would you like the grid. /nLimit 100'; //create this as a prompt after button is clicked
let btnClicked = false;
let gridSize = 16;
let loop = 0;


function createGrid() {
    for (let i = 0; i < gridSize; i++) { 
        loop += 1;
        console.log('loop', loop);
                const bodyDiv = document.querySelector('.body');
        let gridElement = document.createElement('div');
        gridElement.innerText = ('div' + loop);
        bodyDiv.appendChild(gridElement);
        if (loop < (gridSize * gridSize)) {
            for (let i = gridSize; i > loop; i--) {
                createGrid();
                console.log('loopy', loop);
            }
        }
    }
}



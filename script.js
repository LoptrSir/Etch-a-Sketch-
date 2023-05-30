let gridInput = 'How large would you like the grid. /nLimit 100'; //create this as a prompt after button is clicked
let btnClicked = false;
let gridSize = 8;
let totalElements = gridSize * gridSize;

function createGrid() {
  const bodyDiv = document.querySelector('.body');

  for (let i = 0; i < totalElements; i++) {
    const gridElement = document.createElement('div');
    const elementIndex = i + 1;
    gridElement.innerText = 'div' + elementIndex;

    // unable to find a clean simple way to migrate this to css without allot of code
    gridElement.style.flexBasis = `calc(100% / ${gridSize})`;

    bodyDiv.appendChild(gridElement);
  }
}
// Working on Button
function sizeButton() {

  if (btnClicked) {
    prompt(gridInput);
    gridSize = prompt;
    console.log('GS', gridSize, 'btn click');

  }
}
const sizeBtn = document.getElementById('FSize');
sizeBtn.onclick = sizeButton(); // consider changing to an anonymous function in the onclick
createGrid();
// end of Button

createGrid();

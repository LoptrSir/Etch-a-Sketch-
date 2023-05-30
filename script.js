let gridInput = ('How large would you like the grid? Limit 68');
let gridSize = 8;
let totalElements = gridSize * gridSize;

function createGrid() {
  const bodyDiv = document.querySelector('.body');
  bodyDiv.innerHTML = '';
  for (let i = 0; i < totalElements; i++) {
    const gridElement = document.createElement('div');
    const elementIndex = i + 1;
    gridElement.innerText = 'div' + elementIndex;
    // unable to find a clean simple way to migrate this to css without allot of code
    gridElement.style.flexBasis = `calc(100% / ${gridSize})`;
    bodyDiv.appendChild(gridElement);
  }
}

function handleEvent() {
  gridSize = prompt(gridInput);
  totalElements = gridSize * gridSize;
  console.log('GS', gridSize, 'btn click');
  createGrid()
}

FSize.addEventListener('click', handleEvent);

createGrid();

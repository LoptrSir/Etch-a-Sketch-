let gridInput = ('How large would you like the grid? Limit 68');
let gridSize = 8;
let totalElements = gridSize * gridSize;

function createGrid() {
  const bodyDiv = document.querySelector('.body');
  bodyDiv.innerHTML = '';
  for (let i = 0; i < totalElements; i++) {
    const gridElement = document.createElement('div');
    const elementIndex = i + 1;
    gridElement.innerText = elementIndex;
    // unable to find a clean simple way to migrate this to css without allot of code
    gridElement.style.flexBasis = `calc(100% / ${gridSize})`;
    bodyDiv.appendChild(gridElement);
  }
}

function handleEvent() {
  let inputValid = false;
  while (!inputValid) {
    gridSize = prompt(gridInput);
    if (gridSize >= 1 && gridSize <= 68 && !isNaN(gridSize)) {
      inputValid = true;
    }
    else {
      alert('ERROR: Input a valid number 1 -68');
    }
  }
  console.log('GS', gridSize, 'btn click');
  totalElements = gridSize * gridSize;

//Hover function that changes color of box

  createGrid()
}

FSize.addEventListener('click', handleEvent);

createGrid();

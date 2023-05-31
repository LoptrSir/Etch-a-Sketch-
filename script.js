let gridInput = ('How large would you like the grid? Limit 68');
let gridSize = 8;
let totalElements = gridSize * gridSize;

// Grid generation
const bodyDiv = document.querySelector('.body');
function createGrid() {
  bodyDiv.innerHTML = '';
  for (let i = 0; i < totalElements; i++) {
    const gridElement = document.createElement('div');
    const elementIndex = i + 1;
    gridElement.innerText = elementIndex;
    // unable to find a clean way to place into css.
    gridElement.style.flexBasis = `calc(100% / ${gridSize})`;
    bodyDiv.appendChild(gridElement);
  }
}

//FieldSize button functionality
FSize.addEventListener('click', function () {
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
  totalElements = gridSize * gridSize;
  createGrid()
});

// color change function
bodyDiv.addEventListener('mouseover', function(event){
  if (event.target.matches('.body div')) {
    event.target.style.backgroundColor = 'blue'; 
}});

createGrid();
// stable 5/31 11:50

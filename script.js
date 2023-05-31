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

// fade to black begin
function changeColor(e) {
  if (e.target.matches(".body div")) {
    const div = e.target;
    const currentColor = div.style.backgroundColor || getComputedStyle(div).backgroundColor;
    const newColor = darkenColor(currentColor, .1);
    div.style.backgroundColor = newColor;
  }
}

function darkenColor(color, percentage) {
  const rgb = color.match(/\d+/g);
  const newRgb = rgb.map(component => Math.floor(component * (1 - percentage)));
  return `rgb(${newRgb.join(',')})`
}

bodyDiv.addEventListener('mouseover', changeColor);

createGrid();
// stable 5/31 14:38

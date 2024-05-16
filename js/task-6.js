/**
 * Generates a random color and returns its value in the hex-format
 * of string type
 * @returns {string}
 */
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/**
 * Creates div-elements inside div#boxes
 * @param {Number} amount 
 */
function createBoxes(amount) {
  const arr = [];
  let widthBox = 20;
  let heightBox = 20;
  let step = 10;

  for (let i = 0; i < amount; i++) {
    const boxElement = document.createElement('div');
    widthBox += step;
    heightBox += step;
    boxElement.style.width = `${widthBox}px`;
    boxElement.style.height = `${heightBox}px`;
    boxElement.style.backgroundColor = getRandomHexColor();
    arr.push(boxElement);
  }

  boxesElem.append(...arr);
}

/**
 * Removes all elements inside div#boxes
 */
function destroyBoxes() {
  const boxList = document.querySelectorAll('#boxes div');
  for (let i = 0; i < boxList.length; i++) {
    boxList[i].remove()
  }
}

const inputElem = document.querySelector('#controls input');
const boxesElem = document.querySelector('#boxes');

const createBtnElem = document.querySelector('button[data-create]');
const destroyBtnElem = document.querySelector('button[data-destroy]');

let quantityOfElem = null;

inputElem.addEventListener('input', event => {
  quantityOfElem = event.currentTarget.value;
});


createBtnElem.addEventListener('click', event => {
  if (quantityOfElem >= 1 && quantityOfElem <= 100) {
    destroyBoxes();
    createBoxes(quantityOfElem);
    inputElem.value = '';
    quantityOfElem = null;
   }
  
});

destroyBtnElem.addEventListener('click', event => {
  destroyBoxes();
});



//--------------------------

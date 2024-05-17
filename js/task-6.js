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
    boxList[i].remove();
  }
}

/**
 * Gets the current input value
 * @param {*} event
 */
const handleClickInput = event => {
  event.preventDefault();
  quantityOfElem = event.currentTarget.value;
};

/**
 * Processes click on the create-button
 */
const handleCreateBtnClick = event => {
  event.preventDefault();

  if (quantityOfElem >= minLimit && quantityOfElem <= maxLimit) {
    destroyBoxes();
    createBoxes(quantityOfElem);
    inputElem.value = '';
    quantityOfElem = null;
  } else {
    inputElem.value = '';
    quantityOfElem = null;
  }
};

/**
 * Processes click on the destroy-button
 * @param {*} event
 */
const handleDestroyBtnClick = event => {
  event.preventDefault();
  destroyBoxes();
};

const inputElem = document.querySelector('#controls input');
const boxesElem = document.querySelector('#boxes');

const createBtnElem = document.querySelector('button[data-create]');
const destroyBtnElem = document.querySelector('button[data-destroy]');

const minLimit = Number(inputElem.getAttribute('min'));
const maxLimit = Number(inputElem.getAttribute('max'));

let quantityOfElem = null;

inputElem.addEventListener('input', handleClickInput);

createBtnElem.addEventListener('click', handleCreateBtnClick);

destroyBtnElem.addEventListener('click', handleDestroyBtnClick);

/**
 * Returns true if the string is empty.
 * @param {String} str
 * @returns {Boolean}
 */
function isEmptyString(str) {
  if (str.trim() === '') {
    return true;
  }
  return false;
}

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', event => {
  const username = event.currentTarget.value;

  if (isEmptyString(username)) {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = username.trim();
  }
});

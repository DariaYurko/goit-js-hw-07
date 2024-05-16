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


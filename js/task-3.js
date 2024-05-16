// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('h1').firstElementChild;
// console.log(outputName);

// inputName.addEventListener('input', (event) => {

//    const username = event.currentTarget.value;
//    console.log(username);

//    if (username === '' || isWhi) {
//      outputName.textContent = 'Anonymous';
//    } else {
//      outputName.textContent = username.trim();
//    }
// })

/**
 * LESSON 1
 *
 */
//  querySelector

const document1 = document;
console.log(document1);

const button = document.querySelector('.button');
console.log(button.textContent);

button.textContent = 'Buy now';
console.log(button.textContent);

//  querySelectorAll

const listItem = document.querySelectorAll('.list .list__item');
console.log(listItem);
console.log(listItem.length);

const el1 = document.querySelector('.list__item');
console.log(el1.firstElementChild); // 1.1
console.log(el1.lastElementChild);  // 1.3

console.log(el1.previousElementSibling); // null
console.log(el1.nextElementSibling); // 2 li

console.log(el1.parentElement); // ul
console.log(el1.parentElement); // ul

// Propertis
const inputEl = document.querySelector('#name-input')

inputEl.setAttribute('new-atr', 'Some text here');
console.log(inputEl.getAttribute('new-atr'));

inputEl.removeAttribute('new-atr');
console.log(inputEl);

console.log(inputEl.hasAttribute('type')); //true

//
console.log(inputEl);
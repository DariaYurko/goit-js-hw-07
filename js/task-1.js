// Кількість категорій в ul#categories
const categoriesList = document.querySelectorAll('.item');
console.log(` Number of categories: ${categoriesList.length}`);

// Знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього)
categoriesList.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);

  const itemList = item.lastElementChild;
  console.log(`Elements: ${itemList.children.length}`);
});

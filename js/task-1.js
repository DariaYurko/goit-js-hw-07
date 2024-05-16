// 1.Кількість категорій в ul#categories
const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

// 2.Знайди й виведи в консоль текст заголовка елемента (тегу <h2>)
// і кількість елементів у категорії(усіх < li >, вкладених у нього)
categoriesList.forEach(item => {
  const categoryTitle = item.firstElementChild.textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryItemList = item.lastElementChild;
  console.log(`Elements: ${categoryItemList.children.length}`);
});

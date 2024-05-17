const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(item => {
  const categoryTitle = item.firstElementChild.textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryItemList = item.lastElementChild;
  console.log(`Elements: ${categoryItemList.children.length}`);
});

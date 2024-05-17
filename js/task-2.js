const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Alpine Spring Meadows',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Nature Landscape',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Lighthouse Coast Sea',
  },
];

// // version 1
// const galleryList = document.querySelector('.gallery');

// function cardTemplate(card) {
//   return `<li class="gallery__item">
//   <img class="gallery__image" src="${card.url}" alt="${card.alt}">
//   </li>`;
// }

// function cardsTemplate(arr) {
//   return arr.map(cardTemplate).join('');
// }

// const markup = cardsTemplate(images);

// galleryList.innerHTML = markup;


// version 2
const galleryList = document.querySelector('.gallery');
const arrItem = []
const arrImage = []

images.forEach(image => {
  const itemGallerry = document.createElement('li');
  itemGallerry.classList.add('gallery__item');

  const imageGallery = document.createElement('img');
  imageGallery.classList.add('gallery__image');

  imageGallery.setAttribute('src', image.url);
  imageGallery.setAttribute('alt', image.alt);

  galleryList.append(itemGallerry);
  itemGallerry.append(imageGallery);
});

console.log(galleryList);

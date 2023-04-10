import {mockData} from './data.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const pictureContainer = document.querySelector('.pictures');

const pictureFragment = document.createDocumentFragment();

mockData.forEach(({url, comments, likes}) => {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.querySelector('img').src = url;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  newPicture.querySelector('.picture__likes').textContent = likes;
  pictureFragment.appendChild(newPicture);
});

pictureContainer.appendChild(pictureFragment);

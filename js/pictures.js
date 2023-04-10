const createPhotoElement = ({url, comments, likes}) => {
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.querySelector('img').src = url;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  newPicture.querySelector('.picture__likes').textContent = likes;
  return newPicture;
};

export const renderPhotos = (photos) => {
  const pictureContainer = document.querySelector('.pictures');
  pictureContainer.append(...photos.map(createPhotoElement));
};

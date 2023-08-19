import {cardTemplate} from './variables.js';
import {guestsWords, roomsWords, typeOfHousingTranslate} from './constants.js';
import {pluralize} from './util.js';

const createPopup = (element) => {
  const popupElement = cardTemplate.cloneNode(true);
  const popupAvatar = popupElement.querySelector('.popup__avatar');
  const popupTitle = popupElement.querySelector('.popup__title');
  const popupAddress = popupElement.querySelector('.popup__text--address');
  const popupPrice = popupElement.querySelector('.popup__text--price');
  const popupPriceSpan = popupPrice.querySelector('span').cloneNode(true);
  const popupType = popupElement.querySelector('.popup__type');
  const popupCapacity = popupElement.querySelector('.popup__text--capacity');
  const popupTime = popupElement.querySelector('.popup__text--time');
  const popupDescription = popupElement.querySelector('.popup__description');
  const popupFeatures = popupElement.querySelector('.popup__features');
  const popupPhotosContainer = popupElement.querySelector('.popup__photos');
  const popupPhotoTemplateCopy = popupPhotosContainer.querySelector('img').cloneNode();
  const {author, offer} = element;
  const {address, checkin, checkout, description, guests, price, rooms, title, type, features, photos} = offer;
  popupAvatar.src = author.avatar;
  popupTitle.textContent = title;
  popupAddress.textContent = address;
  popupPrice.textContent = `${price.toLocaleString('ru-RU')} `;
  popupPrice.appendChild(popupPriceSpan);
  popupType.textContent = typeOfHousingTranslate[type];
  popupCapacity.textContent = `${rooms} ${pluralize(rooms, roomsWords)} для ${guests} ${pluralize(guests, guestsWords)}`;
  popupTime.textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  if (description !== undefined) {
    popupDescription.textContent = description;
  } else {
    popupDescription.textContent = '';
  }
  popupFeatures.innerHTML = '';
  if (features !== undefined) {
    const newFragment = document.createDocumentFragment();
    features.forEach((feature) => {
      const newItem = document.createElement('li');
      newItem.className = `popup__feature popup__feature--${feature}`;
      newFragment.appendChild(newItem);
    });
    popupFeatures.appendChild(newFragment);
  }
  popupPhotosContainer.innerHTML = '';
  if (photos !== undefined) {
    const newFragment = document.createDocumentFragment();
    photos.forEach((photo) => {
      const newPhoto = popupPhotoTemplateCopy.cloneNode();
      newPhoto.src = photo;
      newFragment.appendChild(newPhoto);
    });
    popupPhotosContainer.appendChild(newFragment);
  }
  return popupElement;
};

export {createPopup};

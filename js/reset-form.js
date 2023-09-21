import {
  coordinatesOfAddress,
  formTitle,
  housingImageContainer,
  housingImageWrapper,
  housingType,
  imageToUploadWrapper,
  priceInput,
} from './variables.js';
import {resetPriceSlider} from './price-slider.js';
import {pristine} from './validation.js';
import {startCoordinates} from './constants.js';

const defaultHousingImage = housingImageWrapper.cloneNode();
const hosingTypeCopy = housingType.cloneNode(true);

const resetForm = (evt) => {
  evt.preventDefault();
  const {lat, lng} = startCoordinates;
  coordinatesOfAddress.value = `${lat} ${lng}`;
  formTitle.value = '';
  resetPriceSlider();
  priceInput.value = '';
  pristine.reset();
  housingType.innerHTML = '';
  for (const option of hosingTypeCopy) {
    housingType.appendChild(option.cloneNode(true));
  }
  imageToUploadWrapper.innerHTML = '';
  imageToUploadWrapper.style.padding = '0 15px';
  const defaultElement = document.createElement('img');
  defaultElement.src = 'img/muffin-grey.svg';
  defaultElement.alt = 'Аватар пользователя';
  defaultElement.width = 40;
  defaultElement.height = 44;
  imageToUploadWrapper.appendChild(defaultElement);

  const housingPhotos = housingImageContainer.querySelectorAll('.ad-form__photo');
  housingPhotos.forEach((photo) => {
    photo.remove();
  });
  housingImageContainer.appendChild(defaultHousingImage);
};

export {resetForm};

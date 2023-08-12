import {housingImageContainer, housingImageWrapper, imageToUploadWrapper} from './variables.js';
import {resetPriceSlider} from './price-slider.js';
import {pristine} from './validation.js';

const defaultHousingImage = housingImageWrapper.cloneNode();

const resetForm = () => {
  resetPriceSlider();
  pristine.reset();
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

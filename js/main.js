import {deactivateForms} from './form-load-status.js';
import {sendData} from './load-data.js';
import {initMap} from './map.js';
import {initUploadImage} from './image-upload.js';
import {initTimeCheck} from './time-check.js';
import {adForm, imageToUpload, imageToUploadWrapper, priceInput} from './variables.js';
import {pristine} from './validation.js';
import {addPriceSlider, resetPriceSlider} from './price-slider.js';
import {PRICE_DEFAULT} from './constants.js';

deactivateForms();
initMap();
initUploadImage();
initTimeCheck();
priceInput.placeholder = String(PRICE_DEFAULT);
priceInput.addEventListener('wheel', (evt) => {
  evt.preventDefault();
});
addPriceSlider();
priceInput.value = '';

const defaultImageToUpload = imageToUpload.cloneNode();
adForm.addEventListener('reset', () => {
  resetPriceSlider();
  pristine.reset();
  imageToUploadWrapper.innerHTML = '';
  imageToUploadWrapper.style.padding = '0 15px';
  imageToUploadWrapper.appendChild(defaultImageToUpload);
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  //добавить ресет noUiSlider
  if (isValid) {
    console.log('ok');
  } else {
    console.log('not ok');
  }
  // blockSubmitButton();
  // sendData(new FormData(evt.target))
  //   .then(
  //     () => {
  //       console.log('ok');
  //       // showSuccess();
  //     }
  //   )
  //   .catch(
  //     () => {
  //       console.log('not ok');
  //     }
  //     // (err) => {
  //     //   showError(err.message);
  //     // }
  //   )
    // .finally(unblockSubmitButton);
});

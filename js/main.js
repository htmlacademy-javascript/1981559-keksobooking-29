import {deactivateForms} from './form-load-status.js';
import {sendData} from './load-data.js';
import {initMap} from './map.js';
import {initUploadImage} from './image-upload.js';
import {adForm, priceInput} from './variables.js';
import {pristine} from './validation.js';
import {addPriceSlider} from './price-slider.js';
import {PRICE_DEFAULT} from './constants.js';
import {checkMinPrice} from './price-value.js';

deactivateForms();
initMap();
initUploadImage();
priceInput.placeholder = String(PRICE_DEFAULT);
priceInput.addEventListener('wheel', (evt) => {
  evt.preventDefault();
});
addPriceSlider();
priceInput.value = '';

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
  //Поменять логику
  let isValid = true;
  isValid = checkMinPrice();
  // выше возможна ошибка
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

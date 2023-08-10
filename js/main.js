import {deactivateForms} from './form-load-status.js';
import {sendData} from './load-data.js';
import {initMap} from './map.js';
import {uploadMapImage} from './image-upload.js';
import {adForm, priceInput, uploadMapImageInput} from './variables.js';
import {addPristine, pristine} from './validation.js';
import {addPriceSlider} from './price-slider.js';
import {PRICE_DEFAULT} from './constants.js';

deactivateForms();
initMap();
uploadMapImageInput.addEventListener('change', uploadMapImage);
priceInput.placeholder = String(PRICE_DEFAULT);
priceInput.addEventListener('wheel', (evt) => {
  evt.preventDefault();
});
addPristine(PRICE_DEFAULT);
addPriceSlider();

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('ok');
  } else {
    console.log('not ok');
  }
  // blockSubmitButton();
  sendData(new FormData(evt.target))
    .then(
      () => {
        console.log('ok');
        // showSuccess();
      }
    )
    .catch(
      () => {
        console.log('not ok');
      }
      // (err) => {
      //   showError(err.message);
      // }
    )
    // .finally(unblockSubmitButton);
});

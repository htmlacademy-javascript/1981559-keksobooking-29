import {deactivateForms} from './form-load-status.js';
import {sendData} from './load-data.js';
import {initMap} from './map.js';
import {uploadMapImage} from './image-upload.js';
import {addPriceSlider} from './price-slider.js';
import {adForm, priceInput, uploadMapImageInput} from './variables.js';
import {pristine} from './validation.js';

deactivateForms();
initMap();
uploadMapImageInput.addEventListener('change', uploadMapImage);
addPriceSlider();
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  console.log(priceInput.value)
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

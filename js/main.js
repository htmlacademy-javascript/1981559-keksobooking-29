import {deactivateForms} from './form-load-status.js';
import {sendData} from './load-data.js';
import {initMap} from './map.js';
import {initUploadImage} from './image-upload.js';
import {initTimeCheck} from './time-check.js';
import {adForm} from './variables.js';
import {pristine} from './validation.js';
import {addPriceSlider} from './price-slider.js';
import {resetForm} from './reset-form.js';

deactivateForms();
initMap();
initUploadImage();
initTimeCheck();
addPriceSlider();

adForm.addEventListener('reset', resetForm);
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
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

import {deactivateForms} from './form-load-status.js';
import {sendData} from './load-data.js';
import {initMap} from './map.js';
import {initUploadImage} from './image-upload.js';
import {initTimeCheck} from './time-check.js';
import {adForm} from './variables.js';
import {pristine} from './validation.js';
import {addPriceSlider} from './price-slider.js';
import {resetForm} from './reset-form.js';
import {blockSubmitButton, unblockSubmitButton} from './submit-button.js';
import {isEscapeKey} from './util.js';

deactivateForms();
initMap();
initUploadImage();
initTimeCheck();
addPriceSlider();

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const successContainer = successTemplate.querySelector('.success');

const showSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  let returnToFormOnEscapeClick = () => {};

  const removeSuccessMessage = () => {
    document.removeEventListener('keydown', returnToFormOnEscapeClick);
    successElement.remove();
  };

  returnToFormOnEscapeClick = (evt) => {
    if (isEscapeKey(evt)) {
      removeSuccessMessage();
    }
  };

  document.addEventListener('keydown', returnToFormOnEscapeClick);
  const onOutsideSuccessContainerClick = (evt) => {
    const outsideErrorContainerClick = evt.composedPath().includes(successContainer) === false;
    if (outsideErrorContainerClick) {
      document.removeEventListener('click', onOutsideSuccessContainerClick);
      removeSuccessMessage();
    }
  };
  document.addEventListener('click', onOutsideSuccessContainerClick);
  adForm.appendChild(successElement);
};

adForm.addEventListener('reset', resetForm);
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('ok');
    blockSubmitButton();
    sendData(new FormData(evt.target))
      .then(
        () => {
          console.log('ok in');
          showSuccess();
        }
      )
      .then(
        () => {
          resetForm();
          adForm.reset();
        }
      )
      .catch(
        (err) => {
          // showError(err.message);
          console.log('not ok');
          console.log('err')
        }
      )
      .finally(unblockSubmitButton);
  } else {
    console.log('not ok');
  }
});

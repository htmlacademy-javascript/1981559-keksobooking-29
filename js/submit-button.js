import {SubmitButtonText} from './constants.js';
import {adForm, submitButton} from './variables.js';
import {pristine} from './validation.js';
import {sendData} from './load-data.js';
import {showSuccess} from './success-message.js';
import {resetForm} from './reset-form.js';
import {showError} from './error-message.js';

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const onSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(new FormData(evt.target))
      .then(
        () => {
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
          showError(err.message);
        }
      )
      .finally(unblockSubmitButton);
  }
};

export {blockSubmitButton, unblockSubmitButton, onSubmit};

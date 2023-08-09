import {SubmitButtonText} from './constants.js';
import {submitButton} from './variables.js';

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

export {blockSubmitButton, unblockSubmitButton};

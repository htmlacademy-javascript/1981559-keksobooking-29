import {errorTemplate, bodyElement} from './variables.js';
import {isEscapeKey} from './util.js';

const showError = (message) => {
  const errorElement = errorTemplate.cloneNode(true);
  const errorMessage = errorElement.querySelector('.error__message');
  const errorButton = errorElement.querySelector('.error__button');
  errorMessage.textContent = message;
  let onEscapeClickReturnToForm = () => {};

  const onErrorButtonClickRemoveErrorMessage = () => {
    errorButton.removeEventListener('click', onErrorButtonClickRemoveErrorMessage);
    document.removeEventListener('keydown', onEscapeClickReturnToForm);
    errorElement.remove();
  };

  onEscapeClickReturnToForm = (evt) => {
    if (isEscapeKey(evt)) {
      onErrorButtonClickRemoveErrorMessage();
    }
  };

  document.addEventListener('keydown', onEscapeClickReturnToForm);
  const onOutsideErrorContainerClick = (evt) => {
    const outsideErrorContainerClick = evt.composedPath().includes(errorTemplate) === false;
    if (outsideErrorContainerClick) {
      document.removeEventListener('click', onOutsideErrorContainerClick);
      onErrorButtonClickRemoveErrorMessage();
    }
  };

  document.addEventListener('click', onOutsideErrorContainerClick);
  errorButton.addEventListener('click', onErrorButtonClickRemoveErrorMessage);

  bodyElement.appendChild(errorElement);
};

export {showError};

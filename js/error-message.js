import {errorTemplate, bodyElement} from './variables.js';
import {isEscapeKey} from './util.js';

const showError = (message) => {
  const errorElement = errorTemplate.cloneNode(true);
  const errorMessage = errorElement.querySelector('.error__message');
  const errorButton = errorElement.querySelector('.error__button');
  errorMessage.textContent = message;
  let returnToFormOnEscapeClick = () => {};

  const removeErrorMessage = () => {
    errorButton.removeEventListener('click', removeErrorMessage);
    document.removeEventListener('keydown', returnToFormOnEscapeClick);
    errorElement.remove();
  };

  returnToFormOnEscapeClick = (evt) => {
    if (isEscapeKey(evt)) {
      removeErrorMessage();
    }
  };

  document.addEventListener('keydown', returnToFormOnEscapeClick);
  const onOutsideErrorContainerClick = (evt) => {
    const outsideErrorContainerClick = evt.composedPath().includes(errorTemplate) === false;
    if (outsideErrorContainerClick) {
      document.removeEventListener('click', onOutsideErrorContainerClick);
      removeErrorMessage();
    }
  };

  document.addEventListener('click', onOutsideErrorContainerClick);
  errorButton.addEventListener('click', removeErrorMessage);

  bodyElement.appendChild(errorElement);
};

export {showError};

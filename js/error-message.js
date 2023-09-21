import {errorTemplate, bodyElement} from './variables.js';
import {isEscapeKey} from './util.js';

const showError = (message) => {
  const errorElement = errorTemplate.cloneNode(true);
  const errorMessage = errorElement.querySelector('.error__message');
  const errorButton = errorElement.querySelector('.error__button');
  errorMessage.textContent = message;
  let onEscapeKeydown = () => {};

  const onErrorButtonClick = () => {
    errorButton.removeEventListener('click', onErrorButtonClick);
    document.removeEventListener('keydown', onEscapeKeydown);
    errorElement.remove();
  };

  onEscapeKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      onErrorButtonClick();
    }
  };

  document.addEventListener('keydown', onEscapeKeydown);
  const onOutsideErrorContainerClick = (evt) => {
    const outsideErrorContainerClick = evt.composedPath().includes(errorTemplate) === false;
    if (outsideErrorContainerClick) {
      document.removeEventListener('click', onOutsideErrorContainerClick);
      onErrorButtonClick();
    }
  };

  document.addEventListener('click', onOutsideErrorContainerClick);
  errorButton.addEventListener('click', onErrorButtonClick);

  bodyElement.appendChild(errorElement);
};

export {showError};

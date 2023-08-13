import {successTemplate, successContainer, adForm} from './variables.js';
import {isEscapeKey} from './util.js';

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

export {showSuccess};

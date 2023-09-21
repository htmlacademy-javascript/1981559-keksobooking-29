import {successTemplate, successContainer, bodyElement} from './variables.js';
import {isEscapeKey} from './util.js';

const showSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  let onEscapeKeydown = () => {};

  const removeSuccessMessage = () => {
    document.removeEventListener('keydown', onEscapeKeydown);
    successElement.remove();
  };

  onEscapeKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      removeSuccessMessage();
    }
  };

  document.addEventListener('keydown', onEscapeKeydown);
  const onOutsideSuccessContainerClick = (evt) => {
    const outsideErrorContainerClick = evt.composedPath().includes(successContainer) === false;
    if (outsideErrorContainerClick) {
      document.removeEventListener('click', onOutsideSuccessContainerClick);
      removeSuccessMessage();
    }
  };
  document.addEventListener('click', onOutsideSuccessContainerClick);
  bodyElement.appendChild(successElement);
};

export {showSuccess};

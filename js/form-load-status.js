import {adForm, interactiveFormElements, mapForm} from './variables.js';
import {resetForm} from './reset-form.js';
import {onSubmit} from './submit-button.js';

const deactivateForms = () => {
  interactiveFormElements.forEach((element) => {
    element.disabled = true;
  });
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');
};

const activateForms = () => {
  interactiveFormElements.forEach((element) => {
    element.disabled = false;
  });
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');
  adForm.addEventListener('reset', resetForm);
  adForm.addEventListener('submit', onSubmit);
};

export {deactivateForms, activateForms};

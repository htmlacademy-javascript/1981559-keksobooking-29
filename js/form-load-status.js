import {adForm, interactiveFormElements, mapForm} from './variables.js';

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
};

export {deactivateForms, activateForms};

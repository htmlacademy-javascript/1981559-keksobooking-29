import {
  adForm,
  interactiveMapFormElements,
  interactiveAdFormElements,
  mapForm,
  priceInput,
  coordinatesOfAddress,
} from './variables.js';
import {resetForm} from './reset-form.js';
import {onSubmit} from './submit-button.js';
import {startCoordinates} from './constants.js';

const deactivateForms = () => {
  interactiveMapFormElements.forEach((element) => {
    element.disabled = true;
  });
  interactiveAdFormElements.forEach((element) => {
    element.disabled = true;
  });
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');
};

const activateAdForm = () => {
  interactiveAdFormElements.forEach((element) => {
    element.disabled = false;
  });
  adForm.classList.remove('ad-form--disabled');
  adForm.addEventListener('reset', resetForm);
  adForm.addEventListener('submit', onSubmit);
  priceInput.addEventListener('keydown', (evt) => {
    if (evt.key === '-' || evt.key === '+' || evt.key === 'e') {
      evt.preventDefault();
    }
  });
  const {lat, lng} = startCoordinates;
  coordinatesOfAddress.value = `${lat} ${lng}`;
};

const activateMapForm = () => {
  interactiveMapFormElements.forEach((element) => {
    element.disabled = false;
  });
  mapForm.classList.remove('map__filters--disabled');
};

export {deactivateForms, activateAdForm, activateMapForm};

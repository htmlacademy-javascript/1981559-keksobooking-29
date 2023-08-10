import {adForm, formTitle, priceInput} from './variables.js';
import {pristineDefaultConfig, TITLE_MAX_LENGTH, TITLE_MIN_LENGTH} from './constants.js';

formTitle.required = true;
formTitle.dataset.pristineRequiredMessage = 'Обязательное текстовое поле.';
priceInput.required = true;
priceInput.dataset.pristineRequiredMessage = 'Обязательное числовое поле.';
priceInput.dataset.pristineMax = '100000';
priceInput.dataset.pristineMaxMessage = 'Максимальное значение — 100 000.';

const pristine = new Pristine(adForm, pristineDefaultConfig, false);

const checkLength = () => {
  const inputLength = formTitle.value.trim().length;
  return inputLength >= TITLE_MIN_LENGTH && inputLength <= TITLE_MAX_LENGTH;
};

pristine.addValidator(formTitle, checkLength, 'От 30 до 100 символов.');

export {pristine};

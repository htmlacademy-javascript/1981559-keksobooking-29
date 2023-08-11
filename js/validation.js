import {adForm, formTitle, priceInput, roomNumber, capacity, timeIn, timeOut} from './variables.js';
import {pristineDefaultConfig, TITLE_MAX_LENGTH, TITLE_MIN_LENGTH, numberOfGuests, numberOfRooms} from './constants.js';
const {oneRoom, twoRooms, threeRooms, manyRooms} = numberOfRooms;
const {oneGuest, twoGuests, threeGuests, noGuests} = numberOfGuests;

formTitle.required = true;
formTitle.dataset.pristineRequiredMessage = 'Обязательное текстовое поле.';
priceInput.required = true;
priceInput.dataset.pristineRequiredMessage = 'Обязательное числовое поле.';
priceInput.dataset.pristineMax = '100000';
priceInput.dataset.pristineMaxMessage = 'Максимальная цена — 100 000.';

const pristine = new Pristine(adForm, pristineDefaultConfig, false);

const checkLength = () => {
  const inputLength = formTitle.value.trim().length;
  return inputLength >= TITLE_MIN_LENGTH && inputLength <= TITLE_MAX_LENGTH;
};

const checkRooms = () => {
  switch (roomNumber.value) {
    case oneRoom:
      if (capacity.value !== oneGuest) {
        return false;
      }
      break;
    case twoRooms:
      if (capacity.value !== oneGuest && capacity.value !== twoGuests) {
        return false;
      }
      break;
    case threeRooms:
      if (capacity.value !== oneGuest && capacity.value !== twoGuests && capacity.value !== threeGuests) {
        return false;
      }
      break;
    case manyRooms: {
      if (capacity.value !== noGuests) {
        return false;
      }
      break;
    }
  }
  return true;
};

const getRoomsErrorMessage = () => {
  switch (roomNumber.value) {
    case oneRoom:
      if (capacity.value !== oneGuest) {
        return 'Только для 1 гостя.';
      }
      break;
    case twoRooms:
      if (capacity.value !== oneGuest && capacity.value !== twoGuests) {
        return 'Только от 1 до 2 гостей';
      }
      break;
    case threeRooms:
      if (capacity.value !== oneGuest && capacity.value !== twoGuests && capacity.value !== threeGuests) {
        return 'Только от 1 до 3 гостей';
      }
      break;
    case manyRooms: {
      if (capacity.value !== noGuests) {
        return '100 комнат — не для гостей';
      }
      break;
    }
  }
};

const checkTime = () => (timeOut.value === timeIn.value);

pristine.addValidator(formTitle, checkLength, 'От 30 до 100 символов.');
pristine.addValidator(roomNumber, checkRooms, getRoomsErrorMessage);
pristine.addValidator(timeOut, checkTime, 'Время заедзда должно соответствовать времени выезда.');

export {pristine};

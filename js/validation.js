import {adForm, formTitle, priceInput, roomNumber, capacity, housingType, coordinatesOfAddress} from './variables.js';
import {pristineDefaultConfig, TITLE_MAX_LENGTH, TITLE_MIN_LENGTH, numberOfGuests, numberOfRooms, minPriceValues} from './constants.js';
const {oneRoom, twoRooms, threeRooms, manyRooms} = numberOfRooms;
const {oneGuest, twoGuests, threeGuests, noGuests} = numberOfGuests;
const {bungalow, flat, hotel, house, palace} = minPriceValues;

coordinatesOfAddress.dataset.pristineRequiredMessage = 'Укажите адрес жилья красной меткой на карте.';
coordinatesOfAddress.required = true;
coordinatesOfAddress.setAttribute('readonly', 'true');
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

const checkMinPrice = () => {
  let minPrice = 0;
  switch (housingType.value) {
    case 'bungalow':
      minPrice = bungalow;
      break;
    case 'flat':
      minPrice = flat;
      break;
    case 'hotel':
      minPrice = hotel;
      break;
    case 'house':
      minPrice = house;
      break;
    case 'palace':
      minPrice = palace;
      break;
  }
  return priceInput.value >= minPrice;
};

const getMinPriceErrorMessage = () => {
  switch (housingType.value) {
    case 'bungalow':
      return 'Минимальная цена за ночь 0';
    case 'flat':
      return 'Минимальная цена за ночь 1 000';
    case 'hotel':
      return 'Минимальная цена за ночь 3 000';
    case 'house':
      return 'Минимальная цена за ночь 5 000';
    case 'palace':
      return 'Минимальная цена за ночь 10 000';
  }
};

pristine.addValidator(formTitle, checkLength, 'От 30 до 100 символов.');
pristine.addValidator(roomNumber, checkRooms, getRoomsErrorMessage);
pristine.addValidator(priceInput, checkMinPrice, getMinPriceErrorMessage);

export {pristine};

import {minPriceValues} from './constants.js';
import {housingType, priceInput} from './variables.js';
import {pristine} from './validation.js';

const checkMinPrice = () => {
  const {bungalow, flat, hotel, house, palace} = minPriceValues;
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

  if (priceInput.value < minPrice) {
    pristine.addError(priceInput, `Минимальная цена - ${minPrice}`);
    return false;
  }
  return true;
};

export {checkMinPrice};

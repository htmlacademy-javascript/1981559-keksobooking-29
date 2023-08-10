import {minPriceValues} from './constants.js';
import {housingType} from './variables.js';

const getMinPriceValue = () => {
  let price = 0;
  const {bungalow, flat, hotel, house, palace} = minPriceValues;
  switch (housingType.value) {
    case 'bungalow':
      price = bungalow;
      break;
    case 'flat':
      price = flat;
      break;
    case 'hotel':
      price = hotel;
      break;
    case 'house':
      price = house;
      break;
    case 'palace':
      price = palace;
      break;
  }
  return price;
};

export {getMinPriceValue};

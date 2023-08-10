import {housingType, priceInput} from './variables.js';
import {minPriceValues} from './constants.js';

const updatePlaceholder = (place) => {
  priceInput.placeholder = place;
};

const onHousingTypeChange = () => {
  const {bungalow, flat, hotel, house, palace} = minPriceValues;
  switch (housingType.value) {
    case 'bungalow':
      updatePlaceholder(bungalow);
      break;
    case 'hotel':
      updatePlaceholder(hotel);
      break;
    case 'house':
      updatePlaceholder(house);
      break;
    case 'palace':
      updatePlaceholder(palace);
      break;
    default:
      updatePlaceholder(flat);
      break;
  }
};

export {onHousingTypeChange};

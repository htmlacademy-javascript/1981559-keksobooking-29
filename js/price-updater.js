import {housingType, priceInput} from './variables.js';
import {minPriceValues} from './constants.js';
import {addPristine, pristine} from './validation.js';

const updateOptions = (place) => {
  pristine.destroy();
  addPristine(place);
  priceInput.placeholder = place;
};

const onHousingTypeChange = () => {
  const {bungalow, flat, hotel, house, palace} = minPriceValues;
  switch (housingType.value) {
    case 'bungalow':
      updateOptions(bungalow);
      break;
    case 'hotel':
      updateOptions(hotel);
      break;
    case 'house':
      updateOptions(house);
      break;
    case 'palace':
      updateOptions(palace);
      break;
    default:
      updateOptions(flat);
      break;
  }
};

export {onHousingTypeChange};

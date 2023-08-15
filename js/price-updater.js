import {housingType, priceInput} from './variables.js';
import {minPriceValues} from './constants.js';

const updatePlaceholder = (place) => {
  priceInput.placeholder = place;
};

const onHousingTypeChange = () => {
  updatePlaceholder(minPriceValues[housingType.value]);
};

export {onHousingTypeChange};

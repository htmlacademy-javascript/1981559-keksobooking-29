import {housingType, priceSliderContainer} from './variables.js';
import {MinPriceValues} from './constants.js';

const updateOptions = (place) => {
  priceSliderContainer.noUiSlider.updateOptions({
    range: {
      'min': place,
      'max': 100000
    },
    start: place,
  });
};

const onHousingTypeChange = () => {
  const {bungalow, flat, hotel, house, palace} = MinPriceValues;
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

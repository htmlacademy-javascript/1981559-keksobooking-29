import {PRICE_MIN, PRICE_MAX, PRICE_SLIDER_STEP, PRICE_DEFAULT} from './constants.js';
import {priceInput, priceSliderContainer, housingType} from './variables.js';
import {onHousingTypeChange} from './price-updater.js';

const addPriceSlider = () => {
  noUiSlider.create(priceSliderContainer, {
    connect: 'lower',
    range: {
      'min': PRICE_MIN,
      'max': PRICE_MAX
    },
    start: PRICE_DEFAULT,
    step: PRICE_SLIDER_STEP,
    format: {
      to(value) {
        return value.toFixed(0);
      },
      from(value) {
        return parseFloat(value);
      },
    },
  });

  priceSliderContainer.noUiSlider.on('update', () => {
    priceInput.value = priceSliderContainer.noUiSlider.get();
  });
  priceInput.placeholder = String(PRICE_DEFAULT);
  priceInput.addEventListener('wheel', (evt) => {
    evt.preventDefault();
  });
  priceInput.value = '';
};

const resetPriceSlider = () => {
  priceSliderContainer.noUiSlider.reset();
};

housingType.addEventListener('change', onHousingTypeChange);

export {addPriceSlider, resetPriceSlider};

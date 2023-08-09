import {PRICE_MIN, PRICE_MAX, PRICE_SLIDER_STEP, PRICE_DEFAULT} from './constants.js';
import {priceInput, priceSliderContainer, housingType} from './variables.js';
import {onHousingTypeChange} from './price-updater.js';
// console.log(housingType.value)
// остановился на добавлении обновления слайдера при выборре селектора
// 3.3. Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»:

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
};


housingType.addEventListener('change', onHousingTypeChange);


export {addPriceSlider};

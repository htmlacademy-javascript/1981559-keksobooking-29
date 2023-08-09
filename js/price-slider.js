import {PRICE_MIN, PRICE_MAX, PRICE_SLIDER_STEP, PRICE_DEFAULT, MinPriceValues} from './constants.js';
import {priceInput, priceSliderContainer, housingType} from './variables.js';
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

housingType.addEventListener('change', onHousingTypeChange);


export {addPriceSlider};

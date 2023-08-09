import {priceInput, priceSliderContainer, housingType} from './variables.js';
// console.log(housingType.value)
// остановился на добавлении обновления слайдера при выборре селектора
// 3.3. Поле «Тип жилья» влияет на минимальное значение поля «Цена за ночь»:

const addPriceSlider = () => {
  noUiSlider.create(priceSliderContainer, {
    connect: 'lower',
    range: {
      'min': 0,
      'max': 100000
    },
    start: 0,
    step: 1000,
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

export {addPriceSlider};

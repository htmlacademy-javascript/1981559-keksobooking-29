import {deactivateForms} from './form-load-status.js';
import {sendData} from './load-data.js';
import {initMap} from './map.js';
import {uploadMapImage} from './image-upload.js';
import {adForm, capacity, housingType, priceInput, roomNumber, uploadMapImageInput} from './variables.js';
import {pristine} from './validation.js';
import {addPriceSlider} from './price-slider.js';
import {minPriceValues, PRICE_DEFAULT} from './constants.js';
import {initTimeCheck} from './time-check.js';
import {compareRoomsWithGuests, compareGuestsWithRooms} from './compare-rooms-guests.js';

deactivateForms();
initMap();
uploadMapImageInput.addEventListener('change', uploadMapImage);
priceInput.placeholder = String(PRICE_DEFAULT);
priceInput.addEventListener('wheel', (evt) => {
  evt.preventDefault();
});
addPriceSlider();
priceInput.value = '';
initTimeCheck();
compareRoomsWithGuests();
roomNumber.addEventListener('change', compareRoomsWithGuests);
capacity.addEventListener('change', compareGuestsWithRooms);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.reset();
  pristine.validate();
  let isValid = true;
  let minPrice = 0;
  const getMinPriceValue = () => {
    const {bungalow, flat, hotel, house, palace} = minPriceValues;
    switch (housingType.value) {
      case 'bungalow':
        minPrice = bungalow;
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
      default:
        minPrice = flat;
        break;
    }
  };
  getMinPriceValue();
  if (priceInput.value < minPrice) {
    console.log(minPrice)
    pristine.addError(priceInput, `Минимальная цена - ${minPrice}`);
    isValid = false;
  }
  if (isValid) {
    console.log('ok');
  } else {
    console.log('not ok');
  }
  // blockSubmitButton();
  // sendData(new FormData(evt.target))
  //   .then(
  //     () => {
  //       console.log('ok');
  //       // showSuccess();
  //     }
  //   )
  //   .catch(
  //     () => {
  //       console.log('not ok');
  //     }
  //     // (err) => {
  //     //   showError(err.message);
  //     // }
  //   )
    // .finally(unblockSubmitButton);
});

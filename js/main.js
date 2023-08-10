import {deactivateForms} from './form-load-status.js';
import {sendData} from './load-data.js';
import {initMap} from './map.js';
import {uploadMapImage} from './image-upload.js';
import {adForm, priceInput, uploadMapImageInput, roomNumber, capacity} from './variables.js';
import {addPristine, pristine} from './validation.js';
import {addPriceSlider} from './price-slider.js';
import {PRICE_DEFAULT, numberOfRooms, numberOfGuests} from './constants.js';
import {initTimeCheck} from './time-check.js';

deactivateForms();
initMap();
uploadMapImageInput.addEventListener('change', uploadMapImage);
priceInput.placeholder = String(PRICE_DEFAULT);
priceInput.addEventListener('wheel', (evt) => {
  evt.preventDefault();
});
addPristine(PRICE_DEFAULT);
addPriceSlider();
priceInput.value = '';
initTimeCheck();

roomNumber.addEventListener('change', () => {
  const {oneRoom, twoRooms, threeRooms, manyRooms} = numberOfRooms;
  const {oneGuest, twoGuests, threeGuests, noGuests} = numberOfGuests;
  switch (roomNumber.value) {
    case oneRoom:
      capacity.value = oneGuest;
      break;
    case twoRooms:
      if (capacity.value >= twoGuests) {
        capacity.value = twoGuests;
      } else if (capacity.value === '0') {
        capacity.value = twoGuests;
      }
      break;
    case threeRooms:
      if (capacity.value >= threeGuests) {
        capacity.value = threeGuests;
      } else if (capacity.value === '0') {
        capacity.value = threeGuests;
      }
      break;
    case manyRooms: {
      if (capacity.value > noGuests) {
        capacity.value = noGuests;
      }
      break;
    }
  }
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('ok');
  } else {
    console.log('not ok');
  }
  // blockSubmitButton();
  sendData(new FormData(evt.target))
    .then(
      () => {
        console.log('ok');
        // showSuccess();
      }
    )
    .catch(
      () => {
        console.log('not ok');
      }
      // (err) => {
      //   showError(err.message);
      // }
    )
    // .finally(unblockSubmitButton);
});

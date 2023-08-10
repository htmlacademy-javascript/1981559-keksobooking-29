const adForm = document.querySelector('.ad-form');
const coordinatesOfAddress = adForm.querySelector('#address');
const uploadMapImageInput = adForm.querySelector('#avatar');
const imageToUpload = adForm.querySelector('.ad-form-header__preview img');
const submitButton = adForm.querySelector('.ad-form__submit');
const formTitle = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const priceSliderContainer = adForm.querySelector('.ad-form__slider');
const housingType = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const mapForm = document.querySelector('.map__filters');
const interactiveFormElements = document.querySelectorAll('select, fieldset');

export {
  interactiveFormElements,
  adForm,
  mapForm,
  coordinatesOfAddress,
  uploadMapImageInput,
  imageToUpload,
  submitButton,
  priceSliderContainer,
  priceInput,
  formTitle,
  housingType,
  timeIn,
  timeOut,
  roomNumber,
  capacity
};

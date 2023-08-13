const adForm = document.querySelector('.ad-form');
const coordinatesOfAddress = adForm.querySelector('#address');
const uploadMapImageInput = adForm.querySelector('#avatar');
const imageToUploadWrapper = adForm.querySelector('.ad-form-header__preview');
const housingImageContainer = adForm.querySelector('.ad-form__photo-container');
const housingImageWrapper = housingImageContainer.querySelector('.ad-form__photo');
const imagesUploadInput = housingImageContainer.querySelector('#images');
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
const bodyElement = document.querySelector('body');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const successContainer = successTemplate.querySelector('.success');

export {
  interactiveFormElements,
  adForm,
  mapForm,
  coordinatesOfAddress,
  uploadMapImageInput,
  submitButton,
  priceSliderContainer,
  priceInput,
  formTitle,
  housingType,
  timeIn,
  timeOut,
  roomNumber,
  capacity,
  housingImageContainer,
  imageToUploadWrapper,
  housingImageWrapper,
  imagesUploadInput,
  bodyElement,
  successTemplate,
  successContainer
};

const bodyElement = document.querySelector('body');

const mapForm = document.querySelector('.map__filters');
const mapHousingType = mapForm.querySelector('#housing-type');
const mapHousingPrice = mapForm.querySelector('#housing-price');
const mapHousingRooms = mapForm.querySelector('#housing-rooms');
const mapHousingGuests = mapForm.querySelector('#housing-guests');
const housingFeaturesContainer = mapForm.querySelector('#housing-features');

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

const interactiveMapFormElements = mapForm.querySelectorAll('select, fieldset');
const interactiveAdFormElements = adForm.querySelectorAll('select, fieldset');

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const successContainer = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

export {
  interactiveMapFormElements,
  interactiveAdFormElements,
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
  successContainer,
  errorTemplate,
  cardTemplate,
  housingFeaturesContainer,
  mapHousingType,
  mapHousingPrice,
  mapHousingRooms,
  mapHousingGuests
};

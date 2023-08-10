const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const PRICE_MIN = 0;
const PRICE_MAX = 100000;
const PRICE_SLIDER_STEP = 1000;
const PRICE_DEFAULT = 1000;
const minPriceValues = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000
};
const numberOfRooms = {
  'oneRoom' : '1',
  'twoRooms' : '2',
  'threeRooms' : '3',
  'manyRooms' : '100'
};
const numberOfGuests = {
  'oneGuest' : '1',
  'twoGuests' : '2',
  'threeGuests' : '3',
  'noGuests' : '0'
};
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 10;
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Опубликовываю...'
};
const pristineDefaultConfig = {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--error',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__element__help'
};
const BASE_URL = 'https://29.javascript.pages.academy/keksobooking';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

export {
  TITLE_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  FILE_TYPES,
  PRICE_MIN,
  PRICE_MAX,
  PRICE_SLIDER_STEP,
  PRICE_DEFAULT,
  minPriceValues,
  SubmitButtonText,
  pristineDefaultConfig,
  TILE_LAYER,
  COPYRIGHT,
  ZOOM,
  BASE_URL,
  Route,
  Method,
  ErrorText,
  numberOfRooms,
  numberOfGuests
};

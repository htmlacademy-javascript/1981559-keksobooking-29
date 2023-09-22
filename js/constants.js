import {checkGuests, checkPrice, checkRooms, checkType} from './map-filters.js';

const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const PRICE_MIN = 0;
const PRICE_MAX = 100000;
const PRICE_SLIDER_STEP = 1000;
const PRICE_DEFAULT = 1000;
const MAX_SHOWN_MARKERS = 10;
const mapFilterPrices = {
  'minimum': 10000,
  'maximum': 50000
};
const minPriceValues = {
  'bungalow' : 0,
  'flat' : 1000,
  'hotel' : 3000,
  'house' : 5000,
  'palace' : 10000
};
const typeOfHousingTranslate = {
  'bungalow' : 'Бунгало',
  'flat' : 'Квартира',
  'hotel' : 'Отель',
  'house' : 'Дом',
  'palace' : 'Дворец'
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
const selectorFilters = {
  'housing-type': checkType,
  'housing-price': checkPrice,
  'housing-rooms': checkRooms,
  'housing-guests': checkGuests,
};
const featureFilters = {
  'filter-wifi': 'wifi',
  'filter-dishwasher': 'dishwasher',
  'filter-parking': 'parking',
  'filter-washer': 'washer',
  'filter-elevator': 'elevator',
  'filter-conditioner': 'conditioner'
};
const iconConfig = {
  main: {
    url: './img/main-pin.svg',
    width: 52,
    height: 52,
    anchorX: 26,
    anchorY: 52,
  },
  default: {
    url: './img/pin.svg',
    width: 40,
    height: 40,
    anchorX: 20,
    anchorY: 40,
  }
};
const startCoordinates = {
  lat: 35.68172,
  lng: 139.75392,
};
const uploadedImageSizes = {
  width: 70,
  height: 70,
};
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const roomsWords = ['комната', 'комнаты', 'комнат'];
const guestsWords = ['гостя', 'гостей', 'гостей'];
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const ZOOM = 13;
const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Опубликовываю...'
};
const pristineDefaultConfig = {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
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
const mainPinIcon = L.icon({
  iconUrl: iconConfig.main.url,
  iconSize: [iconConfig.main.width, iconConfig.main.height],
  iconAnchor: [iconConfig.main.anchorX, iconConfig.main.anchorY],
});
const icon = L.icon({
  iconUrl: iconConfig.default.url,
  iconSize: [iconConfig.default.width, iconConfig.default.height],
  iconAnchor: [iconConfig.default.anchorX, iconConfig.default.anchorY],
});

export {
  TITLE_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  FILE_TYPES,
  PRICE_MIN,
  PRICE_MAX,
  PRICE_SLIDER_STEP,
  PRICE_DEFAULT,
  MAX_SHOWN_MARKERS,
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
  numberOfGuests,
  iconConfig,
  startCoordinates,
  typeOfHousingTranslate,
  roomsWords,
  guestsWords,
  mapFilterPrices,
  mainPinIcon,
  icon,
  selectorFilters,
  featureFilters,
  uploadedImageSizes
};

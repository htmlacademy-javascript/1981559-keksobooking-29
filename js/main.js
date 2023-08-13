import {deactivateForms} from './form-load-status.js';
import {initMap} from './map.js';
import {initUploadImage} from './image-upload.js';
import {initTimeCheck} from './time-check.js';
import {addPriceSlider} from './price-slider.js';
import {getData} from "./load-data.js";

deactivateForms();
initMap();
initUploadImage();
initTimeCheck();
addPriceSlider();

getData()
  .then((someArr) => {
    console.log(someArr[0].offer.title);
  });

import {timeIn, timeOut} from './variables.js';

const initTimeCheck = () => {
  timeIn.addEventListener('change', () => {
    timeOut.value = timeIn.value;
  });

  timeOut.addEventListener('change', () => {
    timeIn.value = timeOut.value;
  });
};

export {initTimeCheck};

import {timeIn, timeOut} from './variables.js';

const initTimeCheck = () => {
  timeIn.addEventListener('change', () => {
    if (timeIn.value !== timeOut.value) {
      timeOut.value = timeIn.value;
    }
  });

  timeOut.addEventListener('change', () => {
    if (timeOut.value !== timeIn.value) {
      timeIn.value = timeOut.value;
    }
  });
};

export {initTimeCheck};

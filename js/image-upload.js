import {uploadMapImageInput, imageToUpload} from './variables.js';
import {FILE_TYPES} from './constants.js';

const uploadMapImage = () => {
  const file = uploadMapImageInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    imageToUpload.src = URL.createObjectURL(file);
  }
};

export {uploadMapImage};

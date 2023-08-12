import {uploadMapImageInput, imageToUploadWrapper, imageToUpload} from './variables.js';
import {FILE_TYPES} from './constants.js';

const initUploadImage = () => {
  const uploadMapImage = () => {
    imageToUploadWrapper.style.padding = '0';
    imageToUploadWrapper.style.flexShrink = '0';
    imageToUploadWrapper.style.overflow = 'hidden';
    imageToUpload.style.width = '70px';
    imageToUpload.style.height = '70px';
    const file = uploadMapImageInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      imageToUpload.src = URL.createObjectURL(file);
    }
  };

  uploadMapImageInput.addEventListener('change', uploadMapImage);
};

export {initUploadImage};

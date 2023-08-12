import {uploadMapImageInput, imageToUploadWrapper, imageToUpload, housingImageContainer, housingImageWrapper, imagesUploadInput} from './variables.js';
import {FILE_TYPES} from './constants.js';

const initUploadImage = () => {
  const uploadMapImage = () => {
    const file = uploadMapImageInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      imageToUploadWrapper.style.padding = '0';
      imageToUploadWrapper.style.flexShrink = '0';
      imageToUploadWrapper.style.overflow = 'hidden';
      imageToUpload.width = 70;
      imageToUpload.height = 70;
      imageToUpload.src = URL.createObjectURL(file);
    }
  };

  const uploadHousingImage = () => {
    const isTheFirstImageWrapperEmpty = housingImageContainer.contains(housingImageWrapper);
    const file = imagesUploadInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      const imageFragment = document.createDocumentFragment();
      const newImageWrapper = housingImageWrapper.cloneNode();
      const imageElement = document.createElement('img');
      if (isTheFirstImageWrapperEmpty) {
        housingImageWrapper.remove();
      }
      imageElement.width = 70;
      imageElement.height = 70;
      imageElement.alt = 'Загружаемая фотография жилья';
      imageElement.src = URL.createObjectURL(file);
      newImageWrapper.style.overflow = 'hidden';
      newImageWrapper.appendChild(imageElement);
      imageFragment.appendChild(newImageWrapper);
      housingImageContainer.appendChild(imageFragment);
    }
  };

  imagesUploadInput.addEventListener('change', uploadHousingImage);
  uploadMapImageInput.addEventListener('change', uploadMapImage);
};

export {initUploadImage};

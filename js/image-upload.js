import {
  uploadMapImageInput,
  imageToUploadWrapper,
  housingImageContainer,
  housingImageWrapper,
  imagesUploadInput,
} from './variables.js';
import {FILE_TYPES} from './constants.js';

const initUploadImage = () => {
  const uploadMapImage = () => {
    const file = uploadMapImageInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      const newImageToUpload = imageToUploadWrapper.querySelector('.ad-form-header__preview img');
      imageToUploadWrapper.style.padding = '0';
      imageToUploadWrapper.style.flexShrink = '0';
      imageToUploadWrapper.style.overflow = 'hidden';
      newImageToUpload.width = 70;
      newImageToUpload.height = 70;
      newImageToUpload.src = URL.createObjectURL(file);
    }
  };

  const uploadHousingImage = () => {
    const emptyDefaultHousingImageWrapper = housingImageContainer.querySelector('.ad-form__photo');
    const imgElementForCheck = emptyDefaultHousingImageWrapper.querySelector('img');
    const isTheFirstElementEmpty = imgElementForCheck === null;
    const file = imagesUploadInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      const imageFragment = document.createDocumentFragment();
      const newImageWrapper = housingImageWrapper.cloneNode();
      const imageElement = document.createElement('img');
      if (isTheFirstElementEmpty) {
        emptyDefaultHousingImageWrapper.remove();
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

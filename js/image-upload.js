import {
  uploadMapImageInput,
  imageToUploadWrapper,
  housingImageContainer,
  housingImageWrapper,
  imagesUploadInput,
} from './variables.js';
import {FILE_TYPES, uploadedImageSizes} from './constants.js';

const initUploadImage = () => {
  const onUploadMapImage = () => {
    const file = uploadMapImageInput.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
    if (matches) {
      const newImageToUpload = imageToUploadWrapper.querySelector('.ad-form-header__preview img');
      imageToUploadWrapper.style.padding = '0';
      imageToUploadWrapper.style.flexShrink = '0';
      imageToUploadWrapper.style.overflow = 'hidden';
      newImageToUpload.width = uploadedImageSizes.width;
      newImageToUpload.height = uploadedImageSizes.height;
      newImageToUpload.src = URL.createObjectURL(file);
    }
  };

  const onUploadHousingImage = () => {
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
      imageElement.width = uploadedImageSizes.width;
      imageElement.height = uploadedImageSizes.height;
      imageElement.alt = 'Загружаемая фотография жилья';
      imageElement.src = URL.createObjectURL(file);
      newImageWrapper.style.overflow = 'hidden';
      newImageWrapper.appendChild(imageElement);
      imageFragment.appendChild(newImageWrapper);
      housingImageContainer.appendChild(imageFragment);
    }
  };

  imagesUploadInput.addEventListener('change', onUploadHousingImage);
  uploadMapImageInput.addEventListener('change', onUploadMapImage);
};

export {initUploadImage};

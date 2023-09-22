import {
  coordinatesOfAddress,
  formTitle,
  housingImageContainer,
  housingImageWrapper,
  housingType,
  imageToUploadWrapper,
  priceInput,
  timeIn,
  timeOut,
  roomNumber,
  capacity,
  featuresContainer,
  housingDescription
} from './variables.js';
import {resetPriceSlider} from './price-slider.js';
import {pristine} from './validation.js';
import {minPriceValues, startCoordinates, imageSizesAfterReset} from './constants.js';
import {mainPinMarker} from './map.js';

const defaultHousingImage = housingImageWrapper.cloneNode();
const housingTypeCopy = housingType.cloneNode(true);
const selectedIndex = housingTypeCopy.selectedIndex;
const selectedOption = housingTypeCopy.options[selectedIndex];
const initialHousingTypeValue = selectedOption.value;
const timeInCopy = timeIn.cloneNode(true);
const timeOutCopy = timeOut.cloneNode(true);
const roomNumberCopy = roomNumber.cloneNode(true);
const capacityCopy = capacity.cloneNode(true);
const featuresContainerCopy = featuresContainer.cloneNode(true);

const elementsToReset = [
  { copy: housingTypeCopy, original: housingType },
  { copy: timeInCopy, original: timeIn },
  { copy: timeOutCopy, original: timeOut },
  { copy: roomNumberCopy, original: roomNumber },
  { copy: capacityCopy, original: capacity }
];

const returnToInitialSelect = (selectCopy, select) => {
  for (const option of selectCopy) {
    select.appendChild(option.cloneNode(true));
  }
};

const onResetForm = (evt) => {
  evt.preventDefault();
  const {lat, lng} = startCoordinates;
  formTitle.value = '';
  coordinatesOfAddress.value = `${lat}, ${lng}`;
  resetPriceSlider();
  priceInput.value = '';
  priceInput.placeholder = minPriceValues[initialHousingTypeValue];
  pristine.reset();
  elementsToReset.forEach((element) => {
    element.original.innerHTML = '';
    returnToInitialSelect(element.copy, element.original);
  });
  featuresContainer.innerHTML = featuresContainerCopy.innerHTML;
  housingDescription.value = '';
  imageToUploadWrapper.innerHTML = '';
  const newCoordinates = L.latLng(lat, lng);
  mainPinMarker.setLatLng(newCoordinates);
  imageToUploadWrapper.style.padding = '0 15px';
  const defaultElement = document.createElement('img');
  defaultElement.src = 'img/muffin-grey.svg';
  defaultElement.alt = 'Аватар пользователя';
  defaultElement.width = imageSizesAfterReset.width;
  defaultElement.height = imageSizesAfterReset.height;
  imageToUploadWrapper.appendChild(defaultElement);

  const housingPhotos = housingImageContainer.querySelectorAll('.ad-form__photo');
  housingPhotos.forEach((photo) => {
    photo.remove();
  });
  housingImageContainer.appendChild(defaultHousingImage);
};

export {onResetForm};

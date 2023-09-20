import {
  housingFeaturesContainer,
  mapHousingGuests,
  mapHousingPrice,
  mapHousingRooms,
  mapHousingType
} from './variables.js';
import {mapFilterPrices, numberOfGuests} from './constants.js';

const checkType = (data) => {
  if (mapHousingType.value !== 'any') {
    data = data.filter((value) => mapHousingType.value === value.offer.type);
  }
  return data;
};

const checkPrice = (data) => {
  if (mapHousingPrice.value !== 'any') {
    data = data.filter((value) => {
      const {offer} = value;
      switch (mapHousingPrice.value) {
        case 'low':
          return offer.price <= mapFilterPrices.minimum;
        case 'middle':
          return offer.price >= mapFilterPrices.minimum && offer.price <= mapFilterPrices.maximum;
        case 'high':
          return offer.price >= mapFilterPrices.maximum;
      }
    });
  }

  return data;
};

const checkRooms = (data) => {
  if (mapHousingRooms.value !== 'any') {
    data = data.filter((value) => Number(mapHousingRooms.value) === value.offer.rooms);
  }
  return data;
};

const checkGuests = (data) => {
  if (mapHousingGuests.value !== 'any') {
    data = data.filter((value) => {
      const {offer} = value;
      const {noGuests, oneGuest, twoGuests} = numberOfGuests;
      switch (mapHousingGuests.value) {
        case noGuests:
          return offer.guests <= Number(noGuests);
        case '1':
          return offer.guests === Number(oneGuest);
        case '2':
          return offer.guests === Number(twoGuests);
      }
    });
  }
  return data;
};

const getLastFeatureName = (string) => {
  const wordToRemoveLength = string.split('-')[0].length + 1;
  return string.slice(wordToRemoveLength);
};

const checkFeatures = (data) => {
  const housingFeatures = housingFeaturesContainer.querySelectorAll('input');
  for (const element of housingFeatures) {
    const isElementChecked = element.checked === true;
    if (isElementChecked) {
      data = data.filter((mapMarker) => {
        const featureAvailability = mapMarker.offer.features;
        if (featureAvailability !== undefined) {
          return featureAvailability.includes(getLastFeatureName(element.id));
        }
      });
    }
  }
  return data;
};

export {checkFeatures, checkType, checkPrice, checkRooms, checkGuests};

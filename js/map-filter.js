import {
  housingFeaturesContainer,
  mapForm,
  mapHousingGuests,
  mapHousingPrice,
  mapHousingRooms,
  mapHousingType
} from './variables.js';
import {mapFilterPrices, numberOfGuests} from './constants.js';
import {createMarkers} from './create-map-markers.js';

const activateMapFilter = (data, markers) => {
  mapForm.addEventListener('change', () => {
    const housingFeatures = housingFeaturesContainer.querySelectorAll('input');
    let filteredData = data;
    markers.clearLayers();

    const getLastFeatureName = (string) => {
      const wordToRemoveLength = string.split('-')[0].length + 1;
      return string.slice(wordToRemoveLength);
    };

    for (const element of housingFeatures) {
      const isElementChecked = element.checked === true;
      if (isElementChecked) {
        filteredData = filteredData.filter((mapMarker) => {
          const featureAvailability = mapMarker.offer.features;
          if (featureAvailability !== undefined) {
            return featureAvailability.includes(getLastFeatureName(element.id));
          }
        });
      }
    }

    if (mapHousingType.value !== 'any') {
      filteredData = filteredData.filter((value) => mapHousingType.value === value.offer.type);
    }

    if (mapHousingPrice.value !== 'any') {
      filteredData = filteredData.filter((value) => {
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

    if (mapHousingRooms.value !== 'any') {
      filteredData = filteredData.filter((value) => Number(mapHousingRooms.value) === value.offer.rooms);
    }

    if (mapHousingGuests.value !== 'any') {
      filteredData = filteredData.filter((value) => {
        const {offer} = value;
        const {noGuests, oneGuest, twoGuests} = numberOfGuests;
        switch (mapHousingGuests.value) {
          case noGuests:
            return offer.guests <= noGuests;
          case '1':
            return offer.guests <= oneGuest;
          case '2':
            return offer.guests <= twoGuests;
        }
      });
    }

    createMarkers(filteredData, markers);
  });
};

export {activateMapFilter};

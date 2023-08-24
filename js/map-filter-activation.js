import {mapForm} from './variables.js';
import {createMarkers} from './create-map-markers.js';
import {checkType, checkPrice, checkRooms, checkGuests} from './map-filters.js';
const selectorFilters = {
  'housing-type': checkType,
  'housing-price': checkPrice,
  'housing-rooms': checkRooms,
  'housing-guests': checkGuests,
};
const featureFilters = {
  'filter-wifi': 'wifi',
  'filter-dishwasher': 'dishwasher',
  'filter-parking': 'parking',
  'filter-washer': 'washer',
  'filter-elevator': 'elevator',
  'filter-conditioner': 'conditioner'
};

const activateMapFilter = (data, markers) => {
  mapForm.addEventListener('change', () => {
    const arrayOfChecks = [];

    for (const element of mapForm) {
      const isInput = element.tagName === 'INPUT';
      const isInputChecked = element.checked === true;
      const isSelect = element.tagName === 'SELECT';
      const isSelectNotAny = element.value !== 'any';
      if (isInput && isInputChecked) {
        const checkElement = (dataOfMarkers) => {
          dataOfMarkers = dataOfMarkers.filter((mapMarkerData) => {
            const featureAvailability = mapMarkerData.offer.features;
            if (featureAvailability !== undefined) {
              return featureAvailability.includes(featureFilters[element.id]);
            }
          });
          return dataOfMarkers;
        };
        arrayOfChecks.push(checkElement);
      }
      if (isSelect && isSelectNotAny) {
        arrayOfChecks.push(selectorFilters[element.name]);
      }
    }
    const checkItAll = (dataMarkers, ...allFunctionsToCheck) =>
      allFunctionsToCheck.reduce(
        (initialData, filter) =>
          filter(initialData),
        dataMarkers);

    const filteredData = checkItAll(data, ...arrayOfChecks);
    markers.clearLayers();
    createMarkers(filteredData, markers);
  });
};

export {activateMapFilter};

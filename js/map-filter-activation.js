import {mapForm} from './variables.js';
import {createMarkers} from './create-map-markers.js';
import {selectorFilters, featureFilters} from './constants.js';

const addElementCheck = (element) => (dataOfMarkers) => {
  dataOfMarkers = dataOfMarkers.filter((mapMarkerData) => {
    const featureAvailability = mapMarkerData.offer.features;
    if (featureAvailability !== undefined) {
      return featureAvailability.includes(featureFilters[element.id]);
    }
  });
  return dataOfMarkers;
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
        arrayOfChecks.push(addElementCheck(element));
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

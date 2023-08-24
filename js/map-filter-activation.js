import {mapForm} from './variables.js';
import {createMarkers} from './create-map-markers.js';
import {checkType, checkPrice, checkRooms, checkGuests, checkFeatures} from './map-filters.js';
const arrayOfChecks = [checkType, checkPrice, checkRooms, checkGuests, checkFeatures];

const activateMapFilter = (data, markers) => {
  mapForm.addEventListener('change', () => {
    const checkItAll = (dataMarkers, ...allFunctionsToCheck) => {
      return allFunctionsToCheck.reduce((acc, filter) => {
        return filter(acc);
      }, dataMarkers);
    };
    const filteredData = checkItAll(data, ...arrayOfChecks);
    markers.clearLayers();
    createMarkers(filteredData, markers);
  });
};

export {activateMapFilter};

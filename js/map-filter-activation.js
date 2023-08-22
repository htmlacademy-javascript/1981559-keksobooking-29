import {mapForm} from './variables.js';
import {createMarkers} from './create-map-markers.js';
import {checkType, checkPrice, checkRooms, checkGuests, checkFeatures} from './map-filters.js';
const arrayOfChecks = [checkType, checkPrice, checkRooms, checkGuests, checkFeatures];

const activateMapFilter = (data, markers) => {
  mapForm.addEventListener('change', () => {
    let filteredData = data;
    arrayOfChecks.forEach((value) => {
      filteredData = value(filteredData);
    });
    //изучить метод reduce
    // const compose = (...allFunctionsToCheck) => {
    //       return (dataToFilter) => {
    //        return allFunctionsToCheck.reduce((previousFilteredData, filterData) => {
    //          return filterData(previousFilteredData);
    //        }, dataToFilter);
    //       };
    //     };
    //
    //     const filteredData = compose(checkType, checkPrice, checkRooms, checkGuests, checkFeatures)(data);
    // const composedFunction = (someData) => checkFeatures(checkGuests(checkRooms(checkPrice(checkType(someData)))));
    // filteredData = composedFunction(filteredData);
    markers.clearLayers();
    createMarkers(filteredData, markers);
  });
};

export {activateMapFilter};

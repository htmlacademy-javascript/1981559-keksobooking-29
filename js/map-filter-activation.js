import {mapForm} from './variables.js';
import {createMarkers} from './create-map-markers.js';
import {checkType, checkPrice, checkRooms, checkGuests, checkFeatures} from './map-filters.js';
const arrayOfChecks = [checkType, checkPrice, checkRooms, checkGuests, checkFeatures];

const activateMapFilter = (data, markers) => {
  mapForm.addEventListener('change', () => {
    // let filteredData = data;
    // arrayOfChecks.forEach((value) => {
    //   filteredData = value(filteredData);
    // });
    //изучить метод reduce

    // const compose = (...allFunctionsToCheck) => {
    //       return (dataToFilter) => {
    //        return allFunctionsToCheck.reduce((previousFilteredData, filterData) => {
    //          return filterData(previousFilteredData);
    //        }, dataToFilter);
    //       };
    //     };
    //
    // const filteredData = compose(...arrayOfChecks)(data);

    const checkItAll = (dataMarkers, ...allFunctionsToCheck) => {
      return allFunctionsToCheck.reduce((acc, item) => {
        return item(acc);
      }, dataMarkers);
    };
    const filteredData = checkItAll(data, checkType, checkPrice, checkRooms, checkGuests, checkFeatures);

    markers.clearLayers();
    createMarkers(filteredData, markers);
  });
};

export {activateMapFilter};

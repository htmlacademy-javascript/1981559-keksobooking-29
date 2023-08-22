import {mapForm} from './variables.js';
import {createMarkers} from './create-map-markers.js';
import {checkType, checkPrice, checkRooms, checkGuests, checkFeatures} from './map-filters.js';

const activateMapFilter = (data, markers) => {
  mapForm.addEventListener('change', () => {
    //     const compose = (...allFunctionsToCheck) => {
    //       return (dataToFilter) => {
    //        return allFunctionsToCheck.reduce((acc, fn) => {
    //          console.log(acc)
    //          console.log(fn)
    //          return fn(acc);
    //        }, dataToFilter);
    //       };
    //     };
    //
    //     const filteredData = compose(
    //       checkType,
    //       checkPrice,
    //       checkRooms,
    //       checkGuests,
    //       checkFeatures
    //     )(data);
    let filteredData = data;
    const composedFunction = (someData) => checkFeatures(checkGuests(checkRooms(checkPrice(checkType(someData)))));
    filteredData = composedFunction(filteredData);
    filteredData = checkType(filteredData);
    filteredData = checkPrice(filteredData);
    filteredData = checkRooms(filteredData);
    filteredData = checkGuests(filteredData);
    filteredData = checkFeatures(filteredData);
    markers.clearLayers();
    createMarkers(filteredData, markers);
  });
};

export {activateMapFilter};

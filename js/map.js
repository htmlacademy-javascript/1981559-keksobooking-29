import {activateForms} from './form-load-status.js';
import {coordinatesOfAddress} from './variables.js';
import {getData} from './load-data.js';
import {COPYRIGHT, startCoordinates, TILE_LAYER, ZOOM, mainPinIcon} from './constants.js';
import {activateMapFilter} from './map-filter.js';
import {createMarkers} from './create-map-markers.js';

const initMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activateForms();
    })
    .setView(startCoordinates, ZOOM);

  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);

  const mainPinMarker = L.marker(startCoordinates, {
    draggable: true,
    icon: mainPinIcon,
  });

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const {lat, lng} = evt.target.getLatLng();
    coordinatesOfAddress.value = `${lat.toFixed(5)} ${lng.toFixed(5)}`;
  });

  const markerGroup = L.layerGroup().addTo(map);

  getData()
    .then((receivedData) => {
      createMarkers(receivedData, markerGroup);
      activateMapFilter(receivedData, markerGroup);
    });
};

export {initMap};

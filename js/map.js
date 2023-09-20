import {activateAdForm, activateMapForm} from './form-load-status.js';
import {coordinatesOfAddress} from './variables.js';
import {getData} from './load-data.js';
import {COPYRIGHT, startCoordinates, TILE_LAYER, ZOOM, mainPinIcon} from './constants.js';
import {activateMapFilter} from './map-filter-activation.js';
import {createMarkers} from './create-map-markers.js';

const initMap = () => {
  getData()
    .then((receivedData) => {
      const map = L.map('map-canvas')
        .on('load', () => {
          activateAdForm();
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
      createMarkers(receivedData, markerGroup);
      activateMapForm();
      activateMapFilter(receivedData, markerGroup);
    });
};

export {initMap};

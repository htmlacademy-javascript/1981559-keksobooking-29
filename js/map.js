import {activateForms} from './form-load-status.js';
import {TILE_LAYER, COPYRIGHT, ZOOM, iconConfig, startCoordinates} from './constants.js';
import {coordinatesOfAddress} from './variables.js';

const initMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      activateForms();
    })
    .setView(startCoordinates, ZOOM);

  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: iconConfig.main.url,
    iconSize: [iconConfig.main.width, iconConfig.main.height],
    iconAnchor: [iconConfig.main.anchorX, iconConfig.main.anchorY],
  });

  const mainPinMarker = L.marker(startCoordinates, {
    draggable: true,
    icon: mainPinIcon,
  });

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const {lat, lng} = evt.target.getLatLng();
    coordinatesOfAddress.value = `${lat.toFixed(5)} ${lng.toFixed(5)}`;
  });
};

export {initMap};

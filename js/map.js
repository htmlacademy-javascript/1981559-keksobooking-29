import {activateForms} from './form-load-status.js';
import {TILE_LAYER, COPYRIGHT, ZOOM,} from './constants.js';
import {coordinatesOfAddress} from './variables.js';

const initMap = () => {
  coordinatesOfAddress.setAttribute('readonly', 'true');
  const iconConfig = {
    url: './img/main-pin.svg',
    width: 52,
    height: 52,
    anchorX: 26,
    anchorY: 52,
  };

  const startCoordinate = {
    lat: 59.96831,
    lng: 30.31748,
  };

  const map = L.map('map-canvas')
    .on('load', () => {
      activateForms();
    })
    .setView(startCoordinate, ZOOM);

  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: iconConfig.url,
    iconSize: [iconConfig.width, iconConfig.height],
    iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
  });

  const mainPinMarker = L.marker(startCoordinate, {
    draggable: true,
    icon: mainPinIcon,
  });

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    const {lat, lng} = evt.target.getLatLng();
    coordinatesOfAddress.value = `${lat} ${lng}`;
  });
};

export {initMap};

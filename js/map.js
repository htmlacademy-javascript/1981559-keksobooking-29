import {activateForms} from './form-load-status.js';
import {
  coordinatesOfAddress,
  mapForm,
  mapHousingType,
  mapHousingPrice,
  mapHousingRooms,
  mapHousingGuests,
  mapHousingFeatures
} from './variables.js';
import {getData} from './load-data.js';
import {createPopup} from './create-popup.js';
import {
  TILE_LAYER,
  COPYRIGHT,
  ZOOM,
  iconConfig,
  startCoordinates,
} from './constants.js';

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

  const icon = L.icon({
    iconUrl: iconConfig.default.url,
    iconSize: [iconConfig.default.width, iconConfig.default.height],
    iconAnchor: [iconConfig.default.anchorX, iconConfig.default.anchorY],
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

  const markerGroup = L.layerGroup().addTo(map);
  const createMarkers = (data) => {
    data.forEach((card) => {
      const {location} = card;
      const {lat, lng} = location;
      const marker = L.marker(
        {
          lat,
          lng,
        },
        {
          icon
        },
      );
      marker
        .addTo(markerGroup)
        .bindPopup(createPopup(card));
    });
  };

  // const someFunc = () => {
  //   markerGroup.clearLayers();
  // };

  getData()
    .then((receivedData) => {
      createMarkers(receivedData);
      mapForm.addEventListener('change', () => {
        markerGroup.clearLayers();
        const filteredMarkers = receivedData.filter((mapMarker) => mapMarker.offer.type === 'hotel');
        createMarkers(filteredMarkers);
        // const checkedCheckboxes = mapHousingFeatures.querySelectorAll('input:checked');
        // const checkedValues = Array.from(checkedCheckboxes).map((input) => input.value);
        // console.log(checkedValues);
      });
    });
};

export {initMap};

import {activateForms} from './form-load-status.js';
import {
  coordinatesOfAddress,
  mapForm,
  mapHousingType,
  mapHousingPrice,
  housingFeaturesContainer,
  mapHousingRooms
} from './variables.js';
import {getData} from './load-data.js';
import {createPopup} from './create-popup.js';
import {COPYRIGHT, iconConfig, startCoordinates, TILE_LAYER, ZOOM, mapFilterPrices} from './constants.js';

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

  getData()
    .then((receivedData) => {
      createMarkers(receivedData);

      mapForm.addEventListener('change', () => {
        const housingFeatures = housingFeaturesContainer.querySelectorAll('input');
        let filteredData = receivedData;
        markerGroup.clearLayers();

        const getLastFeatureName = (string) => {
          const wordToRemoveLength = string.split('-')[0].length + 1;
          return string.slice(wordToRemoveLength);
        };

        for (const element of housingFeatures) {
          const isElementChecked = element.checked === true;
          if (isElementChecked) {
            filteredData = filteredData.filter((mapMarker) => {
              const featureAvailability = mapMarker.offer.features;
              if (featureAvailability !== undefined) {
                return featureAvailability.includes(getLastFeatureName(element.id));
              }
            });
          }
        }

        if (mapHousingType.value !== 'any') {
          filteredData = filteredData.filter((value) => mapHousingType.value === value.offer.type);
        }

        if (mapHousingPrice.value !== 'any') {
          filteredData = filteredData.filter((value) => {
            const {offer} = value;
            switch (mapHousingPrice.value) {
              case 'low':
                return offer.price <= mapFilterPrices.minimum;
              case 'middle':
                return offer.price >= mapFilterPrices.minimum && offer.price <= mapFilterPrices.maximum;
              case 'high':
                return offer.price >= mapFilterPrices.maximum;
            }
          });
        }

        if (mapHousingRooms.value !== 'any') {
          filteredData = filteredData.filter((value) => Number(mapHousingRooms.value) === value.offer.rooms);
        }

        createMarkers(filteredData);
      });
    });
};

export {initMap};

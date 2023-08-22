import {activateForms} from './form-load-status.js';
import {coordinatesOfAddress, mapForm} from './variables.js';
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
        const housingFeaturesContainer = mapForm.querySelector('#housing-features');
        const housingFeatures = housingFeaturesContainer.querySelectorAll('input');
        let filteredData = receivedData;
        markerGroup.clearLayers();

        const getLastFeatureName = (string) => {
          const wordToRemoveLength = string.split('-')[0].length + 1;
          return string.slice(wordToRemoveLength);
        };

        for (const element of housingFeatures) {
          if (element.checked === true) {
            filteredData = filteredData.filter((mapMarker) => {
              const featureAvailability = mapMarker.offer.features;
              return (featureAvailability !== undefined && featureAvailability.includes(getLastFeatureName(element.id)));
            });
          }
        }

        // if (wiFiInput.checked === true) {
        //   filteredData = filteredData.filter((mapMarker) => {
        //     const featureAvailability = mapMarker.offer.features;
        //     return (featureAvailability !== undefined && featureAvailability.includes('wifi'));
        //   });
        // }
        //
        // if (wiFiDishwasher.checked === true) {
        //   filteredData = filteredData.filter((mapMarker) => {
        //     const featureAvailability = mapMarker.offer.features;
        //     return (featureAvailability !== undefined && featureAvailability.includes('dishwasher'));
        //   });
        // }
        //
        // if (wiFiParking.checked === true) {
        //   filteredData = filteredData.filter((mapMarker) => {
        //     const featureAvailability = mapMarker.offer.features;
        //     return (featureAvailability !== undefined && featureAvailability.includes('parking'));
        //   });
        // }


        createMarkers(filteredData);

        // console.log(wiFiInput.checked);
        // const mapOfFilterElements = new Map();
        //
        // for (const element of mapForm) {
        //   if (element.tagName === 'SELECT') {
        //     mapOfFilterElements.set(element.id, element.value);
        //   }
        //   if (element.tagName === 'INPUT') {
        //     mapOfFilterElements.set(element.id, element.checked);
        //   }
        // }
        // /*
        // Если значение селекта 1 равно значению данных от мапа филтра то true и идет дальше иначе false и начинает
        // перебор следующего объекта.
        // Если значение селекта равно any то возвращай true
        // Еще надо проверять значения вайфая
        //  */
        //
        // // const filteredMarkers = receivedData.filter((mapMarker) => {
        // //   if (mapOfFilterElements.get('housing-type') === 'any') {
        // //     return true;
        // //   }
        // //   return mapOfFilterElements.get('housing-type') === mapMarker.offer.type;
        // // }
        // const filteredMarkers = receivedData.filter((mapMarker) => {
        //
        //   return mapOfFilterElements.get('housing-type') === mapMarker.offer.type;
        // });
        // createMarkers(filteredMarkers);
        // // const checkedCheckboxes = mapHousingFeatures.querySelectorAll('input:checked');
        // // const checkedValues = Array.from(checkedCheckboxes).map((input) => input.value);
        // // console.log(checkedValues);
      });
    });
};

export {initMap};

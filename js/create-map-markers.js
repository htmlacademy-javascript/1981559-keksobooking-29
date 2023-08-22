import {icon} from './constants.js';
import {createPopup} from './create-popup.js';

const createMarkers = (data, markers) => {
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
      .addTo(markers)
      .bindPopup(createPopup(card));
  });
};

export {createMarkers};

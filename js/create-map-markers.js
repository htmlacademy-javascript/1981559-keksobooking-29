import {icon, MAX_SHOWN_MARKERS} from './constants.js';
import {createPopup} from './create-popup.js';

const createMarkers = (data, markers) => {
  for (let i = 0; i < data.length && i < MAX_SHOWN_MARKERS; i++) {
    const {location} = data[i];
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
      .bindPopup(createPopup(data[i]));
  }
};

export {createMarkers};

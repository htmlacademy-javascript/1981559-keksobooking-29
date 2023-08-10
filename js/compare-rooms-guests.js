import {capacity, roomNumber} from './variables.js';
import {numberOfGuests, numberOfRooms} from './constants.js';
const {oneRoom, twoRooms, threeRooms, manyRooms} = numberOfRooms;
const {oneGuest, twoGuests, threeGuests, noGuests} = numberOfGuests;

const compareRoomsWithGuests = () => {
  switch (roomNumber.value) {
    case oneRoom:
      capacity.value = oneGuest;
      break;
    case twoRooms:
      if (capacity.value >= twoGuests) {
        capacity.value = twoGuests;
      } else if (capacity.value === '0') {
        capacity.value = twoGuests;
      }
      break;
    case threeRooms:
      if (capacity.value >= threeGuests) {
        capacity.value = threeGuests;
      } else if (capacity.value === '0') {
        capacity.value = threeGuests;
      }
      break;
    case manyRooms: {
      if (capacity.value > noGuests) {
        capacity.value = noGuests;
      }
      break;
    }
  }
};

const compareGuestsWithRooms = () => {
  switch (capacity.value) {
    case oneGuest:
      if (roomNumber.value > Number(threeRooms)) {
        roomNumber.value = oneRoom;
      }
      break;
    case twoGuests:
      if (roomNumber.value > Number(threeRooms)) {
        roomNumber.value = twoRooms;
      }
      break;
    case threeGuests:
      roomNumber.value = threeRooms;
      break;
    case noGuests:
      roomNumber.value = manyRooms;
  }
};

export {compareRoomsWithGuests, compareGuestsWithRooms};


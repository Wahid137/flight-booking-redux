import { BOOKING, DELETE } from "./actionTypes";

export const makeBooking = (data) => {
  return {
    type: BOOKING,
  };
};

export const removeItem = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

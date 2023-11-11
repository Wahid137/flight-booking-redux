import { BOOKING, DELETE } from "./actionTypes";

export const makeBooking = (data) => {
  console.log(data);
  return {
    type: BOOKING,
    payload: data,
  };
};

export const removeItem = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

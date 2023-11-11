import { BOOKING, DECREMENT, INCREMENT } from "./actionTypes";

export const booking = (value) => {
  return {
    type: BOOKING,
  };
};

export const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

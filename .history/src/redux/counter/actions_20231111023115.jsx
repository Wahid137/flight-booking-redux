import { BOOKING, DELETE } from "./actionTypes";

export const booking = () => {
  return {
    type: BOOKING,
  };
};

export const removeItem = () => {
  return {
    type: DELETE,
  };
};

import { BOOKING, DELETE } from "./actionTypes";

export const booking = () => {
  return {
    type: BOOKING,
  };
};

export const remove = () => {
  return {
    type: DELETE,
  };
};

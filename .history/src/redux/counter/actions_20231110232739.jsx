import { INCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

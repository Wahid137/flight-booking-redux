import { BOOKING, DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;

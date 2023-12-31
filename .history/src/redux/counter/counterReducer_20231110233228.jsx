import { INCREMENT } from "./actionTypes";

const initialState = {
  value: 1,
};

const counterRedux = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
  }
};

export default counterRedux;

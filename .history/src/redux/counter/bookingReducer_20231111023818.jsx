import { BOOKING, DECREMENT, DELETE, INCREMENT } from "./actionTypes";

const initialState = {
  data: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      const newData = [...state.data];
      newData.push(action.payload);
      return {
        data: newData,
      };
    case DELETE:
      const filteredData = state.data.filter((d) => d.id !== action.payload);
      return {};
    default:
      return state;
  }
};

export default bookingReducer;

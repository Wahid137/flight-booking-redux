import { BOOKING, DELETE } from "./actionTypes";

const initialState = {
  data: [],
};

let newData;
let filteredData;

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKING:
      newData = [...state.data];
  }

  /* switch (action.type) {
    case BOOKING:
      newData = [...state.data];
      newData.push(action.payload);
      return { data: newData };
    case DELETE:
      filteredData = state.data.filter((d) => d.id !== action.payload);
      return { data: filteredData };
    default:
      return state;
  } */
};

export default bookingReducer;

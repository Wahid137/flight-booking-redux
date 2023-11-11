import { BOOKING, DELETE } from "./actionTypes";

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
      return {
        data: filteredData,
      };
    default:
      return state;
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
console.log(data);

export default bookingReducer;

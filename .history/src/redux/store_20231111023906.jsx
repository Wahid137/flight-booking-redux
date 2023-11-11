import { legacy_createStore as createStore } from "redux";
import counterReducer from "./counter/bookingReducer";

const store = createStore(counterReducer);

export default store;

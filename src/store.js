import { createStore } from "redux";
import rootReducer from "./reducers/reduce";

const store = createStore(rootReducer);

export default store;

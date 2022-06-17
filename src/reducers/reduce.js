import getTableData from "./index.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
  { getTableData },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootReducer;

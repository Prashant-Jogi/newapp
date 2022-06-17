import axios from "axios";
import ShowDataTable from "../actions";
const intitialState = {
  samole: "demo",
};
const getTableData = (state = intitialState, action) => {
  switch (action.type) {
    case "DATASHOW":
      return { ...state };

    default:
      return { ...state };
  }
};
export default getTableData;

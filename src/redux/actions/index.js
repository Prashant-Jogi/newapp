import axios from "axios";

const ShowDataTable = () => {
  return async (dispatch, getState) => {
    const response = await axios.get("http://localhost:5000/userData");
    dispatch({ type: "DATASHOW", payload: response });
  };
};

const UpdateData = () => {
  return { type: "UPDATE" };
};
export { ShowDataTable, UpdateData };

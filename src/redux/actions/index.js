import axios from "axios";

const ShowData = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:5000/userData");

    dispatch({ type: "SHOW", payload: response.data });
  };
};
const ChangeData = (chData, id) => {
  const response = axios.put(`http://localhost:5000/${id}`, chData);

  return { type: "CHANGE", payload: response.data };
};
const DeleteData = (id) => {
  const response = axios.delete(`http://localhost:5000/${id}`);
  return { type: "DELETE", payload: response.data };
};
const AddData = (userData) => {
  const response = axios.post("http://localhost:5000/add", userData);
  return { type: "ADD", payload: response.data };
};
const Demo = () => {
  return { type: "DEMO" };
};
export { ShowData, ChangeData, DeleteData, AddData, Demo };

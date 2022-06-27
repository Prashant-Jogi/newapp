import axios from "axios";
import { ActionType } from "./action-Type";
const ShowData = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:5000/userData");

    dispatch({ type: ActionType.SHOW, payload: response.data });
  };
};
const ChangeData = (chData, id) => {
  const response = axios.put(`http://localhost:5000/${id}`, chData);

  return { type: ActionType.CHANGE, payload: response.data };
};
const DeleteData = (id) => {
  const response = axios.delete(`http://localhost:5000/${id}`);
  return { type: ActionType.DELETE, payload: response.data };
};
const AddData = (userData) => {
  const response = axios.post("http://localhost:5000/add", userData);

  return { type: ActionType.ADD, payload: response.data };
};
const Demo = () => {
  return { type: ActionType.DEMO };
};
const updateData = (data) => {
  return { type: ActionType.updateData, payload: data };
};
export { ShowData, ChangeData, DeleteData, AddData, Demo, updateData };

import axios from "axios";

const ShowDataTable = (number) => {
  axios.get("http://localhost:5000/userData").then((res) => {
    const data = res.data;

    return data;
  });

  return { type: "DATASHOW" };
};
export default ShowDataTable;

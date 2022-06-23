import React, { useState, useEffect } from "react";
import axios from "axios";
import NewTask from "./NewTask";

const Sample = ({ childToParent }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    response();
  }, []);

  const response = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((data) => {
        setUserData(data.data.splice(0, 100));
      })
      .catch((error) => console.log(error));
  };

  childToParent(userData);
  return <></>;
};
export default Sample;

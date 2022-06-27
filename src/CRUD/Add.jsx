import React, { useEffect, useState } from "react";
import { AddData, ShowData, Demo } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./add.css";
const Add = () => {
  const select = useSelector((state) => state.getTableData.tableData);

  const [data, setData] = useState();
  //   const [userData, setUserData] = useState();
  const dispatch = useDispatch();

  const handler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    const userData = {
      name: data.name,
      email: data.email,
      number: data.number,
    };

    dispatch(AddData(userData));
    // if (userData) {
    //   dispatch(ShowData());
    //   console.log("done");
    // } else {
    //   console.log("data not found");
    // }

    // axios.post("http://localhost:5000/add", userData).then((result) => {
    //   if (result) {
    //     console.log(result, "Succesfully Sign up");
    //   } else {
    //     console.log("invalid");
    //   }
    // });
  };

  return (
    <>
      <div className="main">
        <div className="center">
          <h1>Add Page</h1>
          <div className="content">
            <div>
              <label>Enter Name</label>
              <input name="name" type="text" onChange={handler} />
            </div>
            <div>
              <label>Enter Email</label>
              <input name="email" type="email" onChange={handler} />
            </div>
            <div>
              <label>Enter Phone</label>
              <input name="number" type="number" onChange={handler} />
            </div>
            <button onClick={submit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Add;

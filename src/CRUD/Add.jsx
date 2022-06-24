import React, { useState } from "react";
import { AddData } from "../redux/actions";
import { useDispatch } from "react-redux";
import "./add.css";
const Add = () => {
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
    console.log(data);
    dispatch(AddData(userData));

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

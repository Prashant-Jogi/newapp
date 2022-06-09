import React, { useState } from "react";
import "./newtask.css";
import Sample from "./Sample";

const NewTask = () => {
  const [data, setData] = useState([]);

  const childToParent = (childdata) => {
    setData(childdata);
  };

  const click = (props) => {
    console.log(click);
    props.data(true);
  };

  return (
    <>
      <div className="main">
        <div className="center">
          <div className="header">
            <h1>UserData</h1>
            <Sample childToParent={childToParent} />
            <button onClick={click}>Click</button>
          </div>
          <div className="table">
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
              </tr>
              {data.map((Data) => {
                return (
                  <>
                    <tr>
                      <td>{Data.name}</td>
                      <td>{Data.email}</td>
                      <td>{Data.body}</td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewTask;

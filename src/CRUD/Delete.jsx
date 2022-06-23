import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ShowDataTable, UpdateData } from "../redux/actions";
const Delete = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const dispatch = useDispatch();
  //   const id = { id: "62a81faf4bb823eaa1c96e2f" };

  const select = useSelector((state) => state.getTableData.state);
  useEffect(async () => {
    dispatch(UpdateData());

    await setTimeout(() => setData(select), 0);
  }, []);

  // const getAnswer = async () => {
  //   await axios.get("http://localhost:5000/userData").then((res) => {
  //     setData(res.data);
  //   });
  // };
  // useEffect(() => {
  //   getAnswer();
  // }, []);
  const Delete = (id) => {
    axios.delete(`http://localhost:5000/${id}`).then((res) => {
      // console.log(res);
      // getAnswer();
    });
  };

  return (
    <>
      <div className="mani">
        <h1>Delete Page</h1>

        <div className="center">
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                </tr>
              </thead>
              {data.length > 0 &&
                data.map((ndata, index) => {
                  return (
                    <>
                      <tbody key={ndata._id}>
                        <tr>
                          <td>{ndata.name}</td>
                          <td>{ndata.email}</td>
                          <td>{ndata.number}</td>

                          <button
                            onClick={() => {
                              Delete(ndata._id);
                            }}
                          >
                            Delete
                          </button>
                        </tr>
                      </tbody>
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
export default Delete;

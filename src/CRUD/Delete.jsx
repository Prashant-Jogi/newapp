import React, { useEffect, useState } from "react";
import axios from "axios";
const Delete = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
  });

  //   const id = { id: "62a81faf4bb823eaa1c96e2f" };
  const getAnswer = async () => {
    await axios("http://localhost:5000/userData").then((res) => {
      const data = res.data;
      setData(data);
    });
  };
  useEffect(() => {
    getAnswer();
  }, []);
  const Delete = (id) => {
    axios.delete(`http://localhost:5000/${id}`).then((res) => {
      console.log(res);
      getAnswer();
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

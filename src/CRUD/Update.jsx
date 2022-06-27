import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./update.css";
import { useSelector, useDispatch } from "react-redux";
import {
  ShowData,
  ChangeData,
  Demo,
  updateData,
} from "../redux/actions/index.js";

const Update = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    id: "",
  });

  const [userData, setUserData] = useState({});
  // console.log(userData, "userData");
  const dispatch = useDispatch();
  const select = useSelector((state) => state.getTableData.tableData);
  const func = () => {
    dispatch(Demo());
    setData(select);
  };
  useEffect(() => {
    func();
  }, [select !== data]);
  // const getAnswer = async () => {
  //   await axios.get("http://localhost:5000/userData").then((res) => {
  //     const data = res.data;
  //     setData(data);
  //     // console.log(data);
  //   });
  // };

  const click = (id, ndata) => {
    console.log(ndata, "ndata");
    setUserData(() => {
      return {
        name: ndata.name,
        email: ndata.email,
        number: ndata.number,
        _id: id,
      };
    });
    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changes = () => {
    // const chData = {
    //   name: userData.name,
    //   email: userData.email,
    //   number: userData.number,
    // };
    // const dataArr = { data };
    // console.log(dataArr, "dataArr befor");
    data.map((Data) => {
      if (Data._id === userData._id) {
        Object.keys(Data).map((key) => {
          Data[key] = userData[key];
          console.log(key, "key");
        });
      }
    });
    const id = userData._id;
    dispatch(ChangeData(userData, id));
    dispatch(updateData(data));

    handleClose();
  };
  const updateChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div className="main">
        <div className="center">
          <h1>Update Page</h1>
          <div className="content">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number</th>
                </tr>
              </thead>
              {data &&
                data.length > 0 &&
                data.map((ndata, index) => {
                  return (
                    <>
                      <tbody>
                        <tr key={ndata._id}>
                          <td>{ndata.name}</td>
                          <td>{ndata.email}</td>
                          <td>{ndata.number}</td>
                          <button
                            onClick={() => {
                              click(ndata._id, ndata);
                            }}
                          >
                            Option
                          </button>
                        </tr>
                      </tbody>
                    </>
                  );
                })}
            </table>
            {/* <div className="box"> */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                  </tr>
                  <tr>
                    <td>
                      <input
                        contentEditable={true}
                        id="name"
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={updateChange}
                      />
                    </td>
                    <td>
                      <input
                        contentEditable={true}
                        id="email"
                        type="text"
                        name="email"
                        value={userData.email}
                        onChange={updateChange}
                      />
                    </td>
                    <td>
                      <input
                        contentEditable={true}
                        id="number"
                        type="number"
                        name="number"
                        value={userData.number}
                        onChange={updateChange}
                      />
                    </td>
                  </tr>
                </table>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={changes}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Update;

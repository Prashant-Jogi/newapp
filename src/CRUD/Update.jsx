import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./update.css";
import { useSelector, useDispatch } from "react-redux";
import { ShowData, ChangeData } from "../redux/actions/index.js";

const Update = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    _id: "",
  });

  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const select = useSelector((state) => state.getTableData.tableData);
  const func = () => {
    dispatch(ShowData());
    setData(select);
    console.log("here");
  };
  useEffect(() => {
    func();
  }, [!select]);
  // const getAnswer = async () => {
  //   await axios.get("http://localhost:5000/userData").then((res) => {
  //     const data = res.data;
  //     setData(data);
  //     // console.log(data);
  //   });
  // };

  const click = (id, ndata) => {
    setUserData(() => {
      return {
        name: ndata.name,
        email: ndata.email,
        number: ndata.number,
        id: ndata._id,
      };
    });
    handleShow();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changes = () => {
    const chData = {
      name: document.getElementById("name").innerHTML,
      email: document.getElementById("email").innerHTML,
      number: document.getElementById("number").innerHTML,
    };
    const id = userData.id;
    dispatch(ChangeData(chData, id));
    // axios.put(`http://localhost:5000/${id}`, chData).then((res) => {
    //   func();

    //   console.log(res.data, "res data");
    //   console.log(select, "update");
    // });

    handleClose();
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
                        <tr key={index}>
                          <td>{ndata.name}</td>
                          <td>{ndata.email}</td>
                          <td>{ndata.number}</td>
                          <button
                            onClick={() => {
                              click(index, ndata);
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
                    <td id="name" contentEditable={true}>
                      {userData.name}
                    </td>
                    <td id="email" contentEditable={true}>
                      {userData.email}
                    </td>
                    <td id="number" contentEditable={true}>
                      {userData.number}
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

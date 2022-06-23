import React, { useState, useEffect } from "react";
import "./crudNode.css";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ShowDataTable,
  UpdateData,
  GetDataTable,
} from "./redux/actions/index.js";
import getTableData from "./redux/reducers";
const CrudNode = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowDataTable());
  }, []);
  // const getAnswer = async () => {
  //   await axios.get("http://localhost:5000/userData").then((res) => {
  //     dispatch(ShowDataTable());
  //   });
  // };
  return (
    <>
      <div className="main">
        <div className="center">
          <div className="navbar">
            <button>
              <Link id="link" to="/Add">
                Add Data
              </Link>
            </button>
            <button>
              <Link id="link" to="/Read">
                Read Data
              </Link>
            </button>
            <button>
              <Link id="link" to="/Update">
                Update
              </Link>
            </button>
            <button>
              <Link id="link" to="/Delete">
                Delete
              </Link>
            </button>
          </div>
          {/* <button onClick={() => dispatch(incrementAsync())}>Click</button> */}
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default CrudNode;

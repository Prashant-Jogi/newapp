import React, { useState } from "react";
import { useEffect } from "react";
import "./crudNode.css";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ShowDataTable from "./actions/index.js";
const CrudNode = () => {
  const [temp, setTemp] = useState();
  const state = useSelector((state) => state.getTableData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ShowDataTable());
  }, [dispatch]);
  console.log(state);
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

          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default CrudNode;

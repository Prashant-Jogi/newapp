import "./crudNode.css";
import { Outlet, Link } from "react-router-dom";
const CrudNode = () => {
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

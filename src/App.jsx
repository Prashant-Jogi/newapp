import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/Demologin2">Signup</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  );
};
export default App;

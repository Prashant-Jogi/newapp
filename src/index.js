import React from "react";
import ReactDOM from "react-dom/client";
import Add from "./CRUD/Add";
import Delete from "./CRUD/Delete";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CrudNode from "./CrudNode";
import store from "./store";
import { Provider } from "react-redux";

const Routing = (store) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CrudNode />}>
            <Route path="/Add" element={<Add />} />
            <Route path="/Delete" element={<Delete />} />
            <Route path="/Read" element={<Read />} />
            <Route path="/Update" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Provider store={store}>
      <Routing />
    </Provider>
  </>
);

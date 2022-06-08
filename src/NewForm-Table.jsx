import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";
import Checkbox from "./CheckBox";
import "./newForm-table.css";

const NewFormTable = () => {
  const [Data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const [filterParam, setFilterparam] = useState("fname");
  const handleFilterChange = (e) => {
    if (e.target.checked) {
      setFilterparam(e.target.name);
    }
  };
  console.log(filterParam, "filterParamfilterParam");
  const [Tdata, setTdata] = useState([]);

  const handler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const [editState, setEditState] = useState(false);
  const submit = (e, oldValue) => {
    e.preventDefault();
    if (!editState) {
      setTdata((prev) => {
        return [...prev, { ...Data, id: uuidv4() }];
      });

      setData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
      });
    } else {
      console.log("comoing here");
      const dataArr = [...Tdata];
      console.log(dataArr, Data, "this is dataArr 1");

      dataArr.forEach((data) => {
        if (data.id === Data.id) {
          Object.keys(data).map((key) => {
            data[key] = Data[key];
          });
        }
      });
      console.log(dataArr, "this is dataArr 2");
      setTdata(dataArr);
      setData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
      });
      setEditState(false);
    }
  };

  const deletItem = (email) => {
    const updated = Tdata.filter((item) => item.email !== email);

    setTdata(updated);
  };
  const btnEdit = (id, row) => {
    // const oldValue = Tdata.find((item) => item.id === id);
    setEditState(true);
    setData({
      fname: row.fname,
      lname: row.lname,
      email: row.email,
      phone: row.phone,
      id: row.id,
    });
  };
  const [filterText, setFilterText] = useState("");
  const filter = (select) => {};
  return (
    <>
      <div className="main">
        <div className="center">
          <div className="content">
            <form onSubmit={submit}>
              <TextField
                id="standard-required"
                label="First Name"
                name="fname"
                variant="standard"
                value={Data.fname}
                onChange={handler}
              />
              <TextField
                id="standard-required"
                label="Last Name"
                name="lname"
                variant="standard"
                value={Data.lname}
                onChange={handler}
              />
              <TextField
                id="standard-required"
                label="Email"
                name="email"
                variant="standard"
                value={Data.email}
                onChange={handler}
              />
              <TextField
                id="standard-required"
                label="Phone Number"
                name="phone"
                variant="standard"
                value={Data.phone}
                onChange={handler}
              />
            </form>
            <button id="submit" onClick={submit} variant="contained">
              Submit
            </button>
          </div>
        </div>

        <div className="table">
          <div className="checkbox">
            <form>
              <label>
                <input
                  type="checkbox"
                  setFilterparam={setFilterparam}
                  name="fname"
                  id="dawda1"
                  onChange={handleFilterChange}
                />
                First Name
              </label>
              <label>
                <input
                  type="checkbox"
                  setFilterparam={setFilterparam}
                  name="lname"
                  id="dawda1"
                  onChange={handleFilterChange}
                />
                Last Name
              </label>
              <label>
                <input
                  type="checkbox"
                  setFilterparam={setFilterparam}
                  name="email"
                  id="dawda1"
                  onChange={handleFilterChange}
                />
                Email
              </label>
              <label>
                <input
                  type="checkbox"
                  setFilterparam={setFilterparam}
                  name="phone"
                  id="dawda1"
                  onChange={handleFilterChange}
                />
                Phone
              </label>
            </form>

            <button onClick={filter} className="search_btn">
              Filter
            </button>
          </div>
          <input
            type="text"
            onChange={(e) => {
              setFilterText(e.target.value);
            }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Tdata.filter((data) => {
                  return data[filterParam]
                    .toLowerCase()
                    .includes(filterText.toLowerCase());
                  console.log(data[filterParam], "datadatadatadata");
                }).map((row, index) => (
                  <TableRow
                    id={index}
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.fname}
                    </TableCell>
                    <TableCell align="right">{row.lname}</TableCell>

                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.phone}</TableCell>
                    <div className="btn">
                      <button
                        onClick={() => {
                          btnEdit(row.id, row);
                        }}
                        id="btnEdit"
                        variant="contained"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          deletItem(row.email);
                        }}
                        id="btnDlt"
                        variant="contained"
                      >
                        Delete
                      </button>
                    </div>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
export default NewFormTable;

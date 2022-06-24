import React, { useEffect, useState } from "react";
import { ShowData } from "../redux/actions";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch, useSelector } from "react-redux";
import "./read.css";
const Read = () => {
  // to set data which comes from axios.get
  const [data, setData] = useState({});
  //getting data from backend

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
  console.log(select, "select");
  console.log(data, "data");
  // useEffect(() => {
  //   if (select) {
  //     setData(select);
  //   }
  //   console.log(select, "select");
  //   console.log(data, "data");
  // }, [select]);
  // // useEffect(() => {
  //   const temp = async () => {
  //     await setData(select);
  //   };
  //   temp();
  // }, []);
  //  filterparam store checked / unchecked value for radio buttons
  const [filterParam, setfilterparam] = useState("");
  //onChange handler for radio buttons
  const handleFilterChange = (e) => {
    if (e.target.checked) {
      setfilterparam(e.target.value);
    }
  };
  // getting input value for search
  const [filterText, setFilterText] = useState("");
  //sorting data
  const option = (e) => {
    if (e.target.value === "asc" && e.target.id === "sortByname") {
      const ascdata = [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
      setData(ascdata);
    } else if (e.target.value === "desc" && e.target.id === "sortByname") {
      const descdata = [...data].sort((a, b) => (a.name < b.name ? 1 : -1));
      setData(descdata);
    }
  };

  return (
    <>
      <div className="mani">
        <h1>Read Page</h1>
        {/* radio buttons */}
        <div className="radiogroup">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              defaultValue="name"
            >
              <FormControlLabel
                value="name"
                control={<Radio />}
                label="Name"
                setfilterparam={setfilterparam}
                onChange={handleFilterChange}
              />
              <FormControlLabel
                value="email"
                control={<Radio />}
                label="Email"
                setfilterparam={setfilterparam}
                onChange={handleFilterChange}
              />
              <FormControlLabel
                value="number"
                control={<Radio />}
                label="Number"
                setfilterparam={setfilterparam}
                onChange={handleFilterChange}
              />
            </RadioGroup>
          </FormControl>
        </div>
        {/* input field for search */}
        <div className="btn_input">
          <input
            type="text"
            onChange={(e) => {
              setFilterText(e.target.value);
            }}
          />
        </div>
        {/* Data table     */}
        <div className="center">
          <div className="content">
            <table id="table">
              <tr>
                <th>
                  Name
                  <select onChange={option} id="sortByname">
                    <option value="asc">Asc</option>
                    <option value="desc">Des</option>
                  </select>
                </th>
                <th>Email</th>
                <th>Number</th>
              </tr>
              {/* filter data */}
              {data &&
                data.length > 0 &&
                data
                  .filter((data1) => {
                    if (filterText === "") {
                      return data1;
                    }

                    if (
                      filterParam === "name" &&
                      data1.name
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
                    ) {
                      return data1;
                    } else if (
                      filterParam === "email" &&
                      data1.email
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
                    ) {
                      return data1;
                    } else if (
                      filterParam === "number" &&
                      data1.number
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
                    ) {
                      return data1;
                    }
                  })

                  .map((ndata) => {
                    return (
                      <tr key={ndata._id}>
                        <td id="name">{ndata.name}</td>
                        <td id="email">{ndata.email}</td>
                        <td id="number">{ndata.number}</td>
                      </tr>
                    );
                  })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Read;

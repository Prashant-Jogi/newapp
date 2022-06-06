import React, { useState } from "react";
import "./demologin2.css";
const Demologin2 = () => {
  const [Data, setData] = useState();
  const [Error, setError] = useState({
    FnameError: null,
    LnameError: null,
    EmailError: null,
    PhoneError: null,
  });
  const handler = (e) => {
    // const value = e.target.value;
    // const name = e.target.name;
    // setData((prev) => {
    //   if (name === "fname") {
    //     return {
    //       fname: value,
    //       lname: prev.fname,
    //       email: prev.lname,
    //       phone: prev.phone,
    //     };
    //   } else if (name === "lname") {
    //     return {
    //       fname: prev.fname,
    //       lname: value,
    //       email: prev.email,
    //       phone: prev.phone,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fname: prev.fname,
    //       lname: prev.lname,
    //       email: value,
    //       phone: prev.phone,
    //     };
    //   } else if (name === "phone") {
    //     return {
    //       fname: prev.fname,
    //       lname: prev.lname,
    //       email: prev.email,
    //       phone: value,
    //     };
    //   }
    // });

    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const validate = () => {
    let fnameError = "";
    let lnameError = "";
    let emailError = "";
    let phoneError = "";

    const { fname, lname, email, phone } = Data;
    if (!fname) {
      fnameError = "Please Enter First Name";
    }
    if (!lname) {
      lnameError = "Please Enter Last Name";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || reg.test(email) === false) {
      emailError = "Please Enter Valid Email";
    }
    if (!phone) {
      phoneError = "Please Enter Phone Number";
    }
    if (fnameError || lnameError || emailError || phoneError) {
      setError({ fnameError, lnameError, emailError, phoneError });
    }
  };
  const Submit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <>
      <div className="main">
        <div className="content_div">
          <h1>Welcome </h1>

          <form onSubmit={Submit}>
            <div>
              <label>Enter Your First Name</label>
              <input name="fname" onChange={handler} type="text" />
              <p>{Error.fnameError}</p>
            </div>
            <div>
              <label>Enter Your Last Name</label>
              <input name="lname" onChange={handler} type="text" />
              <p>{Error.lnameError}</p>
            </div>
            <div>
              <label>Enter Your Email</label>
              <input name="email" onChange={handler} type="text" />
              <p>{Error.emailError}</p>
            </div>
            <div>
              <label>Enter Your Phone Number</label>
              <input name="phone" onChange={handler} type="number" />
              <p>{Error.phoneError}</p>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Demologin2;

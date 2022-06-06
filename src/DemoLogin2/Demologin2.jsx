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
    const phone_reg = /^[+91]*([0-9]\d{10})$/;
    if (!phone || phone_reg.test(phone) === false) {
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
              <p hidden={!Error.fnameError ? true : false}>
                {Error.fnameError}
              </p>
            </div>
            <div>
              <label>Enter Your Last Name</label>
              <input name="lname" onChange={handler} type="text" />
              <p hidden={!Error.lnameError ? true : false}>
                {Error.lnameError}
              </p>
            </div>
            <div>
              <label>Enter Your Email</label>
              <input name="email" onChange={handler} type="text" />
              <p hidden={!Error.emailError ? true : false}>
                {Error.emailError}
              </p>
            </div>
            <div>
              <label>Enter Your Phone Number</label>
              <input name="phone" onChange={handler} type="number" />
              <p hidden={!Error.phoneError ? true : false}>
                {Error.phoneError}
              </p>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Demologin2;

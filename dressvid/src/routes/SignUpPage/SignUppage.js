import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SignUppage.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUppage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { FirstName, email, LastName, Password } = formFields;
  const [pwdType, setpwdType] = useState("password");
  const [pwdText, setPwdText] = useState("Show password");
  let navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: FirstName,
        lastName: LastName,
        email: email,
        password: Password,
      });
      navigate("/");
      localStorage.setItem("VideoLibraryToken", response.data.encodedToken);
      resetFormFields();
      toast.success("You have signed up!", {
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Error in sign up.Try again !", {
        autoClose: 3000,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const pwdHandler = () => {
    pwdType === "password" ? setpwdType("text") : setpwdType("password");
    pwdText === "Show password"
      ? setPwdText("Hide password")
      : setPwdText("Show password");
  };

  return (
    <div>
      <form className="signUp-form" onSubmit={handleSubmit}>
        <h3 className="loginh2">Sign Up</h3>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type="text"
            placeholder="Enter First name"
            required
            onChange={handleChange}
            name="FirstName"
            value={FirstName}
          />
        </div>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type="text"
            placeholder="Enter Last name"
            required
            onChange={handleChange}
            name="LastName"
            value={LastName}
          />
        </div>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type="email"
            placeholder="Enter Email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>

        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type={pwdType}
            placeholder="Confirm password"
            required
            onChange={handleChange}
            name="Password"
            value={Password}
          />
        </div>
        <div className="show-pwd">
          <small className="showPwd-text" onClick={pwdHandler}>
            {pwdText}
          </small>
        </div>
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
        <p className="signUp-para">
          Already have an account?{" "}
          <Link className="linkToSignUp" to="/signIn">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUppage;

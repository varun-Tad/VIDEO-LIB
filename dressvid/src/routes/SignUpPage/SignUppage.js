import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUppage.css";

const SignUppage = () => {
  return (
    <div>
      <form className="signUp-form">
        <h3 className="loginh2">Sign Up</h3>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type="text"
            placeholder="Enter name"
            required
          />
        </div>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="show-pwd">
          {/* <small  className="showPwd-text" onClick={pwdHandler}>{pwdText}</small> */}
          <small className="showPwd-text">Show password</small>
        </div>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type="password"
            placeholder="Confirm password"
            required
          />
        </div>
        <div className="show-pwd">
          {/* <small className="showPwd-text" onClick={pwdHandler}>{pwdText}</small> */}
          <small className="showPwd-text">Show password</small>
        </div>
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
        <p className="signUp-para">
          Don't have an account?{" "}
          <Link className="linkToSignUp" to="/signIn">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUppage;

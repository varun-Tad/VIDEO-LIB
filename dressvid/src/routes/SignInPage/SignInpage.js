import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignInpage.css";

const SignInpage = () => {
  return (
    <div>
      <form className="login-form">
        <h3 className="loginh2">Login</h3>
        <div className="googleLogin">
          <img
            className="google-icon"
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="google-icon"
          />
          <span>Sign in with Google</span>
        </div>
        <small className="form-smallText">or Sign in with Email</small>
        <div className="inp-boxes">
          <lable htmlFor="email"></lable>
          <input
            className="basic-inp-box"
            type="email"
            placeholder="Enter email"
            required
            name="email"
          />
        </div>
        <div className="inp-boxes">
          <lable htmlFor="Password"></lable>
          <input
            className="basic-inp-box"
            type="password"
            placeholder="Enter password"
            required
            name="password"
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <p className="signUp-para">
          Don't have an account?{" "}
          <Link className="linkToSignUp" to="/Signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInpage;

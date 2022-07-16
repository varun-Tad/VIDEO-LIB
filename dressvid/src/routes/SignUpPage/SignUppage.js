import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changeUserStatus } from "../../features/Auth/AuthSlice";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import "./SignUppage.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUppage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [pwdType, setpwdType] = useState("password");
  const [pwdText, setPwdText] = useState("Show password");
  let navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match", {
        autoClose: 3000,
      });
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      navigate("/");
      dispatch(changeUserStatus());
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-a;ready-in-use") {
        toast.error("Cannot create user.Email already in use", {
          autoClose: 3000,
        });
      } else {
        toast.error("user creation encountered an error", {
          autoClose: 3000,
        });
      }
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
            placeholder="Enter name"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />
        </div>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type="email"
            placeholder="Enter email"
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
            placeholder="Enter Password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="show-pwd">
          <small className="showPwd-text" onClick={pwdHandler}>
            {pwdText}
          </small>
        </div>
        <div className="inp-boxes">
          <label></label>
          <input
            className="basic-inp-box"
            type={pwdType}
            placeholder="Confirm password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
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

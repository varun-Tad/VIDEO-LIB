import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./SignInpage.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInpage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("VideoLibraryToken", response.data.encodedToken);
      resetFormFields();
      navigate("/");
      toast.success("You are logged in !", {
        autoClose: 3000,
      });
    } catch (err) {
      toast.error("Error in login.Try again !", {
        autoClose: 3000,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="signIn-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h3 className="loginh2">Login</h3>

        <div className="inp-boxes">
          <label htmlFor="email"></label>
          <input
            className="basic-inp-box"
            type="email"
            placeholder="Enter email"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="inp-boxes">
          <label htmlFor="Password"></label>
          <input
            className="basic-inp-box"
            type="password"
            placeholder="Enter password"
            required
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <p className="signUp-para">
          Don't have an account?{" "}
          <Link className="linkToSignUp" to="/signup">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInpage;

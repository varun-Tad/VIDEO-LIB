import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changeUserStatus } from "../../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
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

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
      toast.success("Login successful !", {
        autoClose: 3000,
      });
      dispatch(changeUserStatus());
      navigate("/");
    } catch (err) {
      toast.error("Login unsuccessful!Try again", {
        autoClose: 3000,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      dispatch(changeUserStatus());
      navigate("/");
      toast.success("Login successful !", {
        autoClose: 3000,
      });
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("incorrect password for email", {
            autoClose: 3000,
          });
          break;
        case "auth/user-not-found":
          toast.error("no user associated with this email", {
            autoClose: 3000,
          });
          break;
        default:
          toast.error("error.Try again", {
            autoClose: 3000,
          });
      }
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
        <div className="googleLogin" onClick={signInWithGoogle}>
          <img
            className="google-icon"
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="google-icon"
          />
          <span>Sign in with Google</span>
        </div>
        <small className="form-smallText">or Sign in with Email</small>
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

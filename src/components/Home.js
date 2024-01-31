import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="homeContainer">
        <div className="homeLeft">
          <div className="logo"></div>
          <div className="title">Base</div>
          <div className="socialLogos">
            <div className="socialLogo github"></div>
            <div className="socialLogo twitter"></div>
            <div className="socialLogo discord"></div>
            <div className="socialLogo linkedIn"></div>
          </div>
        </div>
        <div className="homeRight">
          <div className="homeRightContainer">
            <div className="formTitle">Sign In</div>
            <div className="formSubitle">Sign in to you account</div>
            <div className="formBtns">
              <div className="formBtn googleBtn">
                <div className="googleIcon"></div>
                <div className="googleBtnText">Sign in with Google</div>
              </div>
              <div className="formBtn appleBtn">
                <div className="appleIcon"></div>
                <div className="appleBtnText">Sign in with Apple</div>
              </div>
            </div>
            <div className="form">
              <label for="email">Email address</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your username"
              ></input>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              ></input>
              <div className="forgotPass">
                <a href="#">Forgot Password?</a>
              </div>
              <Link to="/main">
                <button className="submitBtn">Sign In</button>
              </Link>
            </div>
            <div className="formBottom">
              Don't have an account? <a href="#">Register here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

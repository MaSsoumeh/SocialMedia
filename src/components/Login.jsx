import React, { useState } from "react";
import { ReactComponent as LoginVector } from "../assets/images/loginVector.svg";
import "./login.css";

const Login = (props) => {
  const { setUser } = props;
  const [username, setUsername] = useState("");
  const handleSubmit = () => {
    setUser(username);
  };

  return (
    <div className="pageWrapper">
      <div className="mainWrapper">
        <h1>Pet Lovers</h1>
        <LoginVector className="vector" />
        <div className="formWrapper">
          <div className="inputWrapper">
            <label htmlFor="username">Username </label>
            <input
              id="username"
              className="loginInput"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="password">Password </label>
            <input type="password" id="password" className="loginInput" />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

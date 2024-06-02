import React, { useState } from "react";
import "./SignIn.css";
import { NavLink, useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("user"));

  const [saveData, setSaveData] = useState({
    userName: "",
    password: "",
  });


  function onSubmitHandler(e) {
    e.preventDefault();
    let matchedData = users.filter(
      (value) =>
        value.userName === saveData.userName &&
        value.password === saveData.password
    );
    if (matchedData.length > 0) {
      alert("Are Welcome banna ");
      navigate("/home");
    } else {
      alert("userName or password glt hai bhai wpas check kr");
    }
  }

  function getdata(data, value) {
    setSaveData((prev) => {
      console.log(prev);
      return { ...prev, [data]: value };
    });
  }

  return (
    <>
      <div className="loginform">
        <form class="login" onSubmit={onSubmitHandler}>
          <h2>Welcome, User!</h2>
          <p>Please Sign In</p>
          <input
            type="text"
            placeholder="User Name"
            value={saveData.userName}
            onChange={(e) => getdata("userName", e.target.value)}
          />
          <input
            type="password"
            value={saveData.password}
            placeholder="Password"
            onChange={(e) => getdata("password", e.target.value)}
          />

          <input type="submit" value="Sign In" />

          <div class="links">
            <a href="#">Forgot password</a>
            <NavLink to="/signUp">Sign Up</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;

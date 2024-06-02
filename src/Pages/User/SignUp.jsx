import React, { useEffect, useState } from "react";
import "./SignIn.css";
import { NavLink } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [saveData, setSaveData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function getData(data, value) {
    setSaveData((prev) => {
      console.log(prev);
      return { ...prev, [data]: value };
    });
  }

  useEffect(() => {
    onSubmitHandler
  },[])
  function onSubmitHandler(e) {
    e.preventDefault();
    let usersData = JSON.parse(localStorage.getItem("user"));
    let newUserEntry = [
      ...(usersData ? usersData : []),
      {
        userName: saveData.userName,
        email: saveData.email,
        password: saveData.password,
      },
    ];
    console.log(usersData, newUserEntry);
    localStorage.setItem("user", JSON.stringify(newUserEntry));
    let matchData = usersData.filter(
      (value) =>
        value.userName === saveData.userName && value.email === saveData.email
    );
    if (matchData.length > 0) {
      alert('User name or email all ready exist.')
    } else {
      alert("Sign up successful! ");
      navigate("/");
    }
  }

  return (
    <>
      <div className="loginform">
        <form class="login" onSubmit={onSubmitHandler}>
          <h2>Welcome, User!</h2>
          <p>Please Sign Up</p>
          <input
            type="Name"
            placeholder="User Name"
            value={saveData.userName}
            onChange={(e) => getData("userName", e.target.value)}
          />
         
          <input
            type="gmail"
            placeholder="Gmail"
            value={saveData.email}
            onChange={(e) => getData("email", e.target.value)}
          />
        
          <input
            type="password"
            placeholder="Password"
            value={saveData.password}
            onChange={(e) => getData("password", e.target.value)}
          />
          

          <input type="submit" value="Sign Up" onClick={() => setShow(true)} />

          <div class="links">
            <p style={{ fontSize: "13px" }}>
              Already have an account so please ?
            </p>
            <NavLink href="/">Sign In</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

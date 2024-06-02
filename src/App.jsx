import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Ourteam from "./Pages/Ourteam";
import Blog from "./Pages/Blog";
import ContectUs from "./Pages/ContectUs";
import SignIn from "./Pages/User/SignIn";
import SignUp from "./Pages/User/SignUp";



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<Ourteam />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contectUs" element={<ContectUs />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App

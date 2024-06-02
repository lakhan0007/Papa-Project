import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import PapaImg from "../../../public/images/WhatsApp.jpg";
import PapaImg1 from "../../../public/images/WhatsApp-removebg-preview.png";
import { NavLink } from "react-router-dom";

function BootNav() {
  function logout() {
    if (confirm("tussi ja rhe ho tussi naa jao 😔😔😔😔")) {
      localStorage.removeItem();
    } else {
      return false;
    }
  }

  return (
    <>
      <Navbar expand="lg" className="bg-dark px-5">
        <Navbar.Brand href="#" className="text-white">
          <img
            src="https://i.ibb.co/QDy827D/ak-logo.png"
            class="img-fluid"
            alt="logo"
            style={{ height: "40px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <NavLink to="/home" className="text-white navicon px-3">
              Home
            </NavLink>
            <NavLink to="/about" className="text-white px-3">
              About
            </NavLink>
            <NavLink to="/ourteam" className="text-white px-3">
              OurTeam
            </NavLink>
            <NavLink to="/blog" className="text-white px-3">
              Blog
            </NavLink>
            <NavLink to="/contectUs" className="text-white px-3">
              Contect Us
            </NavLink>
            <NavLink to="/" className="text-white px-3" onClick={logout}>
              logOut
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container-fluid">
        <div className="row banner_div">
          <div className="col-md-6 flex-row banner-div-first ">
            <p className="first-p">We are always ready to help you.</p>
            <p className="secondd-p">
              Our Creative Designer Waiting for your Projectes
            </p>
            <p className="third-p">
              Welcome to Webtack! we are here to provide you with the best and
              hassle-free services for your online business.
            </p>
            <button class="button button2">Contect Me</button>
          </div>
          <div className="col-md-6 banner-div-second">
            <img src={PapaImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BootNav;
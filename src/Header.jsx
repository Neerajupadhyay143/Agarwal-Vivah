import React, { useContext, useState } from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
import Registration from "./Registration";
import { Edit } from "@mui/icons-material";
import EditProfile from "./ProfileNavbar/EditProfile";
import LoginPage from "./Login Folder/LoginPage";

const Header = () => {
  const[open,setOpen]=useState(false);
  const[login,setLogin]=useState(false);
  // const {state} =useContext(Context)



  

  const handleRegistrationClick =()=>{
    setOpen(true);
   
  }

  const handleLoginClick =()=>{
  setLogin(true);
  }
  //    useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setOpen(true);
  //   }, 3000);

  //   // Clear the timer when the component is unmounted to avoid memory leaks
  //   return () => clearTimeout(timer);
  // }, []); // The empty dependency array ensures that the effect runs only once on component mount

  return (
    <>
      <div>
        <LoginPage login={login} setLogin={setLogin}/>
    <Registration open={open} setOpen={setOpen}/>
        <header id="header">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="index.html">
                <img src="logo.png" alt="AgarwalsVivah" height="40" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="about-us.html">
                      {/* {state.profileFor } */}
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="success-stories.html">
                      Sucess Stories
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="social-activies.html">
                      Social Activies
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="modal" href="#login" onClick={handleLoginClick}>
                      Log In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="modal"  href="#" onClick={handleRegistrationClick} >
                      Free Registration
                    </a>
                  </li>
                </ul>
                <div className="d-flex ">
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <i className="fa-solid fa-phone-volume"></i>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton">
                      <div className="fixed-helpline-icon">
                        <div className="hdtxt1">
                          <i className="fa-solid fa-phone"></i>{" "}
                          <span>Let's Connect With Metablock Technologies</span>
                        </div>
                      </div>
                      <hr />
                      <div id="div_help">
                        <h4>For Sales Inquiry</h4>
                        <a href="contact-us.html">
                          <i className="fa-solid fa-phone"></i>{" "}
                          <span>+91 935 859 3003</span>
                        </a>
                        <a href="#">
                          <i className="fa-solid fa-envelope"></i>{" "}
                          <span>Info@metablocktechnologies.io</span>
                        </a>
                      </div>
                      <hr />
                      <div id="div_help">
                        <h4>For Quick Connect</h4>
                        <a href="#">
                          <i className="fa-brands fa-whatsapp"></i>
                          <span>Whatsapp</span>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-linkedin"></i>
                          <span>Linkedin</span>
                        </a>
                        <a href="#">
                          <i className="fa-brands fa-facebook"></i>
                          <span>Fecebook</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
   
    </>
  );
};

export default Header;

import React from "react";
import "./MainNavbar.css";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <>
      <header className="header">
        <nav className="container">
          <div className="general-mainpage">
            <div className="netflixlogo">
              <img
                className="netflixphoto"
                src="/public/imgs/Ekran_şəkli_2024-05-04_125201-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="signtranslate">
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
              <div className="signinbtn-general">
                <button className="signinbtn"><Link to={"/Login"}>Sign In</Link></button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MainNavbar;

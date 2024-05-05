import React from "react";
import "./NetflixNavbar.scss"

function NetflixNavbar() {
  return (
    <>
      <header className="header">
        <nav className="netflixcontainer">
          <div className="general-netflixnavbar">
            <div className="netflixleftitems">
              <div>
                <img
                  className="netflixphoto"
                  src="./public/imgs/Ekran_şəkli_2024-05-04_125201-removebg-preview.png"
                  alt=""
                />
              </div>
              <div>
                <ul className="netflixitems">
                  <li>Home</li>
                  <li>TV Shows</li>
                  <li>Movies</li>
                  <li>New & Popular</li>
                  <li>My List</li>
                </ul>
              </div>
            </div>

            <div className="netflixrightitems">
              <i class="fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-bell"></i>
              <div className="account-logo">
                <i class="fa-solid fa-user"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NetflixNavbar;

import React from "react";
import "./NetflixNavbar.css"
import { Link } from "react-router-dom";


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
                 <Link to={'/NetflixHome'}><li>Home</li></Link>
                 <Link to={'/NetflixHome/TvShowsPage'}><li>TV Shows</li></Link>
                 <Link to={'/NetflixHome/MoviesPage'}><li>Movies</li></Link>
                 <Link to={'/NetflixHome/NewPopular'}><li>New & Popular</li></Link>
                 <Link to={'/NetflixHome/Mylist'}><li>My List</li></Link>
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

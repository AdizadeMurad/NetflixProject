import React from "react";
import { Link } from "react-router-dom";
import "./SectionGradientLogin.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SectionGradientLogin() {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/NetflixHome");
        } else {
          alert("Warning: Your email or password is incorrect...!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section
        className="overlay__blog"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="container">
          <form onSubmit={handleClick}>
            <div className="general-loginregister">
              <div className="general-login">
                <p
                  style={{
                    fontSize: "32px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  Sign In
                </p>
                <div className="logininputs">
                  <input
                    type="text"
                    className="emaillogin"
                    placeholder=" Email or mobile number"
                    onChange={(e) => setemail(e.target.value)}
                  />
                  <input
                    type="text"
                    className="emaillogin"
                    name=""
                    id=""
                    placeholder=" Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="loginmiddleinputs">
                  <button className="signinlogin">Sign In</button>
                  <p style={{ margin: "auto" }}>OR</p>
                  <button className="uselogin">Use a Sign-In Code</button>
                  <p style={{ margin: "auto" }}>Forgot password?</p>
                </div>
                <div className="loginbottominputs">
                  <form action="">
                    <input type="checkbox" id="vehicle1" name="vehicle1" />
                    <label
                      style={{ marginLeft: "7px", color: "white" }}
                      for="vehicle1"
                    >
                      Remember me
                    </label>
                  </form>

                  <p>
                    New to Neftlix? <Link to={"/Register"}>Sign up now.</Link>
                  </p>
                  <p>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. <br />
                    <Link>Learn more.</Link>
                  </p>
                  <p>
                    The information collected by Google reCAPTCHA is subject to
                    the Google Privacy Policy and Terms of Service, and is used
                    for providing, maintaining, and improving the reCAPTCHA
                    service and for general security purposes (it is not used
                    for personalized advertising by Google).
                  </p>
                </div>
              </div>
            </div>{" "}
          </form>
        </div>

        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <footer>
            <div className="container">
              <div className="footer-general">
                <div className="">
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "13px",
                    }}
                  >
                    <li>
                      <Link className="color-footer">
                        Questions? Contact us.
                      </Link>
                    </li>
                    <li>
                      <Link>FAQ</Link>
                    </li>
                    <li>
                      <Link>Investor Relations</Link>
                    </li>
                    <li>
                      <Link>Privacy</Link>
                    </li>
                    <li>
                      <Link>Speed Test</Link>
                    </li>
                    dropdown
                    <p>Netflix Azerbaijan</p>
                  </ul>
                </div>
                <div className="footer-row">
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "13px",
                    }}
                  >
                    <li>
                      <Link>Help Center</Link>
                    </li>
                    <li>
                      <Link>Jobs</Link>
                    </li>
                    <li>
                      <Link>Cookie Preferences</Link>
                    </li>
                    <li>
                      <Link>Legal Notices</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-row">
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "13px",
                    }}
                  >
                    <li>
                      <Link>Account</Link>
                    </li>
                    <li>
                      <Link>Ways to Watch</Link>
                    </li>
                    <li>
                      <Link>Corporate Information</Link>
                    </li>
                    <li>
                      <Link>Only on Netflix</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-row">
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "13px",
                    }}
                  >
                    <li>
                      <Link>Media Center</Link>
                    </li>
                    <li>
                      <Link>Terms of Use</Link>
                    </li>
                    <li>
                      <Link>Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

export default SectionGradientLogin;

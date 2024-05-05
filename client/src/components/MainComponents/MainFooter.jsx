import React from "react";
import { Link } from "react-router-dom";
import "./MainFooter.css"
function MainFooter() {
  return (
    <>
    <div className="line-page"></div>
      <footer className="footer">
        <div className="container">
          <div className="footer-general">
            <div className="">
              <ul style={{display:"flex",flexDirection:"column", gap:"13px"}}>
                <li>
                  <Link className="color-footer">Questions? Contact us.</Link>
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
              <ul style={{display:"flex",flexDirection:"column", gap:"13px"}}>
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
              <ul style={{display:"flex",flexDirection:"column", gap:"13px"}}>
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
            <div className="footer-row" >
              <ul style={{display:"flex",flexDirection:"column", gap:"13px"}}>
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
    </>
  );
}

export default MainFooter;

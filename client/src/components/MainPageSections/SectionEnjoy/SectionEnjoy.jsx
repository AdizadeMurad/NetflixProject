import React from "react";
import "./SectionEnjoy.scss";

function SectionEnjoy() {
  return (
    <>
      {" "}
      <div className="line-page"></div>
      <section className="enjoy-section">
        <div className="container">
          <div className="enjoy-general">
            <div className="enjoy-text">
              <p className="mainpage-head">Enjoy on your TV</p>
              <p className="mainpage-text">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div>
              <img
                className="enjoy-img"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionEnjoy;

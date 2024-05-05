import React from "react";
import "./SectionWatch.css";
function SectionWatch() {
  return (
    <>
      <div className="line-page"></div>
      <section className="watch-section">
        <div className="container">
          <div className="watch-general">
            {" "}
            <div className="watch-text">
              <p className="mainpage-head">Watch everywhere</p>
              <p className="mainpage-text">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <img
              className="watch-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionWatch;

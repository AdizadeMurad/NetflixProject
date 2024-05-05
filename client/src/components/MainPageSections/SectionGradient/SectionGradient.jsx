import React from "react";
import "./SectionGradient.scss";

function SectionGradient() {
  return (
    <>
      <section className="overlay__blog">
<div className="container">
<div className="overlay__text">
          <p className="blog__head">Unlimited movies, TV shows, and more</p>
          <p className="blog__text">Watch anywhere. Cancel anytime.</p>
          <div className="getstarted">
            <p className="blog__text">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="getstarted-email">
              <input type="text" className="getstartedInput" name="" id="" placeholder="  Email adress" />
              <button className="getstartedbtn">
                Get Started <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
</div>
      </section>
    </>
  );
}

export default SectionGradient;

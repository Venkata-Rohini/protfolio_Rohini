import React from "react";
import "./about.scss";
import SocialContact from "../../common/socialContact";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Myself Rohini,
          <br />
          <span className="name-info"> Lead developer </span>with 9+ years of
          experience in building high impact web and <br />
          mobile products for pharmaceutical and healthcare industry. hey
        </div>
        <div className="photo-info">
          <img
            alt=""
            src={require("../../../assets/images/profile.png").default}
            className="picture"
          />
        </div>
      </div>
      <div className="bottom-section">
        <SocialContact />
      </div>
    </div>
  );
}

export default About;

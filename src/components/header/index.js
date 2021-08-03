import React from "react";
import "./header.scss";
import SocialContact from "../common/socialContact/index";

function Header() {
  return (
    <div className="header">
      <div className="header-section">
        <div className="logo">
          <h4>Rohini Venkata</h4>
        </div>
        <div>
          <h6>Full Stack Lead Developer</h6>
        </div>
        <div>
          <img
            alt=""
            src={require("../../assets/images/ProfilePic.png").default}
            className="picture"
          />
        </div>
        <div className="menu">
          <div className="web">
            <div className="web-option-icon" style={{ display: "flex" }}>
              <img
                alt=""
                src={require("../../assets/icons/mail.png").default}
                style={{ height: "20px" }}
              />

              <h4 style={{ margin: "0px" }}>&nbsp;vnktrohini@gmail.com</h4>
            </div>

            <div className="web-option-icon" style={{ display: "flex" }}>
              <i class="fi-rr-smartphone option-icon"></i>
              <h4 style={{ margin: "0px" }}>9986239580</h4>
            </div>

            <div className="web-option-icon" style={{ display: "flex" }}>
              <i class="fi-rr-location-alt  option-icon"></i>
              <h4 style={{ margin: "0px" }}>Banglore</h4>
            </div>
          </div>
          <div>
            <SocialContact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

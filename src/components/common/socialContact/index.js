import React from "react";
import { SocialData } from "../../../dataContent/social";
import "./socialcontact.scss";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact">
      {data.map(item => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img alt="" src={item.icon} className="social-icon" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;

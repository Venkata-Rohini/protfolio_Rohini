import React from "react";
import "./contact.scss";
import SocialContact from "../../common/socialContact/index";
import Separator from "../../common/separator/index";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <div className="contact-container">
        <div className="contact-left">
          <h6>Want to get in touch? Contact me on any of the platform</h6>
          <SocialContact />
        </div>
        <div className="download">
          <a
            download
            href={
              require("../../../assets/venkatarohini_10Exp_TeamLead.pdf")
                .default
            }
          >
            <i class="fi-rr-cloud-download download-icon" />
            &nbsp;Download Protfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

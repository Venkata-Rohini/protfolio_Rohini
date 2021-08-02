import React, { useState } from "react";
import Web from "./web";
import Mobile from "./mobile";
import "./header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Rohini Resume</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-apps"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;

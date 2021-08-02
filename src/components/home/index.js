import React from "react";
import "./home.scss";
import Header from "../header/index";
import MainContent from "../maincontent";
import Footer from "../footer";

function index() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default index;

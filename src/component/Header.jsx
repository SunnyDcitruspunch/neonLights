import React from "react";
import { render } from "react-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="sign" id="container" style={{ justifyContent: "center", alignItems: "center" }}>
      <h1 contenteditable spellcheck="false">
        SUNNY YANG
      </h1>
    </div>
  );
};

export default Header;


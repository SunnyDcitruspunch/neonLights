import React from "react";
import "./Contact.css";

// need to re adjust css for different screen Sizzle.

const Contact = () => {
  return (
    <div id="iconcontainer">
      <span className="sign-four">
        <i className="fa fa-github" aria-hidden="true" />
      </span>
{/* 
      <h1 className="neon">
        HEAL<span className="flicker-slow">T</span>H
        <span className="flicker-fast">LI</span>NK
      </h1>
      <br />
      <h1 className="neon1">
        COOPE<span className="flicker-slow">RA</span>T
        <span className="flicker-fast">I</span>VE
      </h1> */}

      <span className="linkedin">
        <i className="fa fa-linkedin-square" aria-hidden="true" />
      </span>
    </div>
  );
};

export default Contact;

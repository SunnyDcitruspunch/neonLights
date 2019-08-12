import React from "react";
import "./Contact.css";

// need to re adjust css for different screen Sizzle.

const Contact = () => {
  return (
    <div id="iconcontainer">
      <a href="https://github.com/SunnyDcitruspunch">
        <span className="sign-four">
          <i className="fa fa-github" aria-hidden="true" />
        </span>
      </a>

      <div id="hlink">
        <h4>
          <a href="https://www.healthlinkcooperative.org/">
            HEALTHLINK
            <br />
            COOPERATIVE
          </a>
        </h4>
      </div>

      <a href="https://www.linkedin.com/in/sunny-yang-05ab11106/">
        <span className="linkedin">
          <i className="fa fa-linkedin-square" aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};

export default Contact;
import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <div id="containaboutme">
        <div className="sign">
          <i className="fa fa-heart-o heart-off" aria-hidden="true" />
          &nbsp; <span>ABOUT ME</span>
        </div>
        <br />
        <div className="smallersign">
          <p style={{ fontSize: 36 }}>
            - BRIGHAM YOUNG UNIVERSITY
            <br />
            - Information Systems
            <br />- GPA: 3.5
          </p>
        </div>
      </div>
      <br />
      <div id="containaboutme">
        <div className="sign-three">
          <div className="jackpots">
            <i className="fa fa-file-o" aria-hidden="true" />
            &nbsp; DOWNLOAD RESUME
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

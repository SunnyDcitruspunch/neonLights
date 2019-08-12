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
          <div >
            - BRIGHAM YOUNG UNIVERSITY
            <br />
            - Information Systems
            <br />- GPA: 3.5
          </div>
        </div>
      </div>
      <br />
      <div id="containaboutme">
          <div className="jackpots">
            <i className="fa fa-file-o" aria-hidden="true" />
            &nbsp; DOWNLOAD RESUME
          </div>
      </div>
    </div>
  );
};

export default AboutMe;

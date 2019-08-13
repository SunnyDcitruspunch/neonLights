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
          <div>
            - BRIGHAM YOUNG UNIVERSITY
            <br />
            - Taiwan, Taipei
            <br />
            - English / Mandarin / Taiwanese
            <br />
            - Information Systems
            <br />- GPA: 3.5
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

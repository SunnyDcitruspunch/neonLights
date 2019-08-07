import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <div id="containaboutme">
        <div className="sign">
          <i class="fa fa-heart-o heart-off" aria-hidden="true" />
          &nbsp; <text>ABOUT ME</text>
        </div>
        <br />
        <div className="smallersign">
          <text style={{ fontSize: 36 }}>
            - BRIGHAM YOUNG UNIVERSITY
            <br />
            - Information Systems
            <br />- GPA: 3.5
          </text>
        </div>
      </div>
      <br />
      <div id="containaboutme">
        <div class="sign-three">
          <div class="jackpots">DOWNLOAD RESUME</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

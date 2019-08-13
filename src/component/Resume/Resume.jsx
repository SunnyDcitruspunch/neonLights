import React from "react";
import "./Resume.css";

/* !TODO: download font */

const Resume = () => {
  return (
    <div>
      <div>
        <div className="sign3">
          <i className="fa fa-heart-o heart-off" aria-hidden="true" />
          &nbsp; <span>FIND ME</span>
        </div>
      </div>
      <div id="resumecontainer">
        <h2 className="resume">
          <i className="fa fa-envelope-o letter-2" aria-hidden="true" />
          &nbsp;
          <span className="letter letter-1">ha</span>
          <span className="letter letter-2">h</span>
          <span className="letter letter-1">asunn</span>
          <span className="letter letter-2">y</span>
          <span className="letter letter-1">97@g</span>
          <span className="letter letter-2">ma</span>
          <span className="letter letter-1">il.c</span>
          <span className="letter letter-2">o</span>
          <span className="letter letter-1">m</span>
          <br />
          <br />
          <br />
          <span onClick={console.log("download")}>
            <span className="letter letter-1">R</span>
            <span className="letter letter-2">E</span>
            <span className="letter letter-3">S</span>
            <span className="letter letter-4">U</span>
            <span className="letter letter-2">M</span>
            <span className="letter letter-4">E</span>
          </span>
          &nbsp;
          <span>
            <i className="fa fa-cloud-download letter-2" aria-hidden="true" />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Resume;

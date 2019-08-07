import React from "react";
import "./Contact.css";

// need to re adjust css for different screen Sizzle.

const Contact = () => {
  return (
    <div>
      <a href="https://www.linkedin.com/in/sunny-yang-05ab11106/">
        <h2 className="linkedin" data-text="U">
          LIN<span class="flicker-slow">K</span>E
          <span class="flicker-fast">D</span>IN
        </h2>
      </a>
      <a href="https://github.com/SunnyDcitruspunch?tab=repositories">
        <h2 className="github" data-text="U">
          Gi<span class="flicker-slow">t</span>h
          <span class="flicker-fast">u</span>b
        </h2>
      </a>
    </div>
  );
};

export default Contact;

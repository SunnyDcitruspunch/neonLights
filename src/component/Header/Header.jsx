import * as React from "react";
import "./Header.css";

export default class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  render() {
    return (
      <div>
        <div id="container">
          <header id="js-header">
            <br />
            <h1 id="logo">SUNNY YANG</h1>
          </header>
        </div>
      </div>
    );
  }
}

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
        <header id="js-header">
          <div id="container">
            <h1>SUNNY YANG</h1>
          </div>
        </header>
      </div>
    );
  }
}

// const Header = () => {
//   return (
//     <div id="container">
//       <h1 spellCheck="false">
//         SUNNY YANG
//       </h1>
//     </div>
//   );
// };

import React, { Component } from "react";

import SvgAbout from "../svgCode/NavIcons/SvgAbout";
import SvgContact from "../svgCode/NavIcons/SvgContact";
import SvgHome from "../svgCode/NavIcons/SvgHome";
import SvgProject from "../svgCode/NavIcons/SvgProject";
import SvgServices from "../svgCode/NavIcons/SvgServices";


/*=================================================== 
  Cuando el usuario scrollea abajo, oculta el navbar.
  Cuando el usuario scrollea arriba, muestra el navbar
  ===================================================*/
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mainNav").style.top = "0";
  } else {
    document.getElementById("mainNav").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}


class Navigation extends Component {
    render() {
        return (
          <nav className="mainNav" id="mainNav">
            
            <a href="#" className="logo">
              LOGO
            </a>

            <ul className="allLinks">
              <li className="item">
                <a href="#1" className="link">
                  <SvgHome />
                  <span className="linkText">{this.props.nameItem1}</span>
                </a>
              </li>
              <li className="item">
                <a href="#2" className="link">
                  <SvgProject />
                  <span className="linkText">{this.props.nameItem2}</span>
                </a>
              </li>
              <li className="item">
                <a href="#3" className="link">
                  <SvgServices />
                  <span className="linkText">{this.props.nameItem3}</span>
                </a>
              </li>
              <li className="item">
                <a href="#4" className="link">
                  <SvgAbout />
                  <span className="linkText">{this.props.nameItem4}</span>
                </a>
              </li>
              <li className="item">
                <a href="#5" className="link">
                  <SvgContact />
                  <span className="linkText">{this.props.nameItem5}</span>
                </a>
              </li>
            </ul>

          </nav>
        );
    }
}

export default Navigation;
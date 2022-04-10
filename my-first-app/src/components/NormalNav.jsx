import React from "react";

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


function NormalNav() {
        return (
          <nav className="mainNav" id="mainNav">
            
            <a href="#" className="logo">
              MM
            </a>

            <ul className="allLinks">
              <li className="item">
                <a href="#home" className="link">
                  <SvgHome />
                  <span className="linkText">Home</span>
                </a>
              </li>
              <li className="item">
                <a href="#projects" className="link">
                  <SvgProject />
                  <span className="linkText">Projects</span>
                </a>
              </li>
              <li className="item">
                <a href="#services" className="link">
                  <SvgServices />
                  <span className="linkText">Services</span>
                </a>
              </li>
              <li className="item">
                <a href="#about" className="link">
                  <SvgAbout />
                  <span className="linkText">About</span>
                </a>
              </li>
              <li className="item">
                <a href="#contact" className="link">
                  <SvgContact />
                  <span className="linkText">Contact</span>
                </a>
              </li>
            </ul>

          </nav>
        );
}

export default NormalNav;
import React, { Component } from "react";

import SvgAbout from "../svgCode/NavIcons/SvgAbout";
import SvgContact from "../svgCode/NavIcons/SvgContact";
import SvgHome from "../svgCode/NavIcons/SvgHome";
import SvgProject from "../svgCode/NavIcons/SvgProject";
import SvgServices from "../svgCode/NavIcons/SvgServices";

class Navigation extends Component {
    render() {
        return (
          <nav className="mainNav">
            
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
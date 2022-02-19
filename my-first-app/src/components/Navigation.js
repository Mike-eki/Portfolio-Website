import { render } from "@testing-library/react";
import React, { Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <nav className="myNav">

             <a href="#" className="homeLink">
             Soy un Nav.
             </a>

             <ul className="itemsLinks">
                <li>
                 <a className="item"> { this.props.nameItem }  </a>
                </li>
             </ul>

            </nav>
        )
    }
}

export default Navigation;
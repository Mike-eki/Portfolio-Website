import React, { Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <nav className="mainNav">

             <a href="#" className="logo">
             HOME
             </a>

             <ul className="allLinks">
                <li className="item">
                 <a href="#" className="link"> { this.props.nameItem1 }  </a>
                </li>
                <li className="item">
                 <a href="#" className="link"> { this.props.nameItem2 }  </a>
                </li>
                <li className="item">
                 <a href="#" className="link"> { this.props.nameItem3 }  </a>
                </li>
                <li className="item">
                 <a href="#" className="link"> { this.props.nameItem4 }  </a>
                </li>
             </ul>

            </nav>
        )
    }
}

export default Navigation;
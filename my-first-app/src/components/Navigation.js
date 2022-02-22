import React, { Component } from "react";

class Navigation extends Component {
    render() {
        return (
            <nav className="myNav">

             <a href="#" className="homeLink">
             HOME
             </a>

             <ul className="itemsLinks">
                <li className="item">
                 <a href="#" className="itemRef"> { this.props.nameItem1 }  </a>
                </li>
                <li className="item">
                 <a href="#" className="itemRef"> { this.props.nameItem2 }  </a>
                </li>
                <li className="item">
                 <a href="#" className="itemRef"> { this.props.nameItem3 }  </a>
                </li>
                <li className="item">
                 <a href="#" className="itemRef"> { this.props.nameItem4 }  </a>
                </li>
             </ul>

            </nav>
        )
    }
}

export default Navigation;
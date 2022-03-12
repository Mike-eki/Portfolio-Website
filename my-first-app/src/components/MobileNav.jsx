import React, {useState} from "react";

import SvgHome from "../svgCode/NavIcons/SvgHome";
import SvgProject from "../svgCode/NavIcons/SvgProject";
import SvgServices from "../svgCode/NavIcons/SvgServices";
import SvgAbout from "../svgCode/NavIcons/SvgAbout";
import SvgContact from "../svgCode/NavIcons/SvgContact";

const menuContainer = document.getElementsByClassName('menuContainer');
const menuIcon = document.getElementsByClassName('menuIcon');

// anEvent.target.closest('.menuContainer')

document.addEventListener('click', function(anEvent) {
  if ( anEvent.target.className === 'menuContainer' 
      || anEvent.target.className === 'menuIcon' ){
    menuContainer[0].classList.add('active');
    menuIcon[0].classList.add('active');
  }
  
  else if ( anEvent.target.className === 'menuContainer active' 
          || anEvent.target.className === 'menuIcon active' ) {
    menuContainer[0].classList.remove('active');
    menuIcon[0].classList.remove('active');
  }
  else {
    menuContainer[0].classList.remove('active');
    menuIcon[0].classList.remove('active');
  }
})
function MobileNav () {
  
  // =================================
  // Solve this please Mike... TwT
  // =================================

  // const [isActive, setIsActive] = useState(false);
  // const [activation, setActivation] = useState(' active');
  
  // const setClassName = () => {
  //   setIsActive(isActive => {
  //     if (isActive) {
  //       isActive = false;
  //     }
  //     else {
  //       isActive = true;
  //     }
  //     console.log(isActive);
  //   })
    
  //   settingActive();
  // }
  // function settingActive () {
  //   setActivation(activation => {
  //     if (isActive) {
  //       activation = ' active';
  //     }
  //     else {
  //       activation = '';
  //     }
  //     console.log(activation);
  //   })
  // }

  // Esto de aqui funciona barbaro, pero solo falta que se cierre con un click en la cruz

  
  

    return (
      <nav className="navMobile">
            <ul className="allLinksMob">
              <div /*onClick={setClassName}*/ className={'menuContainer'/*+`${activation}`*/}> 
                <div className="menuIcon"></div>
              </div>
              <li className="itemMob">
                <a href="#1" className="linkMob">
                  <SvgHome />
                </a>
              </li>
              <li className="itemMob">
                <a href="#2" className="linkMob">
                  <SvgProject />
                </a>
              </li>
              <li className="itemMob">
                <a href="#3" className="linkMob">
                  <SvgServices />
                </a>
              </li>
              <li className="itemMob">
                <a href="#4" className="linkMob">
                  <SvgAbout />
                </a>
              </li>
              <li className="itemMob">
                <a href="#5" className="linkMob">
                  <SvgContact />
                </a>
              </li>
            </ul>

          </nav>
    );
}

export default MobileNav;
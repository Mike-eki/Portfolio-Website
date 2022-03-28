import React, {useRef, useEffect} from "react";

import SvgHome from "../svgCode/NavIcons/SvgHome";
import SvgProject from "../svgCode/NavIcons/SvgProject";
import SvgServices from "../svgCode/NavIcons/SvgServices";
import SvgAbout from "../svgCode/NavIcons/SvgAbout";
import SvgContact from "../svgCode/NavIcons/SvgContact";


/*
const menuContainer = document.getElementsByClassName('menuContainer');
const menuIcon = document.getElementsByClassName('menuIcon');

//==================================================================
// Esto hace le pone funcionalidad al icono del menu que se cierre
// cuando el usuario clickie fuera como dentro del menu
//==================================================================
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

*/


function MobileNav () {
  
  const menuContainer = useRef();
  const menuIcon = useRef();

  useEffect( () => {
    
    window.addEventListener('click', (event) => {
      if 
      (event.target.className === 'menuContainer') 
      {
        menuContainer.current.classList.add('active');
        menuIcon.current.classList.add('active');
      }
      else if 
      (event.target.className === 'menuContainer active')
      {
        menuContainer.current.classList.remove('active');
        menuIcon.current.classList.remove('active');
      }
      else 
      {
        menuContainer.current.classList.remove('active');
        menuIcon.current.classList.remove('active');
      }
    });
  }, []);

    return (
      <nav className="navMobile">
            <ul className="allLinksMob">
              <div className='menuContainer' ref={menuContainer}> 
                <div className="menuIcon" ref={menuIcon}></div>
              </div>
              <li className="itemMob">
                <a href="#home" className="linkMob">
                  <SvgHome />
                </a>
              </li>
              <li className="itemMob">
                <a href="#projects" className="linkMob">
                  <SvgProject />
                </a>
              </li>
              <li className="itemMob">
                <a href="#services" className="linkMob">
                  <SvgServices />
                </a>
              </li>
              <li className="itemMob">
                <a href="#about" className="linkMob">
                  <SvgAbout />
                </a>
              </li>
              <li className="itemMob">
                <a href="#contact" className="linkMob">
                  <SvgContact />
                </a>
              </li>
            </ul>

          </nav>
    );
}

export default MobileNav;
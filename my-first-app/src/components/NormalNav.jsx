import { useEffect } from "react";
import NavLinks from "../UIcomponents/NavLinks";

function NormalNav() {

/*
  =================================================== 
  Cuando el usuario scrollea abajo, oculta el navbar.
  Cuando el usuario scrollea arriba, muestra el navbar
  ===================================================
*/
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainNav").style.top = "0";
      } else {
        document.getElementById("mainNav").style.top = "-12vh";
      }
      prevScrollpos = currentScrollPos;
    };
  }, [])

        return (
          <nav className="mainNav" id="mainNav">
            <a href="#" className="logo">
              M
            </a>
            <NavLinks />
          </nav>
        );
}

export default NormalNav;
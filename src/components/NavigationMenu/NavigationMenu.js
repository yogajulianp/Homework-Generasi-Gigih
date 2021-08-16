import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css"
import * as ROUTES from "../../constants/routes";

const NavigationMenu = ()=> {
    return (
      <header className="NavigationMenu">
      <nav>
        <ul className="link">
            <Link to={ROUTES.HOME}> 
                <li>Home</li> 
            </Link>
            <Link to={ROUTES.SIGN_UP}> 
                <li>SignUp</li> 
            </Link>
            <Link to={ROUTES.LOGIN}> 
                <li>login</li> 
            </Link>

        </ul>
      </nav>
    </header>
    );
  };

export default NavigationMenu;
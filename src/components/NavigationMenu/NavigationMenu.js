import React from "react";
import { Link } from "react-router-dom";
import "./NavigationMenu.css"
import * as ROUTES from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";

const NavigationMenu = ()=> {
    const auth = useAuth();
    return (
      <header className="NavigationMenu">
      <nav>
        <ul className="link">
            <Link to={ROUTES.HOME}> 
                <li>Home</li> 
            </Link>
            {auth.user ? (
              <> 
               <Link to={ROUTES.Play_Menu}> 
                <li>Play Menu</li> 
            </Link>
            <li onClick = { () => auth.signout()}>Sign Out</li>
              </> 
            ) : (
            <>  
          
              <Link to={ROUTES.SIGN_UP}> 
                <li>SignUp</li> 
              </Link>
              <Link to={ROUTES.LOGIN}> 
                <li>login</li> 
              </Link> {" "}
            </>
            
            )}
           

        </ul>
      </nav>
    </header>
    );
  };

export default NavigationMenu;
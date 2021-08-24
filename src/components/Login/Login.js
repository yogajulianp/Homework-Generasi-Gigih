import React, {useState} from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import {Play_Menu} from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";

const Login = ()=> {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue , setPasswordValue  ] = useState("");
    const auth =useAuth();
    let history = useHistory();

    return (
        <div className="container">
            <form 
        
                onSubmit={(event)=> {
                    event.preventDefault();
                    auth.signin( {
                        email : emailValue,
                        password: passwordValue,
                        callback: () => history.push(Play_Menu),
                    })
                }}
            >
                
                <label>What is Your Email</label>
                <input  
                type="email"
                placeholder="Email"  
                value={emailValue}  
                onChange={(event) => setEmailValue(event.target.value)}
                />

                <label>What is your Password</label>
                <input type="password" 
                placeholder="Password"
                value={passwordValue}  
                onChange={(event) => setPasswordValue(event.target.value)}
                />

                
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
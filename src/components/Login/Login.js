import React, {useState} from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
//import {WEB_APP} from "../../constants/routes";

const Login = ()=> {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue , setPasswordValue  ] = useState("");
    //cont auth =useAuth();

    return (
        <div className="container">
            <form 
                onSubmit={(event)=> {
                    event.preventDefault();
                  //  firebase
                   //     .auth()
                   //     .createUserWithEmailAndPassword(email, password)
                   //     .then(() => alert('sign up!'))
                  //      .catch((error)=> alert(error.message));
                        
                 //  alert(email + " " + password)
                  //  setEmail("");
                  //  setPassword("");
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



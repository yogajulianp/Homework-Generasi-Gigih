import React, {useState} from "react";
//import { FirebaseContext } from "../../context/FirebaseContext";
import {useAuth} from "../../context/AuthContext";
import "./SignUp.css";

const SignUp = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const { firebase } = useContext(FirebaseContext);
    //const context = useContext(contextValue)
    const auth = useAuth();

    return (
        <div className="container">
            <form 
                onSubmit={(event)=> {
                    event.preventDefault();
                    auth.signup({email, password, callback: ()=> {} })
                   /* firebase
                    //    .auth().createUserWithEmailAndPassword(email, password) .then(() => alert('sign up!')).catch((error)=> alert(error.message));   */
                    alert(email + " " + password)
                    setEmail("");
                    setPassword("");
                }}
            >
                <label>Email</label>
                <input  
                type="email"
                placeholder="Email"  
                value={email}  
                onChange={(event) => setEmail(event.target.value)}/>

                <label>Password</label>
                <input type="password" 
                placeholder="Password"
                value={password}  
                onChange={(event) => setPassword(event.target.value)}
                ></input>

                
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;
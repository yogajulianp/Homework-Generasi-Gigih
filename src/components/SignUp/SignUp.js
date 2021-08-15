import React, {useState} from "react";
import "./SignUp.css";

const SignUp = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="container">
            <form 
                onSubmit={(event)=> {
                    event.preventDefault();
                    alert(email + " " + password)
                }}
            >
                
                <label>Email</label>
                <input  
                type="email"  
                value={email}  
                onChange={(event) => setEmail(event.target.value)}/>

                <label>Password</label>
                <input type="password" 
                value={password}  
                onChange={(event) => setPassword(event.target.value)}
                ></input>

                
                <button type="submit">SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;
import React,{useContext, useState} from "react";
import UserContext from "../context/UserContext";


function Login() {

    const[username, setUsername]= useState('');
    const[password, setPassword]= useState('');

    const {setUser} = useContext(UserContext)

    const handleClick=(e) =>{
        e.preventDefault();
        setUser({username,password})
    }

    return(
        <>
            <input 
                type="text" 
                placeholder="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />

            <button
                onClick={handleClick}
            >
                Submit
            </button>
        </>
        
    )
}

export default Login;
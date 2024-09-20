import { useState } from "react";
import { LOGO_URL } from "../utils/const";
import { Link } from "react-router-dom";

const Header= () =>{

    const[btnName, setBtnName]= useState("Login") //const still getting updated as after calling it render whole header so this time, btnName accepts the new instance 

    return(
        <div className='flex justify-between'>
            <div className='appLogo'>
                <img className="w-28" src={LOGO_URL}/>
            </div>
            <div >
                <ul className="flex gap-5 pt-8 mx-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>

                    <button className="cursor-pointer" onClick={()=>{
                        if(btnName==="Login"){
                            setBtnName="Logout"
                        }else{
                            setBtnName="Login "
                        } 
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
import { LOGO_URL } from "../utils/const";

const Header= () =>{
    return(
        <div className='headingPart'>
            <div className='appLogo'>
                <img src={LOGO_URL}/>
            </div>
            <div className='navItems'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
import React from 'react';
import './navbar.css';
import logo from "../../assets/logo.png";
import img from "../../assets/myphoto.png"
import {Link} from 'react-scroll';


const Navbar = () => {
    return (
        <nav className="navbar">
            
            <img src={logo} alt="logo" className='logo'/>

            <div className="desktopmenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>

            </div>

            <button className="desktopbutton" >

                <img src="" alt="" className="desktopmenuimg" />Contact me
            </button>
            
        </nav>
        
    )
}
export default Navbar;
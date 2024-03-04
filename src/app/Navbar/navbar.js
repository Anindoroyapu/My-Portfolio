import React, { useState } from 'react';
import './navbar.css';
import logo from "../../assets/logo.png";
import img from "../../assets/myphoto.png"
import {Link} from 'react-scroll';
import menu from "../../assets/menu.png";
import Intro from "../Intro/intro";
import Skills from "../Skills/skills";
import Works from "../Works/work";
import Contact from "../Contact/contact";


const Navbar = () => {
    const [showMenu, setShowMenu]= useState(false);
    return (
        <nav className="navbar">
            
            <img src={logo} alt="logo" className='logo'/>

            <div className="desktopmenu">
                
                <a href="/Intro" className="desktopMenuListItem">Home</a>
                <a href="/Skills" className="desktopMenuListItem">About</a>
                <a href="/Contact" className="desktopMenuListItem">Clients</a>
                <a href="/Works" className="desktopMenuListItem">Portfolio</a>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">
            <button className="desktopbutton" >
                <a href="/Contact" className="desktopmenuimg">Contact me</a>
            </button>
            
            </Link>
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu((cuData)=>{
                return !cuData
            })}/>

            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact us</Link>

            </div>
            
        </nav>
        
    )
}
export default Navbar;
import React, { useState } from 'react';
import logo from "../assets/logo.png";
import img from "../assets/myphoto.png"
import {Link} from 'react-scroll';
import menu from "../assets/menu.png"
import { Outlet } from 'react-router-dom';


const Layout = () => {
    const [showMenu, setShowMenu]= useState(false);
    return (
        <>
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>

            <div className="desktopmenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Clients</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
            </div>
            <button className="desktopbutton" activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}>

                <img src="" alt="" className="desktopmenuimg" />Contact me
            </button>
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>

            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link  activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact us</Link>

            </div>
        </nav>
        <Outlet />
        </>
        
    )
}
export default Layout;
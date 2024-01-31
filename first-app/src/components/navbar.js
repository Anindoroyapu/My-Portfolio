import React from 'react';
import logo from"../assets/logo.png";
import img from"../assets/myphoto.png";


const Navbar = () => {
    return (
        <nav className="navbar">
            
            <img src={logo} alt="logo" className='logo'/>

            <div className="desktopmenu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Clients</a>
                <a href="#">Portfolio</a>

            </div>

            <button className="desktopbutton">

                <img src="" alt="" className="desktopmenuimg" />Contact me
            </button>
            <div className="section">
                <div className="container">
                    <img src="../assets/myphoto.png" alt="" />
                    <div className="container-header">Hi There,</div>
                    
                </div>
            </div>

        </nav>
    )
}
export default Navbar;
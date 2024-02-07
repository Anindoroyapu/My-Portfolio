import React from "react";
import './intro.css';
import bg from '../../assets/background.png';
import btnImg from '../../assets/bgbtn.png';
import {Link} from 'react-scroll';


const Intro = ()=>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,,</span>
                <span className="introText">I'm <span className="introName">Anindo</span><br />Web Devoloper</span>
                <p className="introPara">I am a Skilled web devoloper with esperience in creating visually <br /> appealing and user friendly website.</p> 
                <Link><button className="btn" value='send'>Hire me</button></Link>

            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )

}
export default Intro;
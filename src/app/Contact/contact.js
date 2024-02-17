import React, { useRef } from 'react';
import './contact.css'
import facebookicon from '../../assets/facebook.png';
import instraicon from '../../assets/instra.png';
import linkedinicon from '../../assets/linkedin.png';
import {Link} from 'react-scroll';
import emailjs from '@emailjs/browser';

const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_dyzrdpj', 'template_ucfx14c', form.current, {
            publicKey: '1lJVFMrWc8rgBdoF3oO6m',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <section id="contactPage">
            <div id='clients'>
                <h1 className='contactPageTitle'>My Clients</h1>
                <p className="clientsDesc">I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes</p>
            </div>
           <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the from below to discuss any work opportunities.</span>

            <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="user_name" />
                <input type="email" className="email" placeholder='Your Email' name="user_email"/>
                <textarea className='msg' name="message"  rows="5" placeholder='Text Your Message'></textarea>
                <br />
                <button type='submit' value='send'
                onClick={(e)=>e.preventDefault()}
                 className="submitBtn">Submit</button>
                 <div className="links">
                    <img src={facebookicon} alt="facebook" className="link" />
                    <img src={instraicon} alt="instra" className="link" />
                    <img src={linkedinicon} alt="linkedin" className="link" />
                 </div>


            </form>

           </div>
           <div className="footer">
           <div className="desktopmenu">
                <Link className="desktopMenuListItem"><a href="#">Home</a></Link>
                <Link className="desktopMenuListItem"><a href="#">About</a></Link>
                <Link className="desktopMenuListItem"><a href="#">Clients</a></Link>
                <Link className="desktopMenuListItem"><a href="#">Portfolio</a></Link>

            </div>
            <p className="footer">copywrite @2024 Anindo. All right reserved</p>
           </div>
        </section>


    );
}

export default Contact;
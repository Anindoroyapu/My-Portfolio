import React, { useRef } from 'react';
import './contact.css'
import facebookicon from '../../assets/facebook.png';
import instraicon from '../../assets/instra.png';
import linkedinicon from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';


const Contact=()=>{
    const form = useRef();
    const clearForm =()=>{
        form.current.reset();
      };
    
    const sendEmail = (e) => {
        e.preventDefault();
        
         alert(' Form Submitted');

        emailjs
          .sendForm('service_3x1x6nu', 'template_ucfx14c', form.current, {
            publicKey: 'WScDiKIp5jDk31IgB',
          })
          .then((result) => {
              console.log(result.text);
              
            })
          .catch((error) => {
                console.log(error.text);
            })
        clearForm();

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

            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="user_name" />
                <input type="email" className="email" placeholder='Your Email' name="user_email"/>
                <textarea className='msg' name="message"  rows="5" placeholder='Text Your Message' ></textarea>
                <br />
                <button type='c' value='send'
                 className="submitBtn" >Submit</button>
                 <div className="links">
                    <img src={facebookicon} alt="facebook" className="link" />
                    <img src={instraicon} alt="instra" className="link" />
                    <img src={linkedinicon} alt="linkedin" className="link" />
                 </div>


            </form>

           </div>
           <div className="footer">

            <p className="footer">copywrite @2024 Anindo. All right reserved</p>
           </div>
        </section>


    );
}

export default Contact;
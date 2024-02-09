import './skills.css';
import React from 'react';

import UIDesign from '../../assets/uidesign.png';
import Oracle from '../../assets/oracle.png';
import PGadmin from '../../assets/pgadmin.png'



const Skills = ()=>{
    return(
        <section className="skills">
            <span className="skillTitle">
                What I do
            </span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly website.I have a strong understanding of design and a keen eye for details.I am proficient in HTMl, css and Javasript, as design software such as Adobe Photoshop and Illastator.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        <p>I can provide clean and perfect design.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Oracle} alt="Oracle" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database Manegement</h2>
                        <p>I can provide clean and perfect design.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={PGadmin} alt="PGadmin" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database Manegement</h2>
                        <p>I can provide clean and perfect design.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Skills;
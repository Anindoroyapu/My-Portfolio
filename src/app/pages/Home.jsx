import React from "react";
import Intro from "../Intro/intro";
import Skills from "../Skills/skills";
import Works from "../Works/work";
import Contact from "../Contact/contact";

const Home = ()=>{
    return(
         <div className="App">
            <Intro />
            <Skills />
            <Works />
            <Contact />
            
        </div>
    )
}
export default Home;

import "./App.css"
import Contact from "./app/Contact/contact";
import Intro from "./app/Intro/intro";
import Navbar from "./app/Navbar/navbar";
import Skills from "./app/Skills/skills";
import Works from "./app/Works/work";
import Footer from "./app/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Intro />
      <Skills />
      <Works />
      <Contact/>
      <footer />
      

    </div>
  );
}

export default App;

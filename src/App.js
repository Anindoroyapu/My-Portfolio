import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./app/pages/Home";
import Hire from "./app/Intro/Hire/hire";
import Intro from "./app/Intro/intro";
import Navbar from "./app/Navbar/navbar";
import Skills from "./app/Skills/skills";
import Contact from "./app/Contact/contact";
import Works from "./app/Works/work";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Hire" element={<Hire />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

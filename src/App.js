import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./app/pages/Home";
import Layout from "./app/Layout";
import Hire from "./app/Intro/Hire/hire";
import Navbar from "./app/Navbar/navbar"
import Intro from "./app/Intro/intro";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route index element={<Home />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/Intro" element={<Intro />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/Hire" element={<Hire />} />

                 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

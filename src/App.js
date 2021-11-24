import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/HomeCom/Home";
import Contact from "./Components/ContactCom/Contact";
import News from "./Components/NewsCom/News";
import About from "./Components/AboutCom/About";
import Policy from "./Components/PolicyCom/Policy";
import Navbar from "./Components/NavbarCom/Navbar";
import NotFound from "./Components/404/NotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/policy" element={<Policy/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/notFound" element={<NotFound/>}/>

    </Routes>

  <Footer/>

    </div>
  );
}

export default App;

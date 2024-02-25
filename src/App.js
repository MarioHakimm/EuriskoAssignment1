import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import ContactUs from "./Components/ContactUs/ContactUs";
import Page404 from "./Components/Page404/Page404";
import Header from "./Components/Homepage/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

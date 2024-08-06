// App.js
import React from "react";
import Navbar from "./components/Navbar/navbar"; // Adjust path as needed
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css"; // Import your custom styles if needed
import Home from "./components/Home/home.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer/footer.js";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import About from "./components/About/about-us.js";
import Contact from "./components/Contact/contact.js";
import Program from "./components/Ourprogram/program.js";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/our-programs" element={<Program/>} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

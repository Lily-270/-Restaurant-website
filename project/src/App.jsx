import React from 'react';
import './App.css';
import Header from "./Header.jsx";
import HeroSection from "./HeroSection.jsx";
import Specials from "./Specials.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

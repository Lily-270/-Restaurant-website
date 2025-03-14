import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav.js';
import Header from './Heading.js';
import Specials from './Specials.js';
import Ratings from './Ratings.js';
import About from './About.js';
import Footer from './Footer.js';
import Booking from './Booking.js';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Specials />
              <Ratings />
              <About />
              <Footer />
            </>
          } />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

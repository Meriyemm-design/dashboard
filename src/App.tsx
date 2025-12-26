import React from 'react';
import './App.css'
import './Styles/styles.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home';


function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact-us" element={<Contact />} /> */}
        </Routes>

       
      </BrowserRouter>
      
    </>
  );
}

export default App;

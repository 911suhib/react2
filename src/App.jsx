import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./Header";
import MainPage from "./MainPage";
import Features from './Features';
import Support from './Support';
import Enterprise from './Enterprise'
function App() {
  return (
    <Router>
      {/* الي مابتتغير برا */}
      <Header />
      <Routes>
        {/* الي بتغير جوا */}
        <Route index element={<MainPage/>}/>
        <Route path="features" element={<Features/>}/>
        <Route path="Support" element={<Support/>}/>
        <Route path="Enterprise" element={<Enterprise/>}/>
      </Routes>
    </Router>
  );
}

export default App;

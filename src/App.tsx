import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Sobre from './pages/sobre/Sobre';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />


        <div style={{ minHeight: '100vh' }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre/>}/>

          </Routes>
        </div>

        <Footer />

      </Router>




    </>
  );
}

export default App;

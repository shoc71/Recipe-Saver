import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Header from "./components/Footer";

function grocery() {
    return (
        <div className="main-container">
          <div className="container">
            <div className="p-5 mb-4 bg-light">
            <div>
      <Navbar />
      <Header />
      <Section />
      <Footer />
    </div>
    
    <h1>My cart</h1>
<div class = "container">
    <div class = "row">
              <h2 className="col order-first">Item image</h2>
              <h2 className="col order-second">Item</h2>
              <h2 className="col order-third">Price</h2>              
              <h2 className="col order-forth">Quantity</h2>
              <h2 className="col order-fifth">Store</h2>
              <h2 className="col order-sixth">Delete</h2>
            </div>
        </div>
            </div>
          </div>
        </div>
      );
    }

export default grocery
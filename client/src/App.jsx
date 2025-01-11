import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom'; // Outlet renders child routes

// Import your components
import Header from './components/Header';
import Section from './components/Section';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <Outlet /> {/* Child routes will render here */}
      <Footer />
    </>
  );
}

export default App;

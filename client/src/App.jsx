import { useState } from 'react';
import './App.css';

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
      <Section />
      <Footer />
    </>
  );
}

export default App;

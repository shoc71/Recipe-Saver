import './App.css';
import { Outlet } from 'react-router-dom'; // Outlet renders child routes
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

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

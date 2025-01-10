import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const styles = {
  navbarStyle: {
    background: 'tan',
    justifyContent: 'flex-end',
    display: 'flex', 
    gap: '1rem', 
    padding: '0.5rem', 
  },
};


function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      {/* Use Link for internal navigation */}
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;

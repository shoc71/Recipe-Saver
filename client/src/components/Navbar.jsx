import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const styles = {
  navbarStyle: {
    background: 'tan',
    justifyContent: 'flex-end',
    display: 'flex',  
    padding: '.95 rem', 
    marginTop: '0px',
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

import '../styles/Navbar.css';


const styles = {
  navbarStyle: {
    background: 'tan',
    justifyContent: 'flex-end',
  },
};


function Navbar() {
  return (
    <nav style={styles.navbarStyle} className="navbar">
        <a href="../App.jsx" target="_blank">Home</a>
        <a href="./recipes.jsx" target="_blank">Recipes</a>
        <a href="./login.jsx" target="_blank">Login</a>
    </nav>
  );
}

export default Navbar;

import '../styles/Header.css';

const styles = {
  headerStyle:
  {
    background: 'tan',
    fontSize: '50px',
    background: 'tan',  
    margin: 0,
    padding:0,
    
  }, 
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Recipe-Saver</h1>
    </header>
  );
}

export default Header;

import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'tan',
  },
  headingStyle: {
    fontSize: '100px',
  },
};


function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Recipe-Saver</h1>
        <div className="d-flex justify-content-between align-items-center">
            <h1 className="">Recipe Saver</h1>
        </div>
    </header>
  );
}

export default Header;

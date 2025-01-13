import '../styles/Header.css'; // Keep your custom styles if needed

function Header() {
  return (
    <header className="py-4" style={{ backgroundColor: 'tan' }}>
      <div className="container text-center">
        <h1 className="display-4 text-white">Recipe-Saver</h1>
      </div>
    </header>
  );
}

export default Header;

import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: 'tan',
  },
  footerStyle: {
    fontSize: '100px',
  },
};


function footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.footerStyle}>Recipe-Saver</h1>
      <div className="row">
            <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                <img src="./assets/images/logospinnerrescaled.png" alt="Logo" class="img-fluid mb-2"/>
                <p className="small"><b>© 2024 Ctrl Alt Elite. All rights reserved.</b></p>
            </div>
    
            <div className="col-md-3 text-center text-md-left mb-3 mb-md-0">
                <h5><b>Contact Us</b></h5>
                <ul className="list-unstyled">
                    <li>Email: <a href="mailto:info@company.com" class="text-white">info@company.com</a></li>
                    <li>Phone: <a href="tel:+1234567890" class="text-white">+1 234 567 890</a></li>
                    <li>Address: 123 Street, City, Country</li>
                </ul>
            </div>
    
            
            <div className="col-md-3 text-center text-md-left">
                <h5><b>Follow Us</b></h5>
                <a href="https://www.facebook.com/zuck/" class="text-white" target="_blank">Facebook</a> | 
                <a href="https://x.com/elonmusk" class="text-white" target="_blank">Twitter</a> | 
                <a href="https://www.instagram.com/zuck/" class="text-white" target="_blank">Instagram</a>
            </div>
            <div className="col-md-3 text-center text-md-left">
                <h5><b>Development Team</b></h5>
                <ul class="list-unstyled">
                    <li>Rosemarie Lupi: <a href="https://github.com/RML-png">RML-png</a></li>
                    <li>Mickey Darty: <a href="https://github.com/TilesTwenty">TilesTwenty</a></li>
                    <li>Courtney Ponder: <a href="https://github.com/CourtneyPonder">CourtneyPonder</a></li>
                    <li>Rosser Williams: <a href="https://github.com/rosserw">rosserw</a></li>
                    <li>Sonu Singh: <a href="https://github.com/shoc71">shoc71</a></li>
                </ul>
            </div>

        </div>
    </footer>
  );
}

export default Footer;
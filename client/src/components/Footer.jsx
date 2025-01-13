import react from 'react';
import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: 'tan',
  },
  footerStyle: {
    fontSize: '5px',
  },
};


function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <hr className = "footer-seperator" />
      <div className="row">

            <div className="LEFT">
                <img src="../assets/icons/main.png" alt="Logo" class="img-fluid mb-2"/>
                <p className="small"><b>© 2024 Ctrl Alt Elite. All rights reserved.</b></p>
            </div>
    
            <div className="CENTER col-md-3 text-center text-md-left">
                <h5><b>Contact Us</b></h5>
                <ul className="centerList list-unstyled">
                    <ul>Email: <a href="mailto:info@company.com" class="text-white">info@company.com</a></ul>
                    <ul>Phone: <a href="tel:+1234567890" class="text-white">+1 234 567 890</a></ul>
                    <ul>Address: 123 Street, City, Country</ul>
                </ul>
            </div>
    
            
            <div className="CENTER col-md-3 text-center text-md-left">
                <h5><b>Follow Us</b></h5>
                <a href="https://www.facebook.com/zuck/" class="text-white" target="_blank">Facebook</a> | 
                <a href="https://x.com/elonmusk" class="text-white" target="_blank">Twitter</a> | 
                <a href="https://www.instagram.com/zuck/" class="text-white" target="_blank">Instagram</a>
            </div>
            <div className="RIGHT">
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
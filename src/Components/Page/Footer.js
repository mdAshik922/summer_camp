import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div>
            <footer className="footer-distributed">
 
 <div className="footer-left">
 
 <h3>Summrer<span>Camp</span></h3>
 
 <p className="footer-links">
 <Link to="/home">Home</Link>
 <br/>
 <Link to="/about">About</Link>
 <br/>
 <Link to="/team">Team</Link>
 <br/>
 <Link to="/schedule">Schedule</Link>
 <br/>
 <Link to="/gallery">Gallery</Link>
 <br/>
 <Link to="/contact">Contact</Link>
 </p>
 

 </div>
 
 <div className="footer-center">
 
 <div>
 <i className="fa fa-map-marker"></i>
 <p><span>zip code 1703</span>  Gazipur, Dhaka</p>
 </div>
 
 <div>
 <i className="fas fa-phone-alt"></i>
 <p>+1 555 123456</p>
 </div>
 
 <div>
 <i className="fa fa-envelope"></i>
 <p><Link to="/contact">contLinkct@summercamp.com</Link></p>
 </div>
 
 </div>
 
 <div className="footer-right">
 
 <p className="footer-company-about">
 <span>Summer camps are very enjoyable,</span>
  That is why those who are
  interested can easily enjoy this joy &amp; Summer camp for those interested.
 </p>
 
 <div className="footer-icons">
 
 <Link to="#"><i className="fa fa-facebook"></i></Link>
 <Link to="#"><i className="fa fa-twitter"></i></Link>
 <Link to="#"><i className="fa fa-linkedin"></i></Link>
 <Link to="#"><i className="fa fa-github"></i></Link>
 
 </div>
 

 </div>
 <p style={{ marginLeft: "40%", color: "red"}} className="footer-company-name">Summer Camp &copy; 2021</p>
 </footer>
            </div>
         

        </div>
    );
};

export default Footer;
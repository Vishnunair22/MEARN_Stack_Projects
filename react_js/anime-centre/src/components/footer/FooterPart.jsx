import React from 'react';
import './footer.css';

function FooterPart() {
  return (
    <div className='footer-container' id='contact'>
        <div className="footer-item">
            <h3>Related Links</h3>
            <p>Contact Us</p>
            <p>Our Services</p>
            <p>Our Community</p>
            <p>Blogs</p>
            <p>Our Email Newsletter</p>
        </div>
        <div className="footer-item">
            <h3>Follow Us On</h3>
            <div className="foot-icons">
                <span><i className="fab fa-instagram"></i></span>
                <span><i className="fab fa-facebook-f"></i></span>
                <span><i className="fab fa-twitter"></i></span>
                <span><i className="fab fa-discord"></i></span>
                <span><i className="fab fa-reddit"></i></span>
            </div>
        </div>
        <div className="footer-item">
            <div className="ftr-logo">
            <span className="foot-icn"><i class="fa-solid fa-boxes-stacked"></i></span>
            <span className="foot-wrd1">Anime</span>
            <span className="foot-wrd2">Hub</span>
            </div>
        </div>
    </div>
  );
}

export default FooterPart;

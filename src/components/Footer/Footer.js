import React from 'react';
import "./Footer.css";
import MetaTags from 'react-meta-tags';
const Footer = (props) => (
<footer className="my-footer mt-5">
    <div className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 text-center">
                    <h5>About FoodParadise</h5>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 text-center">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Google Play</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-4 text-center">
                    <h5>Download App</h5>
                    <ul>
                    <li><a href="#">Google Play</a></li>
                    <li><a href="#">App Store</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="social-networks">
            <a href="#" target="_blank"><i class="fa fa-whatsapp"></i></a>
            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
        </div>
        <p className="footer-copyright">Copyright &copy; 2019 FoodParadise</p>
    </div>
</footer>
);

export default Footer;
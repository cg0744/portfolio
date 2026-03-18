import { Link } from 'react-router-dom';
import cgLogo from '../assets/images/cg-logo.png';
import locationIcon from '../assets/images/location-icon.png';
import phoneIcon from '../assets/images/phone-icon.png';
import emailIcon from '../assets/images/email-icon.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-auto">
            <div className="row" id="footer-sections">
                {/* Section 1: Logo & Title */}
                <div className="col-12 col-lg-4 text-center pt-5">
                    <img src={cgLogo} alt="Christian Gawriyah Logo" className="footer-logo" />
                    <h2 className="text-warning">Christian Gawriyah</h2>
                    <h5 className="text-warning">Software Developer</h5>
                </div>

                {/* Section 2: Contact */}
                <div className="col-12 col-lg-4 text-center pt-5">
                    <h2 className="pb-4 h1">Contact me!</h2>
                    <Link to="/contact">
                        <button className="btn btn-outline-light">Contact</button>
                    </Link>
                </div>

                {/* Section 3: Personalia */}
                <div className="col-12 col-lg-4 text-center pt-5" id="personalia">
                    <img src={locationIcon} alt="Location Icon" />
                    <h3 className="pb-3 h5">Canadian Grenadier 61</h3>

                    <img src={phoneIcon} alt="Phone Icon" />
                    <h3 className="pb-3 h5">+31 6 81898526</h3>

                    <img src={emailIcon} alt="Email Icon" />
                    <h3 className="pb-3 h5">sig10031980c@gmail.com</h3>
                </div>
            </div>
            <hr />

            {/* Bottom Copyright Row */}
            <div className="py-2 d-flex justify-content-center align-items-center">
                <a href="#" className="text-white mx-3">Privacy</a> <h6 className="mb-0">|</h6>
                <a href="#" className="text-white mx-3">Cookies</a> <h6 className="mb-0">|</h6>
                <h6 className="text-white mx-3 mb-0">© 2025 copyright: Christian Gawriyah</h6>
            </div>
        </footer>
    );
};

export default Footer;
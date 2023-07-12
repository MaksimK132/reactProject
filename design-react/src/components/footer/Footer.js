import "./footer.css"

import logo_image from "./../../img/logo-image.png"
import dot from "./../../img/dot.png"
import facebook from "./../../img/facebook.png"
import instagram from "./../../img/instagram.png"
import tiktok from "./../../img/tiktok.png"
import youtube from "./../../img/youtube.png"
import arrow from "./../../img/arrow.png"

const Footer = () => {
    return (<footer className="footer">
                <div className="top-footer">
                    <div className="container footer-container">
                        <div className="top-footer-content">
                            <h2 className="top-footer-tittle">let's discuss making your interior like a dream place!</h2>
                            <div className="top-footer-right-block">
                                <p className="top-footer-text">Contact us below to work together to build your amazing interior</p>
                                <button className="top-footer-button">Contact Us</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-container">
                    <div className="bottom-footer">
                        <div className="bottom-footer-right-block">
                            <img src={logo_image} alt="" className="bottom-footer-logo"/>
                            <h2 className="bottom-footer-tittle">One of the best furniture agency.</h2>
                        </div>
                        <div className="bottom-footer-left-block">
                            <div className="input block">
                                <div className="input-info">
                                    <img src={dot} alt="" className="dot"/>
                                    <p className="input-tittle">Enter  your email to get the laterst news</p>
                                </div>
                                <div className="input-form">
                                    <input type="Email Address" className="footer-input" placeholder="Email Address"/>
                                    <a href="" className="footer-email-link">
                                        <img src={arrow} alt="" className="arrow-image"/>
                                    </a>
                                </div>
                                <div className="input-line"></div>
                            </div>
                            <div className="socials-block">
                                <p className="socials-tittle">Follow us On</p>
                                <div className="socials-images">
                                    <img src={facebook} alt="" className="social-iamge"/>
                                    <img src={instagram} alt="" className="social-iamge"/>
                                    <img src={tiktok} alt="" className="social-iamge"/>
                                    <img src={youtube} alt="" className="social-iamge"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>);
}
 
export default Footer;
import "./footer.css"

import {NavLink } from "react-router-dom"
import { useState } from "react"
import {useForm} from "react-hook-form"

import logo_image from "./../../img/logo-image.png"
import dot from "./../../img/dot.png"
import facebook from "./../../img/facebook.png"
import instagram from "./../../img/instagram.png"
import tiktok from "./../../img/tiktok.png"
import youtube from "./../../img/youtube.png"
import arrow from "./../../img/arrow.png"
import Email_modal from "../email-modal/Email-modal"


const Footer = () => {
    const [modalButton, setModalButton] = useState(false);
    const {register, formState:{errors}, handleSubmit, reset} = useForm({mode: "onBlur"});
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset()
    }
    return (<footer className="footer">
                <div className="top-footer">
                    <div className="container">
                        <div className="footer-container">
                            <div className="top-footer-content">
                                <h2 className="top-footer-tittle">let's discuss making your interior like a dream place!</h2>
                                <div className="top-footer-right-block">
                                    <p className="top-footer-text">Contact us below to work together to build your amazing interior</p>
                                    <NavLink to="/contact-us" className="top-footer-button-item">
                                        <button className="top-footer-button">Contact Us</button>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-container">
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
                                    <div className="input-form-footer">
                                        <form className="footer-form" onSubmit={handleSubmit(onSubmit)}> 
                                            <label>
                                                <input type="Email Address" className="footer-input" placeholder="Email Address" {...register("firstName", {required: "Поле обязательно к заполнению!"})}/>
                                            </label>
                                            <button>
                                                <a href="#!" onClick={() => setModalButton(true)} className="footer-email-link">
                                                    <img src={arrow} alt="" className="arrow-image"/>
                                                </a>
                                            </button>
                                            <div className="input-line"></div>
                                            <div className="error-footer-place">
                                                {errors?.firstName && <p className="error-text">{errors?.firstName?.message || "Error!"}</p>}
                                            </div>
                                            
                                        </form>
                                        <Email_modal trigger={modalButton} setTrigger={setModalButton}>
                                            <p className="modal-text">You have successfully subscribed to the newsletter</p>
                                        </Email_modal>
                                    </div>
                                    
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
                </div>
            </footer>);
}
 
export default Footer;
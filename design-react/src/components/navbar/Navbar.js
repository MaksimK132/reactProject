import "./navbar.css"

import { NavLink } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import React, {useState} from "react"

import logo_image from "./../../img/logo-image.png"

const activeLink = "nav-list__link nav-list__link--active"
const normalLink = "nav-list__link"

const Navbar = () => {
        const findBody = document.body;
        const [nav, setNav] = useState(false); 
        function makeNavBar() {
            setNav(!nav)
            findBody.classList.toggle("no-scroll")
        };
        function makeNavBarRemove() {
            setNav(!nav)
            findBody.classList.remove("no-scroll")
        };
    return (<nav className="nav">
                <div className="container">
                    <div className="nav-content">
                        <div className="nav-logo">
                            <NavLink to="/" className="logo-link">
                                <img src={logo_image} alt="" className="logo-image"/>
                            </NavLink>
                        </div>
                        <div className={nav ? ["nav-list", "active"].join(' ') : ["nav-list"]}>
                            <li className="nav-item">
                                <NavLink to="/" onClick={makeNavBarRemove} className={({isActive}) => {
                                    return isActive ? activeLink : normalLink;
                                }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" onClick={makeNavBarRemove} className={({isActive}) => {
                                    return isActive ? activeLink : normalLink;
                                }}>About Us</NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink to="/services" onClick={makeNavBarRemove} className={({isActive}) => {
                                    return isActive ? activeLink : normalLink;
                                }}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/our-teams" onClick={makeNavBarRemove} className={({isActive}) => {
                                    return isActive ? activeLink : normalLink;
                                }}>Our Teams</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-us" onClick={makeNavBarRemove} className="nav-link"><button className="nav-button">Contact Us</button></NavLink>
                            </li>
                        </div>
                        <div onClick={makeNavBar} className="mobile-btn" id="mobile-btn" >
                                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
                        </div>
                    </div>
                </div>
            </nav>);
}


// () => setNav(!nav)
export default Navbar;
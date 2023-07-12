import "./navbar.css"

import { NavLink } from "react-router-dom";


import logo_image from "./../../img/logo-image.png"

const activeLink = "nav-list__link nav-list__link--active"
const normalLink = "nav-list__link"

const Navbar = () => { 
    return (<nav className="nav">
                <div className="container">
                    <div className="nav-content">
                        <div className="nav-logo">
                            <NavLink to="/" className="logo-link">
                                <img src={logo_image} alt="" className="logo-image"/>
                            </NavLink>
                        </div>
                        <div className="nav-list">
                            <li className="nav-item">
                                <NavLink to="/" className={({isActive}) => {
                                    return isActive ? activeLink : normalLink;
                                }}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about-us" className={({isActive}) => {
                                    return isActive ? activeLink : normalLink;
                                }}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className={({isActive}) => {
                                    return isActive ? activeLink : normalLink;
                                }}>Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/our-teams" className={({isActive}) => {
                                    return isActive ? activeLink : normalLink;
                                }}>Our Teams</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact-us" className="nav-link"><button className="nav-button">Contact Us</button></NavLink>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>);
}
 
export default Navbar;
import "./about-block.css"

import { NavLink } from "react-router-dom";

import about_block_image from "./../../img/about-block-image.png"
import about_person_image from "./../../img/about-person-image.png"
import Block_info from "../block-info/Block-info";
import Person_block from "../person-block/Person-block";

const About_block = () => {
    return (<div className="about-block">
                <div className="container">
                    <div className="about-block-info">
                        <Block_info name = "ABOUT" />
                        <h2 className="block-tittle">“We're one of the best furniture agency. Prioritizing customers<br/>and making purchases easy are the hallmarks of our agency.”</h2>
                        <div className="about-block-content">
                            <img src={about_block_image} alt="" className="about-block-image"/>
                            <div className="about-block-inner">
                                <Person_block />
                                <div className="text-block">
                                    <div className="about-text">Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</div>
                                    <NavLink to="/portfolio" className="learn-more-link"><button className="about-button">Learn More</button></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
}
 
export default About_block;
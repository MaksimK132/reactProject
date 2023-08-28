import Person_block from "../person-block/Person-block";
import "./portfolio-block-item.css"

import { NavLink } from "react-router-dom";

const Portfolio_block_item = ({className, img, tittle, text, index}) => {
    return (<div className={className}>
                <img src={img} alt="" className="about-block-image"/>
                <div className="about-block-inner">
                    <Person_block />
                    <p className="room-name">{tittle}</p>
                    <div className="text-block">
                        <div className="about-text">{text}</div>
                        <NavLink to={`/rooms/${index}`} className="learn-more-link">
                            <button className="about-button">See More</button>
                        </NavLink> 
                    </div>
                </div>
            </div>);
}
 
export default Portfolio_block_item;
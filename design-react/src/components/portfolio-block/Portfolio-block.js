import "./portfolio-block.css"

import minimalist_room from "./../../img/minimalist-room.png"
import about_person_image from "./../../img/about-person-image.png"
import vintage_room from "./../../img/vintage-room.png"
import modern_room from "./../../img/modern-room.png"
import transitional_room from "./../../img/transitional-room.png"
import Block_info from "../block-info/Block-info"

import Portfolio_block_item from "./../portfolio-block-item/Portfolio-block-item"
import {portfolioBlockItems} from "./../../helpers/portfolioBlockList"

const Portfolio_block = () => {
    return (<div className="portfolio-block">
                <div className="container">
                    <div className="portfolio-block-info">
                       <Block_info name = "PORTFOLIO" />
                        {portfolioBlockItems.map((item) => {
                                    return <Portfolio_block_item img={item.img}  tittle={item.tittle} text={item.text} />;
                                })}
                    </div>
                </div>
            </div>);
}
 
export default Portfolio_block;
import Person_block from "../person-block/Person-block";
import "./portfolio-block-item.css"

const Portfolio_block_item = ({img, tittle, text}) => {
    return (<div className="about-block-content">
                <img src={img} alt="" className="about-block-image"/>
                <div className="about-block-inner">
                    <Person_block />
                    <p className="room-name">{tittle}</p>
                    <div className="text-block">
                        <div className="about-text">{text}</div>
                        <a href="portfolio.html" className="learn-more-link">
                            <button className="about-button">See More</button>
                        </a>
                    </div>
                </div>
            </div>);
}
 
export default Portfolio_block_item;
import "./home-service-block.css"

import arrow from "./../../img/arrow.png"
import home_service_image from "./../../img/home-service-image.png"
import Block_info from "../block-info/Block-info";
import Home_service_item from "../home-service-item/Home-service-item";

import { homeServiceItems } from "../../helpers/homeServiceList";

const Home_service_block = () => {
    return (<div className="home-service-block">
                <div className="container">
                    <div className="home-service-block-info">
                        <Block_info name = "SERVICE" />
                        <h2 className="block-tittle">attractive furniture with the best quality.</h2>
                        <div className="home-service-block-content">
                            <p className="home-service-block-text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                            <ul className="home-service-list">
                                {homeServiceItems.map((item) => {
                                    return <Home_service_item number={item.number} tittle={item.tittle} img={item.img} />;
                                })}
                                
                            </ul>
                        </div>
                    </div>
                    <img src={home_service_image} alt="" className="home-service-image"/>
                </div>
            </div>);
}
 
export default Home_service_block;
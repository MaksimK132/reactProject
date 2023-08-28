import "./home-header.css"

import header_image from "./../../img/header-image.png";
import Blue_block from "../blue-block/Blue-block";

const Home_header = () => {
    return (<header className="home-header">
                <div className="container home-header-blocks">
                    
                    <div className="header-content">
                        <div className="tittle-block">
                            <div className="left-tittle-block">
                                <h1 className="header-tittle">Design your interor with high quality.</h1>
                            </div>
                            <div className="right-tittle-block">
                                <div className="header-line home-line" id="home-line"></div>
                                <div className="header-privacy">2022<br/>ALL RIGHT RESERVED</div>
                            </div>
                        </div>
                        <img src={header_image} alt="" className="header-image"/>
                    </div>
                    <Blue_block  className="blue-block-home"/>
                </div>
            </header>);
}
 
export default Home_header;
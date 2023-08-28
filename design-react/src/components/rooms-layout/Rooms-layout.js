import "./rooms-layout.css";

import {portfolioBlockItems} from "./../../helpers/portfolioBlockList";
import { useParams } from "react-router-dom";

const Rooms_layout = () => {

    const  {id} = useParams()
    const categoryInfo = portfolioBlockItems[id];

    return (
        <div className="container">
            <div className="room-page-content">
                <div className="room-page-top">
                    <p className="room-page-name">{categoryInfo.tittle}</p>
                    <p className="room-page-text">{categoryInfo.nameDescription}</p>
                </div>
                <img src={categoryInfo.bigImg} className="room-page-image"></img>
                <div className="room-page-bottom">
                    <div className="room-page-bottom-left">
                        <p className="bottom-tittle">{categoryInfo.tittle1}</p>
                        <p className="bottom-text">{categoryInfo.text2}</p>
                    </div>
                    <div className="room-page-bottom-right">
                        <p className="bottom-tittle">{categoryInfo.tittle2}</p>
                        <p className="bottom-text">{categoryInfo.text2}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Rooms_layout;
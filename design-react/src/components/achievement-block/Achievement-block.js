import "./achievement-block.css"

import achievement_block_image from "./../../img/achiviement-block-image.png"
import Blue_block from "../blue-block/Blue-block";
import Block_info from "../block-info/Block-info";

const Achievement_block = () => {
    return (<div className="achievement-block">
                <div className="container">
                    <div className="achievement-block-info">
                        <Block_info name = "ACHIEVEMENT" />
                        <h2 className="block-tittle">interior customization with Danaanz,<br/>best quality with professional workers</h2>
                        <div className="achihviement-image-block">
                            <img src={achievement_block_image} alt="" className="achiviement-image"/>
                            <Blue_block className = "blue-block-achievement" />
                        </div>
                    </div>
                </div>
            </div>);
}
 
export default Achievement_block;
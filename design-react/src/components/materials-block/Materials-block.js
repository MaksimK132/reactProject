import "./materials-block.css"

import materials_image_1 from "./../../img/materials-image-1.png"
import materials_image_2 from "./../../img/materials-image-2.png"
import materials_image_3 from "./../../img/materials-image-3.png"
import Block_info from "../block-info/Block-info"

const Materials_block = () => {
    return (<div className="materials-block">
                <div className="container">
                    <div className="materials-block-content">
                        <div className="materials-block-info">
                            <Block_info name = "MATERIALS" />
                            <h2 className="block-tittle">choice of<br/>materials for<br/>quality furniture.</h2>
                            <p className="materials-block-text">You can custom the material as desired. And our furniture uses the best materials and selected quality materials.</p>
                            <button className="materials-block-button">See Materials</button>
                        </div>
                        <div className="materials-image-block">
                            <div className="images-row-left">
                                <img src={materials_image_1} alt="" className="materials-image-1"/>
                            </div>
                            <div className="images-row-right">
                                <img src={materials_image_2} alt="" className="materials-image-2"/>
                                <img src={materials_image_3} alt="" className="materials-image-3"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
}
 
export default Materials_block;
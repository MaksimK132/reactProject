import "./designer-block.css"

import Block_info from "../block-info/Block-info"
import Designer_block_item from "./../designer-block-item/Designer-block-item"
import {designerTopItems, designerBottomItems} from "./../../helpers/designerBlockList"

const Designer_block = () => {
    return (<div className="designer-block">
                <div className="container">
                    <div className="designer-block-info">
                        <Block_info name = "DESIGNER" />
                        <h2 className="block-tittle">Creative Person</h2>
                        <p className="service-block-tittle">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                        <div className="designers">
                            <div className="designers-row-top">
                                {designerTopItems.map((item) => {
                                        return <Designer_block_item img={item.img} name={item.name} position={item.position}/>;
                                    })}
                            </div>
                            <div className="designers-row-bottom">
                                {designerBottomItems.map((item) => {
                                            return <Designer_block_item img={item.img} name={item.name} position={item.position}/>;
                                        })}    
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
}
 
export default Designer_block;
import "./service-block.css"

import grey_ellipse from "./../../img/grey-ellipse.png"
import Block_info from "../block-info/Block-info";

import Service_block_item from "./../service-block-item/Service-block-item";
import { serviceItems } from "./../../helpers/serviceItemsList";

const Service_block = () => {
    return (<div className="service-block">
                <div className="container">
                    <div className="service-block-info">
                        <Block_info name = "SERVICE" />
                        <h2 className="block-tittle">Why Choose Us</h2>
                        <p className="service-block-tittle">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                        <div className="service-squares">
                            {serviceItems.map((item) => {
                                        return <Service_block_item tittle={item.tittle} text={item.text} img={item.img} />;
                                    })}
                        </div>
                    </div>
                </div>
            </div>);
}
 
export default Service_block;
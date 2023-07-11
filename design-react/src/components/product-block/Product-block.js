import "./product-block.css"

import arrow from "./../../img/arrow.png"
import Block_info from "../block-info/Block-info";

import {productItems} from "./../../helpers/producrItemsList";
import Product_item from "./../product-items/Product-item"

const Product_block = () => {
    return (<div className="product-block">
                <div className="container">
                    <div className="product-block-info">
                        <Block_info name = "PRODUCT" />
                        <div className="product-block-inner-text">
                            <h2 className="product-block-tittle">Choose your<br/>product themes.</h2>
                            <p className="product-block-text">Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                        </div>
                        <ul className="product-list">
                            {productItems.map((item) => {
                                        return <Product_item number={item.number} tittle={item.tittle} text={item.text} img={item.img} />;
                                    })}
                            
                        </ul>
                    </div>
                </div>
            </div>);
}
 
export default Product_block;
import "./product-item.css"

import { NavLink } from "react-router-dom";

import arrow from "./../../img/arrow.png"

const Product_item = ({number, tittle, text, index}) => {
    return (<li className="product-item">
                <div className="product-item-description">
                    <div className="product-item-number">{number}</div>
                    <div className="product-list-tittles">
                        <div className="product-item-name">{tittle}</div>
                        <p className="product-list-text">{text}</p>
                    </div>
                </div>
                <NavLink to={`/rooms/${index}`} className="home-service-arrow-link">
                    <img src={arrow} alt="" className="home-service-arrow"/>
                </NavLink>
                {/* <a href="" className="home-service-arrow-link">
                    <img src={arrow} alt="" className="home-service-arrow"/>
                </a> */}
            </li>);
}
 
export default Product_item;
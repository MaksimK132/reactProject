import Block_info from "../block-info/Block-info";
import "./location-block.css"

import {locationBlockTopList, locationBlockBottomList} from "./../../helpers/locationBlockList"
import Location_block_item from "./../location-block-item/Location-block-item"

const Location_block = () => {
    return (<div className="location-block">
                <div className="container">
                    <div className="location-block-info">
                        <Block_info name = "LOCATION" />
                        <div className="location-block-content">
                            <div className="visit block">
                                <p className="visit-tittle">Visit Our Stores</p>
                                <p className="visit-text">Find us at these locations.</p>
                                <p className="visit-contact-tittle">Email</p>
                                <p className="visit-contact-text">dananz@gmail.com</p>
                                <p className="visit-contact-tittle">Phone</p>
                                <p className="visit-contact-text">+62 815 002 1000</p>
                            </div>
                            <div className="store-address-block">
                                <div className="address-top">
                                    {locationBlockTopList.map((item) => {
                                        return <Location_block_item tittle={item.tittle} text={item.text} />;
                                    })}
                                </div>
                                <div className="address-bottom">
                                    {locationBlockBottomList.map((item) => {
                                            return <Location_block_item tittle={item.tittle} text={item.text} />;
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
}
 
export default Location_block;
import "./achievement-services-block.css"

import Block_info from "../block-info/Block-info"
import Achievement_services_item from "./../achievement-services-item/Achievement-services-item"
import {achievementServiceItems} from "./../../helpers/achievementServicesList"

const Achievement_services_block = () => {
    return (<div className="achievement-services-block">
                <div className="container">
                    <div className="achievement-services-block-info">
                        <Block_info name = "ACHIEVEMENT" />
                        <div className="achievement-services-block-content">
                            {achievementServiceItems.map((item) => {
                                        return <Achievement_services_item img={item.img} tittle={item.tittle} text={item.text} />;
                                    })}
                            
                        </div>
                    </div>
                </div>
            </div>);
}
 
export default Achievement_services_block;
import "./person-block.css"

import about_person_image from "./../../img/about-person-image.png"

const Person_block = () => {
    return (<div className="person-block">
                <img src={about_person_image} alt="" className="person-image"/>
                <div className="person-info">
                    <div className="person-name">Arga Danaan</div>
                    <div className="person-description">CEO of Dananz</div>
                </div>
            </div>);
}
 
export default Person_block;
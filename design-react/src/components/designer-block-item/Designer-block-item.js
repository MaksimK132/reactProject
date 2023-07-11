import "./designer-block-item.css"

const Designer_block_item = ({img, name, position}) => {
    return (<div className="designer-square">
                <img src={img} alt="" className="designer-image"/>
                <div className="designer-info-square">
                    <p className="designer-name">{name}</p>
                    <p className="designer-position">{position}</p>
                </div>
            </div>);
}
 
export default Designer_block_item;
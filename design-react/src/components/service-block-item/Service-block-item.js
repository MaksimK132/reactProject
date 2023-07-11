import "./service-block-item.css"

const Service_block_item = ({tittle, text, img}) => {
    return ( <div className="service-square">
                <img src={img} alt="" className="ellipse"/>
                <p className="service-square-tittle">{tittle}</p>
                <p className="service-square-text">{text}</p>
            </div>);
}
 
export default Service_block_item;
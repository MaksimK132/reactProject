import "./service-block-item.css"

const Service_block_item = ({tittle, text, img}) => {
    return ( <div className="service-square">
                <div className="ellipse ellipse-anim">
                </div>
                <p className="service-square-tittle">{tittle}</p>
                <p className="service-square-text">{text}</p>
            </div>);
}
{/* <img src={img} alt="" className="ellipse"/> */}
export default Service_block_item;
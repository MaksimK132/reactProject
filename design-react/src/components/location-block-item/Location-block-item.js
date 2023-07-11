import "./location-block-item.css"

const Location_block_item = ({tittle, text}) => {
    return (<div className="address">
                <p className="address-name">{tittle}</p>
                <p className="address-text">{text}</p>
            </div>);
}
 
export default Location_block_item;
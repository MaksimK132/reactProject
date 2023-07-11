import "./achievement-services-item.css"

const Achievement_services_item = ({img, tittle, text}) => {
    return (<div className="achievement-block-inner">
                <img src={img} alt="" className="achievement-img-inner"/>
                <div className="achievement-description-inner">
                    <p className="achievement-inner-name">{tittle}</p>
                    <p className="achievement-inner-text">{text}</p>
                </div>
            </div>);
}
 
export default Achievement_services_item;
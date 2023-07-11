import "./home-service-item.css"

const Home_service_item = ({number, tittle, img}) => {
    return ( <li className="home-service-item">
                <div className="item-description">
                    <div className="item-number">{number}</div>
                    <div className="item-name">{tittle}</div>
                </div>
                <a href="" className="home-service-arrow-link">
                    <img src={img} alt="" className="home-service-arrow"/>
                </a>
            </li>);
}
 
export default Home_service_item;
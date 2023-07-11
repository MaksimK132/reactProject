import home_service_image from "./../../img/home-service-image.png"

const Services_header = () => {
    return (<header className="header">
            <div className="container">
                <div className="header-content">
                    <h1 className="header-tittle">Services</h1>
                    <p className="header-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <img src={home_service_image} alt="" className="header-image"/>
                </div>
            </div>
        </header>);
}
 
export default Services_header;
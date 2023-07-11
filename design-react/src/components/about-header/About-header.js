import about_header_image from "./../../img/about-header-image.png"

const About_header = () => {
    return (<header className="header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="header-tittle">About</h1>
                        <p className="header-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <img src={about_header_image} alt="" className="header-image"/>
                    </div>
                </div>
            </header>);
}
 
export default About_header;
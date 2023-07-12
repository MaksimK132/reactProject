import Home_header from "./../components/home-header/Home-header"

import About_block from "../components/about-block/About-block"
import Home_service_block from "../components/home-service-block/Home-service-block"
import Product_block from "../components/product-block/Product-block"
import Materials_block from "../components/materials-block/Materials-block"
import Modal_window from "../components/modal-nav/Modal-nav"

const Home = () => {
    return (
    <>
    <Home_header />
    <main className="main">
        <About_block />
        <Home_service_block />
        <Product_block />
        <Materials_block />
    </main>
    </>);
}
 
export default Home;
import Achievement_services_block from "../components/achievement-services-block/Achievement-services-block";
import Product_block from "../components/product-block/Product-block";
import Services_header from "../components/services-header/Services-header"

const Services = () => {
    return (<main className="main">
                <Services_header />
                <Achievement_services_block />
                <Product_block />
            </main>);
}
 
export default Services;
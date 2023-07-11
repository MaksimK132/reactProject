import Portfolio_header from "../components/portfolio-header/Portfolio-header"
import Portfolio_block from "../components/portfolio-block/Portfolio-block";
import Service_block from "../components/service-block/Service-block";

const Portfolio = () => {
    return (<main className="main">
                <Portfolio_header />
                <Portfolio_block />
                <Service_block />
            </main>);
}
 
export default Portfolio;
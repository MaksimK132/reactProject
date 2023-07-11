import About_header from "../components/about-header/About-header";
import Achievement_block from "../components/achievement-block/Achievement-block";
import Service_block from "../components/service-block/Service-block";

const About_us = () => {
    return (<main className="main">
                <About_header />
                <Achievement_block />
                <Service_block />
            </main>);
}
 
export default About_us;
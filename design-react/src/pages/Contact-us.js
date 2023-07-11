import Contact_us_forms from "../components/contact-us-forms/Contact-us-forms";
import Contact_us_header from "../components/contact-us-header/Contact-us-header";
import Location_block from "../components/location-block/Location-block";

const Contact_us = () => {
    return (<main className="main">
                <Contact_us_header />
                <Contact_us_forms />
                <Location_block />
            </main>);
}
 
export default Contact_us;
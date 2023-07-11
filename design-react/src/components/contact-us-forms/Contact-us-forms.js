import "./contact-us-forms.css"

const Contact_us_forms = () => {
    return (<div className="contact-us-forms">
                <div className="container">
                    <div className="contact-us-forms-content">
                        <div className="name-input">
                            <div className="input-form">
                                <p className="input-tittle">First Name</p>
                                <input type="text" className="first-name-input" placeholder="First Name"/>
                            </div>
                            <div className="input-form">
                                <p className="input-tittle">Last Name</p>
                                <input type="text" className="last-name-input" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="input-form">
                            <p className="input-tittle">Email</p>
                            <input type="text" className="email-input" placeholder="Email"/>
                        </div>
                        <div className="input-form">
                            <p className="input-tittle">Phone Number</p>
                            <input type="text" className="phone-number-input" placeholder="Phone Number"/>
                        </div>
                        <div className="input-form">
                            <p className="input-tittle">Message</p>
                            <input type="text" className="message-input" placeholder="Your Message"/>
                        </div>
                        <button className="send-message-button">Send Message</button>
                    </div>
                </div>
            </div>);
}
 
export default Contact_us_forms;
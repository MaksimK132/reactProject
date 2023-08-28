import "./contact-us-forms.css"

import {useForm} from "react-hook-form";

const Contact_us_forms = () => {

    const {register, formState:{errors}, handleSubmit, reset} = useForm({mode: "onBlur"});
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset()
    }

    return (<div className="contact-us-forms">
                <div className="container">
                    <div className="contact-us-forms-content">
                        <form className="forms" onSubmit={handleSubmit(onSubmit)}>
                            <div className="name-input">
                                <div className="name-form-input">
                                    <label className="first-form-label">
                                        First Name
                                        <input placeholder="First Name" className="first-name-input" {...register("firstName", {required: "Поле обязательно к заполнению!"})}></input>
                                    </label>
                                    <div className="error-place">
                                        {errors?.firstName && <p className="error-text">{errors?.firstName?.message || "Error!"}</p>}
                                    </div>
                                </div>
                                <div className="name-form-input">
                                    <label className="first-form-label">
                                        Last Name
                                        <input placeholder="Last Name" className="last-name-input" {...register("lastName", {required: "Поле обязательно к заполнению!"})}></input>
                                    </label>
                                    <div className="error-place">
                                        {errors?.lastName && <p className="error-text">{errors?.lastName?.message || "Error!"}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="input-form">
                                <label className="first-form-label">
                                    Email
                                    <input placeholder="Email" className="email-input" {...register("email", {required: "Поле обязательно к заполнению!"})}></input>
                                </label>
                                <div className="error-place">
                                    {errors?.email && <p className="error-text">{errors?.email?.message || "Error!"}</p>}
                                </div>
                            </div>
                            <div className="input-form">
                                <label className="first-form-label">
                                    Phone Number
                                    <input placeholder="Phone Number" className="phone-number-input" {...register("phoneNumber", {required: "Поле обязательно к заполнению!"})}></input>
                                </label>
                                <div className="error-place">
                                    {errors?.phoneNumber && <p className="error-text">{errors?.phoneNumber?.message || "Error!"}</p>}
                                </div>
                            </div>
                            <div className="input-form">
                                <label className="first-form-label">
                                    Message
                                    <input placeholder="Message" className="message-input" {...register("messageForm", {required: "Поле обязательно к заполнению!"})}></input>
                                </label>
                                <div className="error-place">
                                    {errors?.messageForm && <p className="error-text">{errors?.messageForm?.message || "Error!"}</p>}
                                </div>
                            </div>
                            <button className="send-message-button">Send Message</button>   
                        </form>
                    </div>
                </div>
            </div>);
}
 
export default Contact_us_forms;
import close_image from "./../../img/close-image.png"

import "./email-modal.css"

const Email_modal = (props) => {
    return (props.trigger) ? (
        <div className="modal">
            <div className="modal-inner">
                <a onClick={() => props.setTrigger(false)} className="modal-close-button">
                    <img src={close_image} className="modal-close-button-image"/>
                </a>
                {props.children}
            </div>
        </div>
    ) : "";
}
 
export default Email_modal;
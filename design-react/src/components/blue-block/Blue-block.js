import "./blue-block.css"

import React from "react";

function Blue_block(props) {
    return(
        <div className={props.className}>
                <ul className="blue-block-list">
                    <li className="blue-block-item">
                        <p className="blue-block-number">350+</p>
                        <p className="blue-block-text">Project Completed</p>
                    </li>
                    <li className="blue-block-item">
                        <p className="blue-block-number">23+</p>
                        <p className="blue-block-text">Professional Teams</p>
                    </li>
                    <li className="blue-block-item">
                        <p className="blue-block-number">15+</p>
                        <p className="blue-block-text">Years Experience</p>
                    </li>
                </ul>
        </div>
    )
}
export default Blue_block

// const Blue_block = (className) => {
//     return (<div className= "blue-block">
//                 <ul className="blue-block-list">
//                     <li className="blue-block-item">
//                         <p className="blue-block-number">350+</p>
//                         <p className="blue-block-text">Project Completed</p>
//                     </li>
//                     <li className="blue-block-item">
//                         <p className="blue-block-number">23+</p>
//                         <p className="blue-block-text">Professional Teams</p>
//                     </li>
//                     <li className="blue-block-item">
//                         <p className="blue-block-number">15+</p>
//                         <p className="blue-block-text">Years Experience</p>
//                     </li>
//                 </ul>
//             </div>);
// }

// export default Blue_block;
 
// export default Blue_block(className); {
//     return (<div className= "blue-block" {className}>
//                 <ul className="blue-block-list">
//                     <li className="blue-block-item">
//                         <p className="blue-block-number">350+</p>
//                         <p className="blue-block-text">Project Completed</p>
//                     </li>
//                     <li className="blue-block-item">
//                         <p className="blue-block-number">23+</p>
//                         <p className="blue-block-text">Professional Teams</p>
//                     </li>
//                     <li className="blue-block-item">
//                         <p className="blue-block-number">15+</p>
//                         <p className="blue-block-text">Years Experience</p>
//                     </li>
//                 </ul>
//             </div>);
// };
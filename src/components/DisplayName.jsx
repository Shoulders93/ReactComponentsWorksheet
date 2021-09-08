import React from "react";

function DisplayName(props){
    return ( 
        <div className="fullname">
            <h1 className="first">{props.firstName}</h1>
            <h1 className="last">{props.lastName}</h1>
        </div>
     );
}
 
export default DisplayName;
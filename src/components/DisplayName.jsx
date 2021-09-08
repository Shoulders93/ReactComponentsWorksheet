import React from "react";

function DisplayName(props){
    return ( 
        <div className="fullname">
            <h1 className="first">{props.fullname.first}</h1>
            <h1 className="last">{props.fullname.last}</h1>
        </div>
     );
}
 
export default DisplayName;
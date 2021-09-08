import React from "react";

function NamesList(props){
    return (
        <div>
            <ul>{props.first}</ul>
            <ul>{props.second} </ul>
            <ul>{props.third} </ul>
            <ul>{props.fourth} </ul>
            <ul>{props.fifth} </ul>
        </div>
    );
}

export default NamesList;
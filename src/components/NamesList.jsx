import React from "react";

function NamesList(props){
    return (
        <ul>
            <li>{props.first}</li>
            <li>{props.second} </li>
            <li>{props.third} </li>
            <li>{props.fourth} </li>
            <li>{props.fifth} </li>
        </ul>
    );
}

export default NamesList;
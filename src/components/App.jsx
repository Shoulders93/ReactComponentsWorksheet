import React, {Component} from "react";
import DisplayName from "./DisplayName";
import NamesList from "./NamesList";
import AlertUser from "./AlertUser";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        };
    }

    render(){
        return (
            <div>
                <DisplayName firstName="Reggie" lastName="White" />
                <NamesList first="Mike" second="Nevin" third="Aaron" fourth="Tory" fifth="Kelly" />
                <AlertUser  />
            </div>
        );
    }
    
}

export default App;
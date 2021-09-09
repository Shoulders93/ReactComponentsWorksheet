import React, {Component} from "react";
import DisplayName from "./DisplayName";
import NamesList from "./NamesList";
import AlertUser from "./AlertUser";
import Superhero from "./Superhero";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        };
    }

    alertFunction(){
        alert('devCodeCamp')
    }

    render(){
        return (
            <div>
                <DisplayName firstName="Reggie" lastName="White" />
                <NamesList first="Mike" second="Nevin" third="Aaron" fourth="Tory" fifth="Kelly" />
                <AlertUser  newAlert={this.alertFunction}/>
                <br></br>
                <Superhero />
            </div>
        );
    }
    
}

export default App;
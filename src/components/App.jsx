import React, {Component} from "react";
import DisplayName from "./DisplayName";

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
                <DisplayName />
            </div>
        )
    }
    
}

export default App;
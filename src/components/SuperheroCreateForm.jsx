import React, {Component} from "react";

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: '',
         }
    }
    render() { 
        return ( 
            <form>

            </form>
         );
    }
}
 
export default SuperheroCreateForm;
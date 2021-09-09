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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSuperhero(this.state) // this is calling the function to be executed
    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Superhero ID</label>
                <input type='text' name="superheroId" onChange={this.handleChange} value={this.state.superheroId} />
                <label>Superhero Name</label>
                <input type='text' name="name" onChange={this.handleChange} value={this.state.name} />
                <label>Primary Ability</label>
                <input type='text' name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility} />
                <label>Secondary Ability</label>
                <input type='text' name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility} />
                <button type="submit">Create Superhero</button>
            </form>
         );
    }
}
 
export default SuperheroCreateForm;
import React, {Component} from "react";

class AlertUser extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    hangleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createAlert(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type='submit'>Hit Me</button>
            </form>
        );
    }
}

import React, {Component} from "react";

class AlertUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            button: '',
        }
    }

    hangleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newAlert()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Click Me</button>
            </form>
        );
    }
}

export default AlertUser;
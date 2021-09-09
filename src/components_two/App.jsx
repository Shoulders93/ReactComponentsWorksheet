import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    state = { }

    componentDidMount(){
        this.makeGetRequest();
    }

    async makeGetRequest() {
        try{
            let response = await axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=5');
            console.log(response.data)
        }
        catch (ex) {
            console.log('Error')
        }
    }
    render() {
        return (
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}
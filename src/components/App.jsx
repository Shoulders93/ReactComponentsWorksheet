import React, {Component} from "react";
import DisplayName from "./DisplayName";
import NamesList from "./NamesList";
import AlertUser from "./AlertUser";
import Superhero from "./Superhero";
import SuperheroCreateForm from "./SuperheroCreateForm";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            hero: [
                {superheroId: "1", name: "Batman", primaryAbility: "Wealthy", secondaryAbility: "Rich"},
                {superheroId: "2", name: "Superman", primaryAbility: "Super Strength", secondaryAbility: "Fly"},
                {superheroId: "3", name: "Spiderman", primaryAbility: "Spidey Sense", secondaryAbility: "Shoots Web"},
            ]
        };
    }

    alertFunction(){
        alert('devCodeCamp')
    }

    createSH = (newHero) => {
        console.log(newHero)
        this.setState({
            hero: hero.push(newHero)
        })
    }
    // this is the definition
    
    render(){
        return (
            <div>
                <DisplayName firstName="Reggie" lastName="White" />
                <NamesList first="Mike" second="Nevin" third="Aaron" fourth="Tory" fifth="Kelly" />
                <AlertUser  newAlert={this.alertFunction}/>
                <br></br>
                <Superhero />
                <SuperheroCreateForm createNewSuperhero={this.createSH}/>
            </div>
        );
    }
    
}

export default App;
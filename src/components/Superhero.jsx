import React from "react";

const Superhero = (props) => {
    return (
        <table>
            <tr>
                <th>superheroId</th>
                <th>name</th>
                <th>primaryAbility</th>
                <th>secondaryAbility</th>
            </tr>
            <tr>
                <th>1</th>
                <th>Batman</th>
                <th>Wealthy</th>
                <th>Rich</th>
            </tr>
            <tr>
                <th>2</th>
                <th>Superman</th>
                <th>Super Strength</th>
                <th>Fly</th>
            </tr>
            <tr>
                <th>3</th>
                <th>Spiderman</th>
                <th>Spider Sense</th>
                <th>Shoots Web</th>
            </tr>
        </table>
    )
}
export default Superhero;
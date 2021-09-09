import React from "react";

const Superhero = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>superheroId</th>
                    <th>name</th>
                    <th>primaryAbility</th>
                    <th>secondaryAbility</th>
                </tr>
            </thead>

            <tbody>
                <tr key='1'>
                    <th>1</th>
                    <th>Batman</th>
                    <th>Wealthy</th>
                    <th>Rich</th>
                </tr>
                <tr key='2'>
                    <th>2</th>
                    <th>Superman</th>
                    <th>Super Strength</th>
                    <th>Fly</th>
                </tr>
                <tr key='3'>
                    <th>3</th>
                    <th>Spiderman</th>
                    <th>Spider Sense</th>
                    <th>Shoots Web</th>
                </tr>
            </tbody>
        </table>
    )
}
export default Superhero;
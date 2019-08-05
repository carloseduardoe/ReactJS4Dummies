import React, { Component } from 'react'

export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    buildStats = (stats) => {
        if (!stats || !stats.length)
            return;
        
        return <table>
            <thead><tr><td colSpan="2">Statistics</td></tr></thead>
            <tbody>{stats.map((item, index) =>
                <tr key={index}>
                    <td>{item.stat.name}</td><td>{item.base_stat}</td>
                </tr>
            )}</tbody>
        </table>;
    }

    buildFromData = (name, data, nested, nestedProperty) => {
        if (!data || !data.length)
            return;

        if(nested === true) 
            data = data.map(item => item[nestedProperty]);

        return <div>
            <h5>{name}</h5>
            <ul>{data.map((item, index) =>
                <li key={index}><a href={item.url}>{item.name}</a></li>
            )}</ul>
        </div>;
    }

    render() {
        const pokemon = { ...this.props.pokemon };
        return pokemon ? <div className="pokemon_container">
            <h4>{pokemon.name}</h4>
            <h5>base experience: {pokemon.base_experience}</h5>
            <img src={pokemon.sprites.front_default} alt="Pokemon"/>
            {this.buildStats(pokemon.stats)}
            <div className="pokemon_data">
                {this.buildFromData("Forms", pokemon.forms)}
                {this.buildFromData("Abilities", pokemon.abilities, true, "ability")}
                {this.buildFromData("Items", pokemon.held_items, true, "item")}
                {this.buildFromData("Moves", pokemon.moves, true, "move")}
            </div>
        </div> : null;
    }
}

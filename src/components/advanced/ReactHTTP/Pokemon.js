import React, { Component } from 'react'

export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    buidStats = (stats) => {

    }

    buildFromData = (name, data, nested, nestedProperty) => {
        if (!data || !data.length)
            return;

        if(nested === true) 
            data = data.map(item => item[nestedProperty]);

        return <div>
            <h5>{name}</h5>
            <ol>{data.map((item, index) =>
                <li key={index}><a href={item.url}>{item.name}</a></li>
            )}</ol>
        </div>;
    }

    render() {
        const pokemon = { ...this.props.pokemon };
        console.log(pokemon);
        return pokemon ? <div>
            <h4>{pokemon.name}</h4>
            <img src={pokemon.sprites.front_default} alt="Pokemon"/>
            <p>Base experience: {pokemon.base_experience}</p>
            {/* this.buildStats("Stats", pokemon.stats) */}
            {this.buildFromData("Forms", pokemon.forms)}
            {this.buildFromData("Abilities", pokemon.abilities, true, "ability")}
            {this.buildFromData("Items", pokemon.held_items, true, "item")}
            {this.buildFromData("Moves", pokemon.moves, true, "move")}
        </div> : null;
    }
}

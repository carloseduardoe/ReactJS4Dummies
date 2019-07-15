import React, { Component } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';

export default class Get extends Component {
    constructor(props) {
        super(props);
        this.pokeName = React.createRef();
        this.state = {};
        this.url = "https://pokeapi.co/api/v2/pokemon/";
    }
    
    searchPokemon = (e) => {
        e.preventDefault();
        axios.get(this.url + this.pokeName.current.value.toLowerCase()).then(res => {
            if (!res || res.status !== 200 || Array.isArray(res.data.results))
                return;
            
            this.setState({
                pokemon: res.data
            });
        }).catch(err => console.log(err));
    }

    render() {
        return <div>
            <form className="inline-form">
                <div className="form-field">
                    <input type="text" defaultValue="squirtle" ref={this.pokeName}/>
                    <button type="button" onClick={this.searchPokemon}>Search pokemon</button>
                </div>
            </form>
            {this.state.pokemon ? <Pokemon pokemon={this.state.pokemon}/> : null}
        </div>;
    }
}

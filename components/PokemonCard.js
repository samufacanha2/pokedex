import React, { Component } from 'react'

export default class PokemonCard extends Component {

    state = {
        name:'',
        imageUrl:'',
        index:''

    }

    render() {
        const name = this.props.name;
        const url = this.props.url;
        return (
            <div className="pcard">
                <h3> {name} </h3>
                <p>

                </p>
            </div>
        )
    }
}

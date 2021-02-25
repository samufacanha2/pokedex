import React, { Component } from 'react'
import Link from 'next/link'


export default class PokemonCard extends Component {

    state = {
        name:'',
        imageUrl:'',
        index:''

    }
    componentDidMount(){
        const {name,url} = this.props;
        const index= url.split('/')[url.split('/').length - 2];
        const imageUrl = `http://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index}.png?raw=true`
        this.setState({name, imageUrl, index})
    }

    render() {
        
        return (
            <Link href={`./pokemon?index=${this.state.index}`}>
                <div className="pcard cursor-pointer">
                
                    <h3> {this.state.name} #{this.state.index} </h3>
                        <img src={this.state.imageUrl}/>
                </div>
            </Link>
        )
    }
}

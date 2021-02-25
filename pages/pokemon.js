import React, { Component } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Pokemon({pokemon}) {

    console.log(pokemon);

        return (
        <div >
            <Head>
                <title>Pokédex</title>
                <link rel="icon" href="/Pokeball.svg" />
            </Head>

            <div id="__next">
            <div className="container">

            <Link href="/"><h1 className="text-center text-6xl items-start cursor-pointer">  Poké<span className="text-red-600">dex</span> </h1></Link>
            <div className="text-center items-center">
                <img src={`http://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemon.id}.png?raw=true`} id="PokemonImg"/>
                <h1 className="text-center text-4xl capitalize"> {pokemon.name} </h1>
                <br/>
                <div className="text-2xl text-left">
                    Type(s):
                    {pokemon.types.map((type, index)=> (<p key={index} className=" text-xl capitalize"> {type.type.name}</p>))}
                </div>
                <br/>
                <div className="text-2xl text-left">
                    Abilities:
                    {pokemon.abilities.map((abil, index)=> abil.is_hidden?
                    (<p key={index} className=" text-xl capitalize text-red-500"> {abil.ability.name} (Hidden Ability)</p>):
                    (<p key={index} className=" text-xl capitalize"> {abil.ability.name}</p>))}
                </div>
            </div>
            </div>
            </div>
            
                
        </div>
    )
}



export async function getServerSideProps({query}){
    const index = query.index;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
        const pokemon = await res.json();
        return {
            props: { pokemon }
        }
    } catch(err){
        console.error(err);
    }

}
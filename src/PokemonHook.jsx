import { useState } from 'react';

export default function PokemonHook(){
    //[variable of state, function to set variable] = useState(initial value of state) 
    let [pokemon, setPokemon] = useState({})
    let [someExampleState, setSomeExampleState] = useState("hello world")

    function getPokemon() {
        // don't do setState in top level of functional componenet
        setPokemon({name: "pikachu"})


    }
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <h1>{someExampleState}</h1>
            <button onClick={getPokemon} >Get the Pokemon!</button>
        </div>
    )
}
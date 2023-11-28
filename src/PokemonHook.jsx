import { useEffect, useState } from 'react';

export default function PokemonHook(){
    //[variable of state, function to set variable] = useState(initial value of state) 
    // Alternative to if structure in the return statement
    //let [pokemon, setPokemon] = useState({name: "Loading..."});
    let [pokemon, setPokemon] = useState({});
    // Don't do setState in top level of a functional component
    // setPokemon({name: "pikachu"})
    
    // async operations and promises must be executed inside
        // a new async block/scope within the useEffect callback
    let fetchData = async () => {
        let randomPokemonNumber = Math.floor(Math.random() * 1017) + 1;
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonNumber}`);
        let data = await response.json();
        // setPokemon({name: data.name})
        setPokemon(data);
    }


    function getPokemon(){
        fetchData()
    }
    //// useEffect(cb func) is equivalent to componentDidUpdate
    useEffect(() =>{
        console.log("It triggers everytime a state changes, because there's not a dependency array")
    })
    //runs at the start or on the first render of this component
    // useEffect(cb func, []) is equivalent to componentDidMount
    // Because the dependency array is empty
    useEffect(() => {
        fetchData();
        
    },[])

    //this one triggers when there is a change in the pokemon state
    useEffect(() => {
        console.log("there was a change in the pokemon state")
    }, [pokemon])

    //// useEffect(cb func (return), [])
    //the equivalent to componentDidUnmount
    useEffect(()=>{
        return (() => {
            console.log("It triggers when the component is unmounted");
        })
        
    },[])

    if (pokemon.name){
        return(
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt='API Pokemon' />
                <button onClick={getPokemon}>Get the pokemon!</button>
            </div>
        )
    } else {
        return(
            <div>
                <h1>No data to show...</h1>
            </div>
        )
    }
}
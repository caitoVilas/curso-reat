import React, { useEffect, useState } from 'react';

export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url);
            let json = await res.json();
            //console.log(json);
            json.results.forEach(async(el) => {
                let res = await fetch(el.url);
                let json = await res.json();
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }
                //setPokemons((pokemons) => [...pokemons,pokemon]);
            });
        };
        getPokemons("https://pokeapi.co/api/v2/pokemon/");
    },[]);
    return(
        <>
            <h2>Peticiones asincronas con hooks</h2>
            {pokemons.length === 0 ?
             (<h3>Cargando...</h3>)
             :
             (pokemons.map((el) => <Pokemon key={el.name}
                                            name={el.name}
                                            avatar={el.avatar} />))
        }
        </>
    );
}

function Pokemon(props){
    <figure>
        <img src={props.avatar} alt={props.name}></img>
        <figcaption>{props.name}</figcaption>
    </figure>
}
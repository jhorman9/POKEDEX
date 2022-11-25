import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CharacterItem = ({url}) => {

    const [ charactersPokemon, setCharactersPokemon ] = useState({})

    useEffect(()=> {
        axios.get(url)
            .then(res => setCharactersPokemon(res.data))
            .catch(error => console.log(error.response.data))
    }, [])


    return (
        <>
            <Link to={`/pokedexdetail/${charactersPokemon.id}`}>
                <h2>{charactersPokemon.name?.toUpperCase()}</h2>
                <img src={charactersPokemon.sprites?.other.dream_world.front_default} alt="" />
            </Link>
            <div className="container-info">
                <div className="info-card">
                    <p><b>Tipo:</b> {charactersPokemon.types?.[0].type.name}.</p>
                    <p><b>Peso:</b> {charactersPokemon.weight}.</p> 
                </div>
                <div className="info-card">
                    <p><b>height:</b> {charactersPokemon.height}.</p>
                    <p><b>height:</b> {charactersPokemon.height}.</p>
                </div> 
            </div>
            <div className="container-img-leter"></div>
        </>
        
        
    );
};

export default CharacterItem;
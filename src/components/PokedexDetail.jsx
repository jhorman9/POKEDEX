import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PokedexDetail = () => {

    const [ pokeCharacter, setPokeCharacter ] = useState({});
    const [ status, setStatus ] = useState("");
    const [ loading, setLoading ] = useState(true);
    const {id} = useParams();


    useEffect(()=> {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => {
                setLoading(false);
                setPokeCharacter(res.data)})
            .catch(error => setStatus(error.response.status))
    }, [])

    const navigate = useNavigate()

    const stats = pokeCharacter.stats;
    const movements = pokeCharacter.moves;

    if(status == 404){
        return(
            <>
            <div className='status'>
                <div className='btn-back'>
                    <button onClick={() => navigate(-1)}> <i className="fa-solid fa-arrow-left"></i> </button>
                </div>
                <div className='alert-pokemon'>
                    <div className="wobbling-10"></div>
                    <h2>Pokemon no encontrado</h2>
                </div>
            </div>
            </>
        )
    }

    console.log(pokeCharacter)

    return (
        <>
        { loading ? (
            <div className='loading_content'>
                <div className="classic-6"></div>
                <div className="wobbling-10"></div>
            </div>
        ) : (
        <div className='poke-per-id'>
            <div className="btn-previus">
                <i className="fa-solid fa-circle-left" onClick={()=> navigate('/pokedex')}></i>
            </div>
            <div className="pokeball"></div>
            <div className="set-contain-movements">
                <div className="pokeletter-detail"></div>
                <div className="contain-characters-pokedetail">
                    <div className="main-features">
                        <div className="content-img">
                            <img src={pokeCharacter.sprites?.other["official-artwork"].front_default} alt="" />
                            <div className="duo-height-weight">
                                <p><b>Height:</b> {pokeCharacter.height}</p>
                                <p><b>weight:</b> {pokeCharacter.weight}</p>
                            </div>
                            <h1>{pokeCharacter.name?.toUpperCase()}</h1>
                            <p className='numberid'><b>#</b> {pokeCharacter.id}</p> 
                        </div>
                    </div>
                    <div className="contain-type-and-abilities">
                        <section className='types'>
                            <h2>Types</h2>
                            <div className="duo-types">
                                <div className='type1'><p>{pokeCharacter.types?.[0]?.type.name}</p></div>
                                <div className='type2'><p>{pokeCharacter.types?.[1]?.type.name}</p></div>
                            </div>
                        </section>
                        <section className='abilities'>
                            <h2>Abilities</h2>
                            <div className="duo-abilities">
                                <div className='abilities1'><p>{pokeCharacter.abilities[0]?.ability.name}</p></div>
                                <div className='abilities2'><p>{pokeCharacter.abilities[1]?.ability.name}</p></div>
                            </div>
                        </section>
                    </div>
                    <section className="stats-bases">
                        <h2>Stats Bases</h2>
                        <div className="content-stats">
                            {stats?.map(stat => (
                                <p key={stat.stat.url}><b>{stat.stat.name}:</b> {stat.base_stat}</p>
                            ))}
                        </div>
                    </section>
                </div>
                <section className='movements'>
                    <h2>Movements</h2>
                    <ul>
                        {movements?.map(move=> (
                            <li key={move.move.url}>
                                {move.move.name}
                                <div className="line"></div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
        )}
        </>
    );
};

export default PokedexDetail;
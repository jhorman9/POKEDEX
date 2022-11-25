import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slice/pokeName.slice';
import fondopoke from '../assets/pokeFondo1.webp'

const InputName = () => {

    const [inputName, setInputName] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const searchName = () =>{
        dispatch(changeName(inputName))
        navigate('/pokedex')
    }

    return (
        <div className='welcome-page'>
            <img  src={fondopoke} alt="" />
            <section className='login-page'>
                <h1>¡Bienvenido a Pokedex! Escribe tú nombre para iniciar tú PokeAventura 🕵️‍♂️.</h1>
                <input  type="text"
                        value={inputName}
                        onChange={(e)=> setInputName(e.target.value)}
                        placeholder='Escribe tú nombre Aquí'
                />
                <button onClick={searchName}>Listo</button>
            </section>
        </div>
    );
};

export default InputName;
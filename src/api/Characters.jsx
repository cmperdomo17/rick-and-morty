import React, { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import { Link } from 'react-router-dom';

function Characters() {
    // UseStat crea un estado para almacenar los personajes
    const [characters, setCharacters] = useState([]);

    // UseEffect hace la petición a la API (fetching) y almacena los datos en el estado characters
    useEffect(() => {
        fetch('rickandmortyapi-production-105f.up.railway.app')
        // Convierte la respuesta en formato JSON
        .then(response => response.json())
        // Almacena los datos en la variable data
        .then(data => {
            setCharacters(data.results); // Almacena los personajes en el estado
        });
    }, []);

    return (
        <div className='flex flex-col my-6 mx-6 gap-6'>
            <div className='flex flex-row justify-between text-center'>
                <Link to='/'>
                    <button className='bg-orange-200 hover:bg-orange-300 text-stone-800 font-bold py-2 px-4 rounded-full'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
                    </button>
                </Link>
                <h1 className='text-4xl font-extrabold text-orange-200 font-sans pr-16'>CHARACTERS</h1>
                <div></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Se itera sobre el estado characters y se renderiza un componente Card por cada personaje */}
                {characters.map(character => (
                    <Card 
                        name={character.name} 
                        image={character.image}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                    />
                ))}
            </div>
        </div>
    )
}

export default Characters;
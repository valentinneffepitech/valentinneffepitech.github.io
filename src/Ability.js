import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Ability() {
    const { name } = useParams()
    const [pokemons, setPokemons] = useState([]);
    const [effect, setEffect] = useState('');
    const [texte, setTexte] = useState('');
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/ability/' + name).then(res => res.json()).then(data => {
            console.log(data);
            setPokemons(data.pokemon)
            setEffect(data.effect_entries[1].effect)
            setTexte(data.flavor_text_entries[0].flavor_text)
        })
        document.title = name.charAt(0).toUpperCase() + name.slice(1)
    }, [name])

    const liste = pokemons.map((object) => {
        return (<li className="list-group-item"><Link className='nav-link' to={'/pokemon/' + object.pokemon.name}>{object.pokemon.name.charAt(0).toUpperCase() + object.pokemon.name.slice(1)}</Link></li>);
    })
    return (
        <div className='container'>
            <h2 className='text-decoration-underline'>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <i>"{texte}"</i>
            <div>
                <h4 className='text-left mt-3'>Effect :</h4>
                <p>{effect}</p>
            </div>
            <div>
                <h4 className='text-left mt-3'>Pokemons with this ability :</h4>
                <div id="list_pokemon">
                    <ul className='list-group'>
                        {liste}
                    </ul>
                </div>
            </div>
        </div>
    )
}

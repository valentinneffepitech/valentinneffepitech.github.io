import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Move() {
    const { name } = useParams();
    const [Dmgtype, setDmgType] = useState('');
    const [type, setType] = useState('');
    const [infos, setinfos] = useState({});
    const [effect, setEffect] = useState('');
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/move/' + name).then(res => res.json()).then(data => {
            setDmgType(data.damage_class.name);
            setType(data.type.name);
            setEffect(data.effect_entries[0].effect);
            setPokemon(data.learned_by_pokemon)
            setinfos(data);
            console.log(data);
        })
    }, [name])
    document.title = name.charAt(0).toUpperCase() + name.slice(1);
    const resumepokemon = pokemon.map((poke) => (<div className='element'><Link className="nav-link" to={`/pokemon/${poke.name}`}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</Link></div>))
    return (
        <div className='container mt-4'>
            <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
            <i>{effect}</i>
            <table className='table mt-4'>
                <tbody>
                    <tr>
                        <td>Type</td>
                        <td><span className={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</span></td>
                    </tr>
                    <tr>
                        <td>Damage Type</td>
                        <td>{Dmgtype.charAt(0).toUpperCase() + Dmgtype.slice(1)}</td>
                    </tr>
                    <tr>
                        <td>Accuracy</td>
                        <td>{infos.accuracy}</td>
                    </tr>
                    <tr>
                        <td>Power</td>
                        <td>{infos.power}</td>
                    </tr>
                    <tr>
                        <td>PP</td>
                        <td>{infos.pp}</td>
                    </tr>
                    <tr>
                        <td>Priority</td>
                        <td>{infos.priority}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <h5>Pokemons learning {name.charAt(0).toUpperCase() + name.slice(1)}:</h5>
                <div className="display_pokemon">
                    {resumepokemon}
                </div>
            </div>
        </div>
    )
}

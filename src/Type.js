import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Type() {
    const { name } = useParams();
    const [doubleDmgFrom, setDblDmgfrom] = useState([]);
    const [doubleDmgTo, setDblDmgTo] = useState([]);
    const [halfDmgFrom, setHalfDmgfrom] = useState([]);
    const [halfDmgTo, setHalfDmgTo] = useState([]);
    const [noDmgFrom, setnoDmgfrom] = useState([]);
    const [noDmgTo, setnoDmgTo] = useState([]);
    const [moves, setMoves] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type/' + name).then(res => res.json()).then(data => {
            setDblDmgfrom(data.damage_relations.double_damage_from);
            setDblDmgTo(data.damage_relations.double_damage_to);
            setHalfDmgfrom(data.damage_relations.half_damage_from);
            setHalfDmgTo(data.damage_relations.half_damage_to);
            setnoDmgfrom(data.damage_relations.no_damage_from);
            setnoDmgTo(data.damage_relations.no_damage_to);
            setMoves(data.moves);
            setPokemon(data.pokemon);
            console.log(data.pokemon[0].pokemon.name)
        })
    }, [name])
    const resumeDblFrom = doubleDmgFrom.map((dmg) => (<li className={"list-group-item " + dmg.name}><Link className="nav-link" to={'/type/' + dmg.name}>{dmg.name}</Link></li>));
    const resumeDblTo = doubleDmgTo.map((dmg) => (<li className={"list-group-item " + dmg.name}><Link className="nav-link" to={'/type/' + dmg.name}>{dmg.name}</Link></li>));
    const resumeHalfFrom = halfDmgFrom.map((dmg) => (<li className={"list-group-item " + dmg.name}><Link className="nav-link" to={'/type/' + dmg.name}>{dmg.name}</Link></li>));
    const resumeHalfTo = halfDmgTo.map((dmg) => (<li className={"list-group-item " + dmg.name}><Link className="nav-link" to={'/type/' + dmg.name}>{dmg.name}</Link></li>));
    const resumeNoFrom = noDmgFrom.map((dmg) => (<li className={"list-group-item " + dmg.name}><Link className="nav-link" to={'/type/' + dmg.name}>{dmg.name}</Link></li>));
    const resumeNoTo = noDmgTo.map((dmg) => (<li className={"list-group-item " + dmg.name}><Link className="nav-link" to={'/type/' + dmg.name}>{dmg.name}</Link></li>));
    const resumemoves = moves.map((atk) => (<div className={'element'}><Link className="nav-link" to={`/move/${atk.name}`}>{atk.name}</Link></div>))
    const resumepokemon = pokemon.map((poke) => (<div className={poke.pokemon.name + ' element'}><Link className="nav-link" to={`/pokemon/${poke.pokemon.name}`}>{poke.pokemon.name}</Link></div>));
    return (
        <div className='container'>
            <h2 className={name + " title"}>{name}</h2>
            <div className='triggers border rounded'>
                <ul className='list-group affects mt-4'><h5>Is Weak Against :</h5>
                    {resumeDblFrom}
                </ul>

                <ul className='list-group affects mt-4'><h5>Is Strong Against :</h5>
                    {resumeDblTo}
                </ul>

                <ul className='list-group affects mt-4'><h5>Is Effective Against :</h5>
                    {resumeHalfFrom}
                </ul>


                <ul className='list-group affects mt-4'><h5>Is Not Effective Against :</h5>
                    {resumeHalfTo}
                </ul>


                <ul className='list-group affects mt-4'><h5>Is Immune Against :</h5>
                    {resumeNoFrom}
                </ul>


                <ul className='list-group affects mt-4'><h5>Has no Effect Against :</h5>
                    {resumeNoTo}
                </ul>
            </div>
            <div className='d-flex justify-content-evenly border rounded mb-3 p-3'>
                <div className='mt-4 col-5'>
                    <h5>Moves :</h5>
                    <div className="display_pokemon">
                        {resumemoves}
                    </div>
                </div>
                <div className='mt-4 col-5'>
                    <h5>Pokemons :</h5>
                    <div className="display_pokemon">
                        {resumepokemon}
                    </div>
                </div>
            </div>
        </div>
    )
}

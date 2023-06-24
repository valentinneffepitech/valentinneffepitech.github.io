import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DetailPokemon() {
    const { name } = useParams();
    const [image, setImage] = useState('');
    const [stats, setStats] = useState([]);
    const [types, setTypes] = useState([]);
    const [talents, setTalents] = useState([]);
    const [theme, setTheme] = useState('');
    const [dream, setDream] = useState('');
    const [moves, setMoves] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/' + name).then(res => res.json()).then(data => {
            setImage(data.sprites.other["official-artwork"].front_default)
            setStats(data.stats);
            setTypes(data.types);
            setTheme('theme-' + data.types[0].type.name);
            setTalents(data.abilities);
            setDream(data.sprites.other.dream_world.front_default);
            setMoves(data.moves);
            console.log(data)
        })
        document.title = name.charAt(0).toUpperCase() + name.slice(1)
    }, [name])
    useEffect(() => {
        console.log(moves)
    }, [moves])
    const resumestat = stats.map((info) => (<tr><td>{info.stat.name}</td><td>{info.base_stat}</td></tr>));
    const resumetype = types.map((info) => (<div className={info.type.name}><Link to={'/type/' + info.type.name} className='nav-link'>{info.type.name.toUpperCase()}</Link></div>));
    const resumemoves = moves.map((atk) => (<div className={'element'}><Link className="nav-link" to={`/move/${atk.move.name}`}>{atk.move.name}</Link></div>))
    const resumetalent = talents.map((skill) => {
        if (skill.is_hidden) {
            return (<li className='list-group-item active'><Link to={`/ability/${skill.ability.name}`} className="nav-link">{skill.ability.name}</Link></li>)
        }
        return (<li className='list-group-item'><Link to={`/ability/${skill.ability.name}`} className="nav-link">{skill.ability.name}</Link></li>)
    });
    return (
        <div className="container">
            <h3 className='m-3'>{name.charAt(0).toUpperCase() + name.slice(1)}'s Profile</h3>
            <div className='d-flex justify-content-center mb-4'>
                {resumetype}
            </div>
            <div className="d-flex">
                <div id="description">
                    <table id="stats" className="table">
                        <thead>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resumestat}
                        </tbody>
                    </table>
                    <Link to={image} target='_blank' title={name.charAt(0).toUpperCase() + name.slice(1)}><img className={`img-fluid ${theme}`} src={image} alt="sprite" /></Link>
                </div>
            </div>
            <div className='d-flex justify-content-around align-items-center mt-4'>
                <div id="details">
                    <h4>Talents:</h4>
                    <ul className="list-group">
                        {resumetalent}
                    </ul>
                </div>
                <Link to={dream} target='_blank' title={name.charAt(0).toUpperCase() + name.slice(1)}><img src={dream} alt="Dream Variant" /></Link>
            </div>
            <div>
                <h4 className='mt-4'>Move Pool</h4>
                <div id="display_pokemon">
                    {resumemoves}
                </div>
            </div>
        </div >
    )
}

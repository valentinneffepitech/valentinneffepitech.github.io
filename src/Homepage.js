import React, { useState } from 'react'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useSearchParams } from 'react-router-dom';

export default function Homepage() {
    const [page, setPage] = useState(0);
    const limit = useState(150);
    const [result, setResult] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + page, {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            setResult(data.results);
        })
        if (page === 0) {
            document.querySelector('#prev').style.visibility = 'hidden';
        } else {
            document.querySelector('#prev').style.visibility = '';
        }
        document.title = "Pokedex React"
    }, [page])

    useEffect(() => {
        if (result.length < limit) {
            document.querySelector('#nxt').style.visibility = 'hidden';
        } else {
            document.querySelector('#nxt').style.visibility = '';
        }
    }, [result, limit])
    const pokemon = result.map(
        (poke) => (<div className="element"><Link to={`/pokemon/${poke.name}`} className='nav-link'>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</Link></div>)
    )
    return (
        <div className="listing_pokemon">
            <div id="display_pokemon">
                {pokemon}
            </div>
            <div id="controls">
                <button id="prev" className="btn btn-secondary" onClick={() => {
                    setPage(parseInt(page) - 150);
                }}>Previous</button>
                <button id="nxt" className="btn btn-secondary" onClick={() => {
                    setPage(parseInt(page) + 150);
                }}>Next</button>
            </div>
        </div>
    )
}

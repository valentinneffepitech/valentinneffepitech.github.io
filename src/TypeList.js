import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function TypeList() {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type', {
            method: 'GET'
        }).then(res => {
            return res.json()
        }).then(data => {
            setList(data.results);
            console.log(data)
        })
    }, [])
    const types = list.map((element) => {
        if (element.name !== 'shadow' && element.name !== 'unknown') {
            return (<li className='list-group-item'><Link to={'/type/' + element.name} className={element.name + ' nav-link'}>{element.name}</Link></li>)
        } else {
            return (<li className={element.name + ' list-group-item impossible'} >{element.name}</li>);
        }
    }
    )
    return (
        <div className='sidebar'>
            <ul>
                {types}
            </ul>
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div id="header">
            <h2><Link to="/" className='nav-link'>Who's that pokemon?</Link></h2>
        </div>
    )
}

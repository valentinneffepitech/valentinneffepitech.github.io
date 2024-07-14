/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
import React from 'react'

export const Navbar = ({ shown, closeNav, logo }) => {
    return (
        <nav className={shown ? "shown" : "hidden"}>
            <a onClick={() => closeNav(false)} href="#header">
                <img src={logo} alt="logo" id="logo_menu" />
            </a>
            <ul>
                <li>
                    <a className='nav-link text-light' onClick={() => {
                        closeNav(false)
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }}>Accueil</a>
                </li>
                <hr />
                <li>
                    <a onClick={() => closeNav(false)} className='nav-link text-light' href="#about">Mon parcours</a>
                </li>
                <hr />
                <li>
                    <a onClick={() => closeNav(false)} className='nav-link text-light' href="#technos">Technologies</a>
                </li>
                <hr />
                <li>
                    <a onClick={() => closeNav(false)} className='nav-link text-light' href="#projects">Projets</a>
                </li>
                <hr />
                <li>
                    <a onClick={() => closeNav(false)} className='nav-link text-light' href="#contact">Me contacter</a>
                </li>
            </ul>
        </nav>
    )
}
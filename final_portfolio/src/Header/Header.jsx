import React from 'react'

export const Header = ({ logo }) => {
    return (
        <section id="header">
            <div id="header_text">
                <p>
                    Portfolio
                </p>
                <h1>Valentin NEFF, Développeur Web</h1>
                <a href="#about" title="Qui suis-je ?">
                    En savoir plus
                </a>
            </div>
            <div id="main_image">
                <img src={logo} />
            </div>
        </section>
    )
}

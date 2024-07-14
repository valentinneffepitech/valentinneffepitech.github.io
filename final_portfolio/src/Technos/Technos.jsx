import React, { useState } from 'react'
import { Carroussel } from './Carroussel/Carroussel'
import { CarrousselDetails } from './CarrousselDetails/CarrousselDetails'
import { MobileToggleTechno } from './Mobile/MobileToggleTechno';
import dev from "../assets/dev.png"

export const Technos = () => {

    const [show, setShow] = useState(0);
    const technoList = [
        {
            "id": 1,
            "title": "HTML",
            "type": "squelette du web"
        },
        {
            "id": 3,
            "title": "Javascript",
            "type": "language principalement front-end"
        },
        {
            "id": 2,
            "title": "Php",
            "type": "language orienté back-end"
        },
        {
            "id": 4,
            "title": "React",
            "type": "framework javascript"
        },
        {
            "id": 5,
            "title": "NodeJS",
            "type": "framework javascript"
        },
        {
            "id": 6,
            "title": "Symfony",
            "type": "framework php"
        },
        {
            "id": 7,
            "title": "Laravel",
            "type": "framework php"
        },
        {
            "id": 8,
            "title": "Wordpress",
            "type": "cms"
        },
        {
            "id": 9,
            "title": "Woocommerce",
            "type": "plugin wordpress"
        },
        {
            "id": 10,
            "title": "SQL",
            "type": "base de données relationnel"
        },
        {
            "id": 11,
            "title": "Mongo",
            "type": 'base de données dite "NoSQL"'
        },
        {
            "id": 12,
            "title": "Docker",
            "type": "container"
        },
        {
            "id": 15,
            "title": "Websocket",
            "type": "Interactions en temps réel"
        },
        {
            "id": 13,
            "title": "Python",
            "type": "language"
        },
        {
            "id": 14,
            "title": "Java",
            "type": "language"
        },
        {
            "id": 16,
            "title": "CSS",
            "type": "Style"
        }
    ]

    const typeTechnos = [
        {
            "id": 1,
            "title": "Languages",
            "description": [
                "HTML",
                "CSS",
                "Javascript",
                "Php",
                "Python",
                "Java",
            ]
        },
        {
            "id": 2,
            "title": "Framework",
            "description": [
                "Symfony",
                "Laravel",
                "React",
                "NodeJS",
                "Django",
                "Spring",
            ],
        },
        {
            "id": 3,
            "title": "Base de données",
            "description": [
                "SQL",
                "Postgresql",
                "Mongo",
                "SQLite"
            ],
        },
        {
            "id": 4,
            "title": "Container",
            "description": [
                "Docker",
            ]
        },
        {
            "id": 5,
            "title": "CMS",
            "description": [
                "Wordpress",
                "Woocommerce"
            ],
        },
        {
            "id": 6,
            "title": "Web Sockets",
            "description": [
                "Websocket",
            ],
        }
    ]

    return (
        <section id="technos">
            <h2>
                Technologies diverses
            </h2>
            <img src={dev} alt="Technique" />
            {
                window.innerWidth > 1200 ?

                    <div id="techno_carroussel">
                        <div id="techno_carroussel_holder">
                            <Carroussel technos={technoList} show={show} setShow={setShow} />
                        </div>
                    </div> :
                    <div id="techno_dropdown">
                        <MobileToggleTechno technos={typeTechnos} />
                    </div>
            }
        </section>
    )
}

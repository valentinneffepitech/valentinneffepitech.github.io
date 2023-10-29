import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const Projects = ({ defineProject }) => {
    const [showProjects, setShowProjects] = useState(false);
    const ListeLanguages = [
        {
            name: "Javascript",
            description: `<h2>Javascript</h2><p>J'ai réalisés plusieurs projets en lien avec mes études que ce soit en créant des jeux (morpion, puissance 4, Twitter Like, etc...), mais également de nombreuses fonctionnalités au cours de mon apprentissage pour l'entreprise dans laquelle j'ai travaillé. (convertisseurs, requêtes AJAX, sliders, carroussels, ...)</p><img src="projets/JS/p4.png" alt="puissance 4"/><img src="projets/JS/battleship.png" alt="BattleShip"/>`,
            picture: "Javascript.png"
        },
        {
            name: "React",
            description: `<h2>React</h2><p>Après avoir maitrisé le Javascript, j'ai réalisé plusieurs projets avec ReactJS. Par exemple : un chat IRC, un site E-Commerce et même un Pokédex</p><img src="projets/MERN/pex.png" alt="Projet Ecommerce"/><img src="projets/MERN/pokedex.png" alt="Pokedex"/>`,
            picture: "React.png"
        },
        {
            name: "PHP",
            description: `<h2>Php</h2><p>Incontournable dans le domaine du web, PHP était une étape nécessaire dans mon cursus. <br/>J'ai donc appris à l'utiliser tel quel ou bien via des frameworks (Laravel, Symfony)</p><img src="projets/PHP/laravel.png" alt="Projet FreeAds"/><img src="projets/PHP/meetic.png" alt="MyMeetic/CrushCorner"/>`,
            picture: "php.png"
        },
        {
            name: "Wordpress et Woocommerce",
            description: `<h2>Wordpress / WOOCommerce</h2><p>D'abord abordé en créant un thème, j'ai ensuite approfondis ma connaissance de Wordpress en entreprise et j'y ai appris à utiliser WooCommerce pour gérer toute la partie produit, commande, etc...</p><img src="projets/wordpress/snapSquad.png" alt="Wordpress"/>`,
            picture: "wordpress_woocommerce.png"
        },
    ]
    const chooseProject = (index) => defineProject(ListeLanguages[index])
    return (
        <div id="ProjectList" className={showProjects ? 'shown modal' : 'modal'}>
            <button id="projectIcon" onClick={() => setShowProjects(prev => !prev)}>
                <FontAwesomeIcon icon={faCode} size="2x" color='#5762D5' />
            </button>
            <div id="language_dispenser">
                {ListeLanguages.map((language, index) =>
                (
                    <div className='language_card' key={index} onClick={() => chooseProject(index)}>
                        <img src={language.picture} />
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Projects

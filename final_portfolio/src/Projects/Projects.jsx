import React, { useEffect, useState } from 'react'
import { ProjectDetails } from './ProjectDetails/ProjectDetails';

export const Projects = () => {

    const [chosen, setChosen] = useState(false);

    const projectList = [
        {
            id: 1,
            title: "My Cinema",
            source: "/projects/mycinema.png",
            technologies: [
                "React",
                "Php",
                "SQL",
                "CSS"
            ]
        },
        {
            id: 2,
            title: "My Pokedex",
            source: "/projects/pokedex.png",
            technologies: [
                "React",
                "Javascript",
                "CSS",
                "Mongo"
            ]
        },
        {
            id: 3,
            title: "Projet E-Commerce",
            source: "/projects/pex.png",
            technologies: [
                "React",
                "Laravel",
                "SQL",
                "CSS",
            ]
        }
    ]

    useEffect(() => {
        if (chosen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }, [chosen])

    return (
        <section id="projects">
            <h2>Projets</h2>
            <div id="project_holder">
                {
                    projectList.map(project => (
                        <div key={project.id} style={{ "--position": project.id }} className='project_card' onClick={() => setChosen(project)}>
                            <img src={project.source} className='project_card__img' />
                            <p className='project_card__title'>
                                <span>
                                    {project.title}
                                </span>
                                <span className='project_infos'>
                                    Cliquez pour en savoir plus
                                </span>
                            </p>
                        </div>
                    ))
                }
            </div>
            {
                chosen && <ProjectDetails project={chosen} reset={setChosen} />
            }
        </section>
    )
}

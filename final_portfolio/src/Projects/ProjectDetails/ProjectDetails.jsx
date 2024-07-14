/* eslint-disable react/prop-types */
import { X } from 'lucide-react'
import React from 'react'

export const ProjectDetails = ({ project, reset }) => {
    return (
        <div id="project_details">
            <X onClick={() => reset(false)} />
            <h3 id="project_details_title">
                {project.title}
            </h3>
            <img src={project.source} id="project_details_img" />
            <div id="project_details_body">
                <p>
                    Technologies utilisées&nbsp;:
                </p>
                <ul id="project_details_technologies" style={{ "--technoQuantities": project.technologies.length }}>
                    {project.technologies.map(techno => (
                        <li key="techno.id" title={techno}>
                            <img src={"/technos/" + techno + ".png"} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

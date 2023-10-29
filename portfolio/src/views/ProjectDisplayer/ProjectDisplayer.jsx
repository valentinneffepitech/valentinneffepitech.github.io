import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProjectDisplayer = ({ project, resetProject }) => {
    if (project) {
        return (
            <div id="projectDisplayer">
                <>
                    <FontAwesomeIcon icon={faXmark} size="2x" color='#fff' style={{ cursor: "pointer" }} onClick={() => resetProject(null)} />
                    <div id="projectShown">
                        <figure>
                            <img src={project && project.picture} alt={project && project.title} />
                        </figure>
                        <div dangerouslySetInnerHTML={{ __html: project.description }}>
                        </div>
                    </div>
                </>
            </div>
        )
    }
}

export default ProjectDisplayer

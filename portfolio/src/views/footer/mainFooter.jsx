import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

export default function MainFooter() {
    return (
        <footer>
            <div id="socials">
                <div className="social">
                    <a href="https://www.linkedin.com/in/valentin-neff-10878a1a2/" rel="noreferrer" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} size='3x' color='#646cff' />
                    </a>
                    <button className="social-link linkedin" title="Cliquez sur l'icone">LinkedIn</button>
                </div>
                <div className='social'>
                    <a href="https://github.com/valentinneffepitech/Portfolio" rel="noreferrer" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
                    </a>
                    <button className="social-link github" title="Cliquez sur l'icone">GitHub</button>
                </div>
                <div className='social'>
                    <a href="/public/CV_NEFF_VALENTIN.pdf" rel="noreferrer" target='_blank' download={"CV Valentin Neff"}>
                        <FontAwesomeIcon icon={faFilePdf} size="3x" color="red" />
                    </a>
                    <button className="social-link file" title="Cliquez sur l'icone">Mon CV</button>
                </div>
            </div>
        </footer >
    )
}

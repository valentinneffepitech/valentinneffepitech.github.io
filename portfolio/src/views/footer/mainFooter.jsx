import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

export default function MainFooter() {
    return (
        <footer>
            <div id="socials">
                <div className="social">
                    <a title="LinkedIn" href="https://www.linkedin.com/in/valentin-neff-10878a1a2/" rel="noreferrer" target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} size='3x' color='#646cff' />
                    </a>
                </div>
                <div className='social'>
                    <a title="GitHub" href="https://github.com/valentinneffepitech/Portfolio" rel="noreferrer" target='_blank'>
                        <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
                    </a>
                </div>
                <div className='social'>
                    <a title='Mon CV' href="/CV_NEFF_VALENTIN.pdf" rel="noreferrer" target='_blank' download={"CV Valentin Neff"}>
                        <FontAwesomeIcon icon={faFilePdf} size="3x" color="red" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

import { useState } from 'react'
import MainFooter from './views/footer/mainFooter';
import MainHeader from './views/header/MainHeader';
import Mailer from './views/mail/mailer';
import Main from './views/main/Main';
import ProjectDisplayer from './views/ProjectDisplayer/ProjectDisplayer';
import Projects from './views/projects/Projects';

function App() {

  const [hasAccepted, setAcceptation] = useState(false);
  const [project, setProject] = useState(null);

  return (
    <>
      {!hasAccepted ?
        <main id="notAccepted">
          <button id="acceptButton" onClick={() => setAcceptation(true)}>
            Acceder au portfolio !
          </button>
        </main>
        :
        <>
          <Mailer />
          <Projects defineProject={setProject} />
          <ProjectDisplayer project={project} resetProject={setProject} />
          <main id="Accepted">
            <MainHeader />
            <Main />
          </main>
          <MainFooter />
        </>
      }
    </>
  )
}

export default App

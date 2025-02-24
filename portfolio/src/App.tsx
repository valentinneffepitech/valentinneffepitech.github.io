import './App.scss'
import { Menu } from './components/Menu';
import { Accueil } from './parts/Accueil';
import { Contact } from './parts/Contact';
import { Links } from './parts/Links';
import { Projects } from './parts/Projects';
import { Propos } from './parts/Propos';

function App() {

  return (
    <>
      <Menu/>
      <Accueil/>
      <Propos/>
      <Projects/>
      <Links/>
      <Contact/>
    </>
  )
}

export default App

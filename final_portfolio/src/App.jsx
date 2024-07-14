import { useEffect, useState } from 'react';
import './App.scss'
import { Navbar } from './Navbar/Navbar';
import logo from './assets/logo.png'
import { Menu, X } from 'lucide-react';
import { Header } from './Header/Header';
import reactLogo from './assets/react.svg';
import { About } from './About/About';
import { Technos } from './Technos/Technos';
import { Projects } from './Projects/Projects';
import { Contact } from './Contact/Contact';

function App() {
  const [showNav, setShowNav] = useState(false);
  const windowWidth = window.innerWidth;

  const adaptToScroll = () => {
    const div = document.querySelector('#projects').getBoundingClientRect();
    if (div.top <= 100 && div.bottom >= 0) {
      if (!document.body.classList.contains('dark')) {
        document.body.classList.add('dark')
      }
    } else {
      if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
      }
    }
  }

  window.onscroll = () => adaptToScroll();

  return (
    <>
      <div id="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <img src={logo} alt="logo" />
      </div>
      <div id="toggle" onClick={() => setShowNav(prev => !prev)}>
        {
          showNav ?
            <X className='icon' color={"#fff"} size={35} />
            :
            <Menu className="icon" size={30} />
        }
      </div>
      <Navbar shown={showNav} closeNav={setShowNav} logo={logo} />
      <Header logo={reactLogo} />
      <About />
      <Technos />
      <Projects />
      <Contact />
    </>
  )
}

export default App

import './App.css';
import './App.scss';
import Header from './Header';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage';
import DetailPokemon from './DetailPokemon';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ability from './Ability';
import Type from './Type';
import Move from './Move';
import TypeList from './TypeList';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <TypeList /> */}
      <Routes>
        <Route path='/' title="Pokedex Reactif" element={<Homepage />}></Route>
        <Route path='/pokemon/:name' element={<DetailPokemon />}></Route>
        <Route path='/ability/:name' element={<Ability />}></Route>
        <Route path='/type/:name' element={<Type />}></Route>
        <Route path='/move/:name' element={<Move />}></Route>
        <Route path='/*' element={"You lost yourself obviously, click on the title to return to the main page."}></Route>
      </Routes>
    </div>
  );
}

export default App;

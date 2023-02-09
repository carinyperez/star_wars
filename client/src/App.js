import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages//CharactersPage/CharactersPage';
import Character from './components/Character/Character';
import FilmsPage from './pages/FilmsPage/FilmsPage';
import Film from './components/Film/Film';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route  path='/characters' element={<CharacterPage/>}/>
        <Route  path='/characters/:id' element={<Character/>}/>
        <Route path='/films' element={<FilmsPage/>}/>
        <Route path='/films/:id' element={<Film/>}/>
      </Routes>
    </Router>
  );
}

export default App;

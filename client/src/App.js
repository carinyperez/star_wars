import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages//CharactersPage/CharactersPage';
import Character from './components/Character';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route  path='/characters' element={<CharacterPage/>}/>
        <Route  path='/characters/:id' element={<Character/>}/>
      </Routes>
    </Router>
  );
}

export default App;

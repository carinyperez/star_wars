import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages//CharactersPage/CharactersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route  path='/characters' element={<CharacterPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

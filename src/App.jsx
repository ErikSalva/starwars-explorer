import { Home } from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Films from './Pages/Films'
import People from './Pages/People';
import Planets from './Pages/Planets';
import Species from './Pages/Species';
import Starships from './Pages/Starships';
import Vehicles from './Pages/Vehicles';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/films' element={<Films/>} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/species" element={<Species />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>


    </Router>
  )
}

export default App

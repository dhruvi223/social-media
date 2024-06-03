import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import ProfilPage from './pages/ProfilPage';
import Signup from './pages/Authentication/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/profile' element={<ProfilPage/>}/>
      <Route path='/auth' element={<Signup/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

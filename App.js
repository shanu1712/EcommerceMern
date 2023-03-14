import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Watch from './pages/Watch';
import Register from './pages/Register';
import Login from './pages/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='home'>
          
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/Watch" element={<Watch/>}/>
        
        <Route path="/Register" element={<Register/>}/>
        
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Dashboard from './dashboard';
import './App.css';


function App() {
  return (
   <Router>
    <div>
      <Routes>
      <Route path='/'element={<Login />}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
   </Router>
  );
}

export default App;

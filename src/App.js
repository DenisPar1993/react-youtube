import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
           <Route exact path='/' element={<Home/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;

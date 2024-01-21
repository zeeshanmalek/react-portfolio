import './App.css';
import { Route,Routes, Link, BrowserRouter} from 'react-router-dom';
import Education from './Components/Education';
import Home from './Components/home';
import Skill from './Components/skill';
import About from './Components/About';

function App() {
  return (
   <>
   <BrowserRouter>
   <div className='nav-parant'>
   <nav>
    
        <div className='nav-logo'>
           <Link to='/'> Jisanahmad's Portfolio </Link>
        </div>
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/skills'>Skills</Link>
            <Link  to='/education'>Education</Link>
            <Link to='/About'>About</Link>
        </div>
        
      </nav>
      
      
   </div>
   
      
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/skills' Component={Skill}></Route>
        <Route path='/education' Component={Education}></Route>
        <Route path='/about' Component={About}></Route>
      </Routes>
      
     <footer>
     <div className='line' style={{zIndex: 1}}></div>
      <div>
      &copy; Created By <a href='jisan'>Jisanahmad Malek</a>
      </div>
     </footer>
     </BrowserRouter>
   </>
  );
}

export default App;

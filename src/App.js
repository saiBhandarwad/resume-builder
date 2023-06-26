import React from 'react';
import './App.css';
import Navbar2 from './components/Navbar2';

import LandingPage from './components/LandingPage';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Templates from './components/Templates';
import ResumeWorkshop from './components/ResumeWorkshop';
import MyResume from './components/MyResume';

function App() {
 
  return (
    <>
    <Router>
       <Navbar2/>
       <Routes>
       <Route path='/' element=<LandingPage/> />
       <Route path='/templates' element= <Templates/> />
       <Route path='/myResume' element=<MyResume/> />
       <Route path='/workshop' element=<ResumeWorkshop/> />
       
       </Routes>
       </Router>
        
    </>
  );
}

export default App;

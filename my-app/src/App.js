import './App.css';
import Navbar from './componets/Navbar'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './componets/pages/Home';
import Events from './componets/pages/Events';
import Education from './componets/pages/Education';
import Resources from './componets/pages/Resources';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
           <Route path='/' exact element={ <Home />}></Route>
           <Route path='/education' exact element={ <Education />}></Route>
           <Route path='/events' exact element={ <Events />}></Route>
           <Route path='/resources' exact element={ <Resources />}></Route>

        
        
        </Routes>
      </Router>
    </>
  );
}

export default App;

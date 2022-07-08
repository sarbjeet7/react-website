
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './MyComponents/Header';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import {Footer} from './MyComponents/Footer';




function App() {
  return (  

        <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/about' exact element={<AboutPage/>}/>
        </Routes>
        <Footer />
        </Router>
   
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Home from './layout/Home'
import Publications from './layout/Publications';
import Students from './layout/Students';
import ContactUs from './layout/ContactUs';
import Positions from './layout/Positions';
const App=()=> {
 

  return (
    <Router>
      <Routes >
        <Route path='/' element={ <Home />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/students' element={<Students />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/positions' element={<Positions />} />
      </Routes>

    </Router>
  )
}

export default App;

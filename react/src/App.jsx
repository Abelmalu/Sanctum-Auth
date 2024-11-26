import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import axios from 'axios'
import Home from './home';
import Register from './Register';
import Login from './login';

function App() {







  return (

    <Router>

        <Routes>
                    <Route path="/" element={<Home/>}></Route>
                     <Route path="/register" element={<Register />} />
                     <Route path="/login" element={<Login />} />





                </Routes>




    </Router>

  )
}

export default App

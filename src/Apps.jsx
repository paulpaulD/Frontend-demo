import  React from 'react';
import Create from './Create';
import Update from './Update';
import User from './User';
import './Apps.css'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

function Apps(){
    return(
        <div className='container'>
           <Router>
            <nav>
                <ul className='nav-links'>
                    <li><Link to ="/Create" className='link'>Create</Link></li>
                  
                    <li><Link to ="/User" className='link'>User</Link></li>

                </ul>
            </nav>
            <Routes>
                <Route path="/Create" element={<Create/>}></Route>
                <Route path="/Update/:id" element={<Update/>}></Route>
                <Route path="/User" element={<User/>}></Route>
            </Routes>
           </Router>
        </div>
    )
}

export default Apps;
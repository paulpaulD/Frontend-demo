import  React from 'react';
import Create from './Create';
import Update from './Update';
import User from './User';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

function Apps(){
    return(
        <div>
           <Router>
            <nav>
                <ul>
                    <li><Link to ="/Create">Create</Link></li>
                    <li><Link to ="/Update">Update</Link></li>
                    <li><Link to ="/User">User</Link></li>

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
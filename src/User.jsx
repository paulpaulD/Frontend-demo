import React, { useEffect } from 'react';
import { useState } from 'react';
import Create from './Create';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function User() {
    const nav=useNavigate();
    const [user, setUser] = useState([]);
    useEffect(()=>{
        axios.get("https://backend-demo-4okq.onrender.com/api/user/fetch")
        .then(result=>{
           
            setUser(result.data.users)
        })
        .catch(err=>{
            console.log(err)
        });
    },[])

    const deleteUser=(id)=>{
        axios.delete(`https://backend-demo-4okq.onrender.com/api/user/delete/${id}`)
        .then(result=>{
            console.log("user deleted")
            nav('/user')
        })
        .catch(err=>console.log("error occured while deleting"))
    }

    return (
        <div>
            <h1>User</h1><br/><br/>
            <Link to='/Create'>Create User</Link><br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((users,index) => (
                        <tr key={index}>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.address}</td>
                            <td><Link to={`/Update/${users._id}`}>update</Link>
                            <button onClick={(e)=>deleteUser(users._id)}>delete</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default User;

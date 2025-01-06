import  React, { useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate  } from 'react-router-dom';
import './Apps.css'

function Update(){
    const nav=useNavigate();
    const {id}=useParams();
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [address,setAddress]=useState();


const updateUser =(e)=>{
    e.preventDefault();
    axios.put(`https://backend-demo-4okq.onrender.com/api/user/update/${id}`,{name,email,address})
    .then(result=>{
        console.log("User updated")
        nav('/user')
    })
    .catch(err=>{console.log("error while updateing")})
}
    return(
        <div className='cntainer'>
            <h1>Update Data Here :</h1><br/>
            <form onSubmit={Update}>
                <lable className="lable">Name</lable>
                <input type='text'value={name} onChange={(e)=>setName(e.target.value)}></input> <br/><br/>

                <lable className="lable">Email</lable>
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>

                <lable className="lable">Address</lable>
                <input type='text'value={address} onChange={(e)=>setAddress(e.target.value)}></input><br/><br/>
                <button className="buttonc" onClick={updateUser}>Update</button>
            </form>
        </div>
    )
}

export default Update;
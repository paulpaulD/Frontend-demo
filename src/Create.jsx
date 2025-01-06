import  React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Apps.css'

const Create =()=>{
     const [name,setName]=useState();
     const [email,setEmail]=useState();
     const [address,setAddress]=useState();
    const navigate=useNavigate();
     const submit =(e)=>{
        e.preventDefault();
        axios.post('https://backend-demo-4okq.onrender.com/api/user/create',{name,email,address})
            .then(result=>{
                console.log(result.data);
                navigate('/user');
            })
            .catch(err=>{console.log(err)});
        

     }
    return(
        <div className='container'>
           <h1> Create Data Here :</h1> <br/><br/>
            <form onSubmit={submit}>
                <lable className="lable">Name</lable>
                <input type='text' onChange={(e)=>setName(e.target.value)}></input><br/><br/>

                <lable className="lable">Email</lable>
                <input type='email' onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>

                <lable className="lable">Address</lable>
                <input type='text' onChange={(e)=>setAddress(e.target.value)}></input><br/><br/>

                <button type='submit' className='buttonc'>Create</button>
            </form>
        </div>
    )
}

export default Create;
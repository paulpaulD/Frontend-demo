import  React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
        <div>
           <h1> Creating</h1> <br/><br/>
            <form onSubmit={submit}>
                <lable>Name</lable>
                <input type='text' onChange={(e)=>setName(e.target.value)}></input><br/><br/>

                <lable>Email</lable>
                <input type='email' onChange={(e)=>setEmail(e.target.value)}></input><br/><br/>

                <lable>Address</lable>
                <input type='text' onChange={(e)=>setAddress(e.target.value)}></input><br/><br/>

                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default Create;
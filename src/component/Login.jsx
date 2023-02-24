import React, { Component, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {createBrowserHistory} from 'history'
import Dashboard from './Dashboard';
import axios from 'axios';


const Login=(props)=>{
    
    const navigate = useNavigate()
    const[username,setUserName] = useState("")
    const[password,setPassword] = useState("")

    function loginUser(){
        if(username!=="" && password!==""){
            axios.post("http://localhost:9090/user",{username,password})
            .then((response)=>{
                navigate("/dashboard" ,{state:{data:response.data}})
            })
            .catch((error)=>{
                window.alert("Wrong Credentials")
            })
        }

    else{
        window.alert("Please Enter Credentials")
    }

            
    }

    return (
        <div className='container-form'>
        
            <form className=' form-login'>
                <h1 className='header1'>LOGIN</h1>

                <div className='row'>
                    <input className="inputs" type="text" required value={username} onChange={e=>setUserName(e.target.value)} name="username" id="username"  placeholder='Enter the username'/>
                </div>

                <div className='row'>
                    <input className="inputs" type="password" required value={password} onChange={e=>setPassword(e.target.value)} name="password" id="password" placeholder='Enter the password'/>
                </div>

                <div className='row '>
                    <button className='btn-login' type='primary' onClick={e=>{e.preventDefault();loginUser()}}>Submit</button>
                </div>

            </form>
        </div>

    )
}

export default Login;
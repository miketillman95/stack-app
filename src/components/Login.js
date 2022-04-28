import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Login =() => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const navigate = useNavigate()

    
    const routeToSignUp = event => {
        event.preventDefault();
        navigate('/SignUp');
      };
  
    return (
    <div className= 'App'>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        {/* <Header /> */}
        <input {...register("login")} placeholder="username or email" />
        <input {...register("password")} placeholder=" password" />
    {/* how to get sign up page to render, and hook up apis */}
        <p > No account? <button onClick={routeToSignUp}>Sign up
        </button> </p>
        
        <p>{data}</p>
        <button  type= 'submit'>Login</button>
      </form>
    </div>
    );
}

export default Login 
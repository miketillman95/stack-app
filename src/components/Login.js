import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'


const Login =() => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
  
    return (
    <div className= 'App'>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        {/* <Header /> */}
        <input {...register("login")} placeholder="username or email" />
        <input {...register("password")} placeholder=" password" />

        <p > No account? Sign up <a href='' > here</a> </p>
        <p>{data}</p>
        <button type= 'submit'>Login</button>
      </form>
    </div>
    );
}

export default Login 
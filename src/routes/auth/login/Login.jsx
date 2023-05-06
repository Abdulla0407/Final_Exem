import React from 'react'
import c from "./Login.module.scss";
import { useState } from 'react';
import axios from 'axios';



const Login = () => {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

function loginUser(e){
  e.preventDefault();
  axios.post("https://api.escuelajs.co/api/v1/auth/login", {
    email: userEmail,
    password:userPassword
  })
  .then(response => console.log(response.data))
  .catch(err => console.log(err))
}

  return (
    <div className={c.register__container}>
      <form onSubmit={loginUser} className={c.login__form}>
        <input className={c.login__inp} required type="email"  placeholder={"email"} onChange={(e) => setUserEmail(e.target.value)}/>
        <input className={c.login__inp} required type="password"  placeholder={"password"} onChange={(e) => setUserPassword(e.target.value)}/>
        <button className={c.login__btn} type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
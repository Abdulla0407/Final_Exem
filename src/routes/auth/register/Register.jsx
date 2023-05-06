import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import c from "./Register.module.scss";


const Register = () => {

  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  });
  function registerUser(e){
    e.preventDefault();
    axios.post("https://api.escuelajs.co/api/v1/users/", userdata)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }
  return (
    <div className={c.register__container}>
      <form className={c.register__form}  onSubmit={registerUser}>
        <input className={c.register__inp} required type="text" placeholder="name" value={userdata.name} onChange={(e)=> setUserdata({...userdata, name: e.target.value})}/>

        <input className={c.register__inp} required type="email" placeholder="email" value={userdata.email} onChange={(e)=> setUserdata({...userdata, email: e.target.value})}/>


        <input className={c.register__inp} required minLength={8} type="password" placeholder="password" value={userdata.password} onChange={(e)=> setUserdata({...userdata, password: e.target.value})}/>

        <input className={c.register__inp} required type="url" placeholder="avatar" value={userdata.avatar} onChange={(e)=> setUserdata({...userdata, avatar: e.target.value})}/>
        <button className={c.register__btn} type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
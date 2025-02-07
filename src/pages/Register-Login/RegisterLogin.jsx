import React, { useContext, useState } from 'react'
import { UserContextValue } from '../../components/UserContext/UserContext'
import { AuthContextValue } from '../../components/AuthContext/AuthContext'
import { Link } from 'react-router';

const RegisterLogin = () => {



  // =========== context api ==============
  const contextValue = useContext(AuthContextValue);
  const {signup} = contextValue;


  const [inputs, setInputs]=useState({
    name:'',
    email:'',
    password:''
  })
  const handleInput=(e)=>{
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
 



  return (
    <div className='RegisterLogin flex flex-col gap-4 w-3/4 mx-auto'>
      <h1>Registration</h1>
        <input type="text" name='name' placeholder='Name'  className='border border-black rounded-md' onChange={handleInput}/>
        <input type="text" name='email' placeholder='email'  className='border border-black rounded-md' onChange={handleInput}/>
        <input type="password" name='password' placeholder='password' className='border border-black rounded-md' onChange={handleInput}/>
        <button className='px-2 py-1 rounded-sm bg-blue-400 text-white' onClick={()=>signup(inputs)}>Register</button>
        <p>Already registered? <Link to='/login'>Login</Link> </p>


    </div>
  )
}

export default RegisterLogin
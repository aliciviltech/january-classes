import React, { useContext, useEffect, useState } from 'react'
import { AuthContextValue } from '../../components/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router';

const Login = () => {

// =========== navigatre ================
  const navigate = useNavigate();





 // =========== context api ==============
   const contextValue = useContext(AuthContextValue);
   const {login, loginData} = contextValue;
   console.log(contextValue)
  
  

  const [inputs, setInputs]=useState({
    email:'',
    password:''
  })

  const handleInput=(e)=>{
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  // ============ check auth state ==============
  useEffect(()=>{
    if(loginData){
      navigate('/')
    }else{
      console.log('no data found')
    }
  })


  return (
    <div className='Login '>
      
        {
          
              // <h1>{isLogin.name} is already logged in <button onClick={logout}>Logout</button></h1>
              
            <div className="login flex flex-col gap-4 w-3/4 mx-auto">
            <h1>login form</h1>
              <input type="text" name='email' placeholder='email'  className='border border-black rounded-md' onChange={handleInput}/>
              <input type="password" name='password' placeholder='password' className='border border-black rounded-md' onChange={handleInput}/>
              <button className='px-2 py-1 rounded-sm bg-blue-400 text-white' onClick={()=>login(inputs)} >Login</button>
              <p>Do not have account? <Link to={'/register-login'}>Register</Link></p>
            </div>
        }

     


    </div>
  )
}

export default Login
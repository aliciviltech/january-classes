import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';



export const AuthContextValue = createContext();


const AuthContext = ({children}) => {


  // navigate
  const navigate = useNavigate();


// =================== signup ===================
  const signup = (data)=>{
    const userStringData =  localStorage.getItem('UsersRegistration');
    const registrationData = userStringData? JSON.parse(userStringData) : [];

    let userExist = false;
    registrationData.forEach((user)=>{
      if(data.email == user.email){
        userExist = true;
      }
    })

    if(userExist){
      alert('this email already exists')
    } else{
      localStorage.setItem('UsersRegistration', JSON.stringify([...registrationData, data]))
      alert('user registered successfully')
    }
  }

  // ================== login ====================
  const loginDataStorageString =  localStorage.getItem('loginUser');
  const loginDataStorage = loginDataStorageString? JSON.parse(loginDataStorageString) : null;
  
  const [loginData, setLoginData]=useState(loginDataStorage)
  const login = (data)=>{
    const {email, password} = data;
    if(!email || !password){
      alert('empty fields')
      return
    }
    const userStringData =  localStorage.getItem('UsersRegistration');
    const registrationData = userStringData? JSON.parse(userStringData) : [];

    let userExist = false
    let availableUser = false
    registrationData.forEach((user)=>{
      if(user.email == data.email){
        userExist=true;
        availableUser=user;
      }
    })
    if(userExist){
      if(data.password == availableUser.password){
        localStorage.setItem('loginUser', JSON.stringify({name:availableUser.name, email:availableUser.email}) )
        setLoginData({name:availableUser.name, email:availableUser.email})
        toast.success('login success')
        navigate('/')
      } else{
        toast.error('incorect password')
      }
    } else{
      toast.error('user with this email does not exist')
    }
  }


  // =================logout -==================
  const logout = ()=>{
    localStorage.removeItem('loginUser')
    setLoginData(null)
    toast.success('Logout success')
  }

  // ==================== check auth state ======================
  // const [loginData, setLoginData]=useState()
  // const checkState = ()=>{
  //   const userStringData =  localStorage.getItem('loginUser');
  //   const userData = userStringData? JSON.parse(userStringData) : null;
  //   setLoginData(userData);
  // }
  // useEffect(()=>{
  //   checkState();
  // },[])


  return (
    <AuthContextValue.Provider value={{signup,login,loginData, logout}}>
        {children}
    </AuthContextValue.Provider>
)
}

export default AuthContext
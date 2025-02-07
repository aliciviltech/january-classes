import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContextValue } from '../AuthContext/AuthContext';

const Header = () => {

  // =========== context api ==============
    const contextValue = useContext(AuthContextValue);
    const {logout, loginData} = contextValue;



  return (
    <div className='w-full p-4 bg-gray-400 flex justify-between'>
      <div className="logo">Logo</div>
      <div className="nav flex gap-8" >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/category">Categories</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="logout" >
        {
          loginData ? 
          <div className="userInfo flex gap-4">
            <div className="userPic flex gap-2 items-center bg-white rounded-md px-4">
              <div className='bg-orange-500 text-white rounded-md flex justify-center items-center px-4 py-2'>{loginData.name.slice(0,1).toUpperCase()}</div>
              <div className="name">{loginData.name}</div>
            </div>
            <button onClick={logout}>Logout</button>
          </div>
          :
          <Link to={'/login'}>login</Link>

        }
      </div>
      <div className="cart">
      </div>
    </div>
  )
}

export default Header
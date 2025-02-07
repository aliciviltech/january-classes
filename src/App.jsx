import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Body from './components/Body/Body'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Category from './pages/Category/Category'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import NotFound from './pages/NotFound/NotFound'
import Checkout from './pages/Checkout/Checkout'
import RegisterLogin from './pages/Register-Login/RegisterLogin'
import Login from './pages/Register-Login/Login'

const App = () => {
  const [isLoader, setIsLoader]= useState(false);
  return (
    <div className='text-[22px] relative'>
      <Toaster />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/category' element={<Category/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/:id' element={<ProductDetail/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/register-login' element={<RegisterLogin/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
      
      
      {
        isLoader &&
        <div className="loaderContainer z-10 fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white">
          <div className="loader"></div>
        </div>
      }
    </div>
  )
}

export default App
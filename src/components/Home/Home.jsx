import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import PrimaryCard from '../Card/PrimaryCard';
import { useNavigate } from 'react-router';
import { AuthContextValue } from '../AuthContext/AuthContext';

const Home = () => {

  const navigate = useNavigate()
  const [allProducts, setAllProducts] = useState();


  // auth context
  const AuthValue = useContext(AuthContextValue)
  console.log(AuthValue)

  const fetchProducts = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json()
    setAllProducts(data)
  }
  useEffect(()=>{
    fetchProducts()
  },[])

  return (
    <div className='my-12'>
      <div className="allProducts  flex gap-4 flex-wrap justify-center">

        { 
          allProducts?.map((product)=>{
            return(
              <div key={product.id} className="card cursor-pointer hover:shadow-xl" onClick={()=>navigate(`/${product.id}`)}>
                <PrimaryCard product={product} />
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default Home
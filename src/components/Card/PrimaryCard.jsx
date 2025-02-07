import React from 'react'

const PrimaryCard = ({product}) => {
  return (
    <div className='PrimaryCard w-[300px] h-[400px] flex flex-col gap-8 border border-black justify-center items-center'>
      <div className="image h-[250px]">
        <img src={product.image} alt="" className='w-full h-full object-contain'/>
      </div>
      <div className="text">
        <h1>{product.title.slice(0,20)}...</h1>
        {/* <p>{product.description}</p> */}
      </div>
    </div>
  )
}

export default PrimaryCard
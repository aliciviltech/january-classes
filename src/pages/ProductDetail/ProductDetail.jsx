import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetail = () => {
    const param = useParams();
    const id = Number(param.id);

    // fetch products
    const [currentProduct, setCurrentProduct] = useState();
    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        const requiredProduct = data.find((product) => product.id === id);
        setCurrentProduct(requiredProduct)
    }
    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <div className='flex gap-20 h-[500px]   '>

            <div className="image h-[500px] w-[200px]">
                <img src={currentProduct?.image} alt="" className='h-full w-full object-contain' />
            </div>
            <div className="right flex flex-col gap-8">
                <h1 className='text-[30px]'>{currentProduct?.title}</h1>
                <p>{currentProduct?.description}</p>
                <p> Price: {currentProduct?.price}</p>
            </div>


        </div>
    )
}

export default ProductDetail
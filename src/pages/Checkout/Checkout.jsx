import React, { useState } from 'react'

const Checkout = () => {

    const [inputs, setInputs]=useState({
        name:'',
        contact:''
    });
    const [finalInput, setFinalInput]=useState('');
    
    const handleInput = (e)=>{
        setInputs({...inputs, [e.target.name]: e.target.value})
    }

    const showInput = ()=>{
        setFinalInput(inputs)
        console.log(inputs)
    }




  return (
    <div>
        <h1>Checkout</h1>

        <div className="form">
            <input type="text" name='name' className='border border-black' placeholder='Name' onChange={handleInput}  />
            <input type="text" name='contact' className='border border-black' placeholder='Contact' onChange={handleInput}  />
            <button className='bg-gray-400 rounded-sm px-2' onClick={showInput}>Submit</button>

            <div className="valueContainer">
                Name : {finalInput.name}
                Contact : {finalInput.contact}
            </div>
        </div>
    </div>
  )
}

export default Checkout
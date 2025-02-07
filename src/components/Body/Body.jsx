import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';

const Body = ({setIsLoader}) => {

    const [userName, setUserName] = useState('Hammad');
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(false);


    // ======= handle dark mode ===========
    const handleDarkMode = ()=>{
        if(isDark === false){
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            setIsDark(true);
        } else{
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            setIsDark(false);
        }
    }



    const changeName = () => {
        setUserName('Muhammad')
    }
   

    useEffect(()=>{
        console.log('this is useeffect with empty dependency')
        console.log('consoel 2')
        console.log('console 3')    
    },[])

    useEffect(()=>{
        console.log('this is useEffect with a dependency')
    },[count, userName])



    return (
        <>
        <Header cart={count} setCart={setCount} setIsLoader={setIsLoader} />
        </>
    )
}

export default Body
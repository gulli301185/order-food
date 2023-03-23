
import React, { useContext } from 'react'
import Cart from './Components/Cart/Cart'
import Header from './Components/Header/Header'
import MealItem from './Components/Meals/MealItem'
import { useState } from 'react'
import MealProvider from './store/MealProvider'
import { useEffect } from 'react'
import CartContext from './store/cart-context'

const App = () => {
      const cartCtx=useContext(CartContext)
                 console.log(cartCtx);

  const [ show, setShow] =useState(false)

  function showHandler(){
    localStorage.setItem("food","1")
    setShow(true)
  }


  function closeHandler(){
    setShow(false)
    localStorage.removeItem("food")

  }

  useEffect(()=>{
    const getItem=localStorage.getItem("food")
    if(getItem==="1"){

      setShow(true)
    }
   
  },[])
  return (
    <MealProvider>
             <Header showHandler={showHandler} setShow={setShow}/>
             <MealItem/>
             {show && <Cart closeHandler={closeHandler}/>}
    </MealProvider>
    
   
  )
}

export default App

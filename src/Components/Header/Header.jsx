import React, { useContext } from 'react'
import HeaderButton from './HeaderButton'
import mealImg from './../../../src/assets/meals.jpg'
import CartContext from '../../store/cart-context'
import { useEffect } from 'react'

const Header = ({showHandler,setShow}) => {
  return (
    <div>
       <h1>React Meals </h1>
       <HeaderButton showHandler={showHandler}/>
       <div><img src={mealImg} alt="food" /></div>
    </div>
  )
}

export default Header
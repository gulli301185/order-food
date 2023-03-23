import React from 'react'
import CartContext from '../../store/cart-context'
import { useContext } from 'react';

function HeaderButton({showHandler}) {
    const {items}=useContext(CartContext)
//  console.log(items);

 const countOfItem=items?.reduce((a,b)=>{
    return a+b.amount
 },0)
  return (
    <button onClick={showHandler}>
             <span> Your Cart</span>
             <span>{countOfItem}</span>
    </button>
  )
}

export default HeaderButton
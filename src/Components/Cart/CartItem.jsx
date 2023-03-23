import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'

function CartItem({el, plusHandler, minusHandler}) {
  
  return (
    <div>
          <div>{el.name}</div>
          <div>{el.price}</div>
          <span>x{el.amount}</span>
          <button onClick={()=>plusHandler(el)}>+</button>
          <button onClick={()=>{minusHandler(el.id)}}>-</button>
    </div>
  )
}

export default CartItem
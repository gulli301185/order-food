import React from 'react'
import MealForm from './MealForm'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

const MealList = ({el}) => {
        const {addItems}=useContext(CartContext)
       
  function addHandler(amount){
             return addItems({
              id:el.id,
              name:el.name,
              description:el.description,
              price:el.price,
              amount:amount,
             })
  }
  return (
    <div>
        <div>{el.name}</div>
        <div>{el.description}</div>
        <div>{el.price}</div>
        <MealForm id={el.id} onAdd={addHandler}/>
        <hr />
    </div>
  )
}

export default MealList
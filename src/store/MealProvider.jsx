import React, { useEffect, useReducer } from 'react'
import CartContext from './cart-context'

const initialState={
  items:[],
  totallAmount:0,
}

function reducer(state, action){
  if(action.type==="ADD"){



    const newAmount=state.totallAmount+action.item.price 

const indx=state.items?.findIndex((el)=>{
  return el.id===action.item.id
})

const exItem=state.items[indx]
 
let newItem
if(exItem){
  const updItem={
    ...exItem,
    amount:exItem.amount+1
  }
  newItem=[...state.items]
  newItem[indx]=updItem
}else{
   newItem=state.items.concat(action.item)

}


// localStorage.setItem("food","1")

    return{
      items:newItem,
      totallAmount:newAmount
    }
    
  }else if(action.type==="REMOVE"){
    const indx=state.items?.findIndex((el)=>{
      return el.id===action.id
    })

    const exItem=state.items[indx]
    const newAmount=state.totallAmount-exItem.price

  

        let newItem;
    if(exItem.amount===1){
       newItem=state.items.filter((el)=>el.id!==action.id)
    }else{
   const updItem={
    ...exItem,
    amount:exItem.amount-1
   }
   newItem=[...state.items]
     newItem[indx]=updItem
    }


    return {
      items:newItem,
      totallAmount:newAmount 
    }
   

  }
  return state 
}


function MealProvider(props) {

  const [cartItem, dispatch]=useReducer(reducer, initialState)


  function addH(item){
        dispatch({type:"ADD", item:item})
  }
  function minusH(id){
        dispatch({type:"REMOVE", id:id})
  }
  return (
    <CartContext.Provider value={{
        items:cartItem.items,
        totallAmount:cartItem.totallAmount,
        addItems:addH ,
        removeItem:minusH,
    }}>
        {props.children}
    </CartContext.Provider>
  )
}

export default MealProvider
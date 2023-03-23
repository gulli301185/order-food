import React from "react";

const CartContext=React.createContext({
    items:[],
    totallAmount:0,
    addItems:()=>{},
    removeItem:()=>{}
})

export default CartContext
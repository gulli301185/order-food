import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

function Cart({closeHandler}) {
          const cartCtx=useContext(CartContext)
                //  console.log(cartCtx);
          function plusHandler(el){
            return cartCtx.addItems(el)
          }

          function minusHandler(id){
            return cartCtx.removeItem(id)
          }

    const food=cartCtx.items?.map((el)=>{
        return <CartItem key={el.id} el={el} plusHandler={plusHandler} minusHandler={minusHandler} />
    })
  return (
    <Modal>
             <div style={{position:"absolute", bottom:"150px",left:"350px",background:"green",overflow:"scroll", width:"500px", height:"300px"}}>
           {food}
           <span>Totall amount:{cartCtx.totallAmount.toFixed(2)}</span> <br />
           <button>OPEN</button>
           <button onClick={closeHandler}>CLOSE</button>
    </div>
    </Modal>
  
  )
}

export default Cart
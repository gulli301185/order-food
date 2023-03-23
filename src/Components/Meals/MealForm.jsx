import React, { useRef, useState } from 'react'

function MealForm({id,onAdd}) {

    const amountRef=useRef()
    const [check, setCheck]=useState(false)

    function submitHandler(e){
        e.preventDefault()
        const amount=Number(amountRef.current.value)

        if(amount<1 || amount>1){
                  setCheck(true)
        }else{
            onAdd(amount)
            setCheck(false)
        }
       
    }
  return (
    <form onSubmit={submitHandler}>
        <label htmlFor={id}>Amount:</label>
        <input type="number" id={id} ref={amountRef} defaultValue={1} />
        <button type='submit'>+Add</button>
        {check && <p>please, enter a valid number</p>}
    </form>
  )
}

export default MealForm
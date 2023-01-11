import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

export const Card = () => {

    const { handleChange } = useContext(CartContext)

    const handleOnChange = () => {
        handleChange(1)
    } 

  return (
    <div>
        <button onClick={handleOnChange}>Buy Now</button>
    </div>
  )
}

export default Card
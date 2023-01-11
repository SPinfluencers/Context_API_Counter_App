import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Navbar = () => {

    const { count } = useContext( CartContext )

  return (
    <div>cart : { count }</div>
  )
}

export default Navbar
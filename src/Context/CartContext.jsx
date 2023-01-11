import React, { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [count, setCount] = React.useState(0)

    const handleChange = (value) => {
        setCount( count + value )
    }

    return <CartContext.Provider value={{count , handleChange}}>
      { children }
    </CartContext.Provider>
}
import { useContext } from 'react';
import { CartContext } from '../context/Cart';
import { useState } from 'react';

export  const useCart = () => {
    const {cart, setCart} = useContext(CartContext)


    const isOnCart = (producto) => {
       return cart.some(item => item.id == producto.id)
    }
    

    const addToCart = (producto) => {

        setCart(prevState => ([...prevState,{...producto, cantidad:1}]))
        return cart
       
    }

    const removeFromCart = (producto) => {
       setCart(prevState => prevState.filter(item => item.id != producto.id))
       return cart
    }


    const clearCart = () => {
        setCart([])
    }

    return {cart,setCart,clearCart,addToCart,removeFromCart, isOnCart}
  }


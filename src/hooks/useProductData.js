import { useContext } from 'react';
import { ProductDataContext } from '../context/ProductData';
import { useState } from 'react';

export  const useLoged = () => {
    const {data,setData} = useContext(ProductDataContext)
    
    

    return {data,setData}
  }

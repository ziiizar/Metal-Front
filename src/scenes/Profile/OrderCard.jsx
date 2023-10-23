import React from 'react'
import { Link } from "react-router-dom";
// import { loadDetailledOrder } from './services/loadDetailledOrder';
// import { loadProductById } from './services/loadProductById';
// import { useContext } from 'react';
// import { ProductDataContext } from '../../context/ProductData';
// import { loadProductsInOrden } from './services/loadProductsInOrden';

const OrderCard = ({date, estado, id}) => {

  // const {data,setData} = useContext(ProductDataContext)

  // const handleClick = async () => {
  //   const token = window.localStorage.getItem("token");
  //  const orderData = await loadDetailledOrder(token,id)
  //  console.log(orderData)

  // await loadProductsInOrden(orderData,setData).then(console.log(data))
   
  // }
  return (
    <article className='flex border-2 border-gray-900 justify-evenly'>

        <div >
          <h3>{id}</h3>
          <h3>{estado}</h3>
          <h3>{date}</h3>
        </div>

        <button  className="bg-green-700"><Link  to={`/MyProfile/Orders/Detail/${id}`}>Detalles</Link></button>


        
    </article>
  )
}

export default OrderCard
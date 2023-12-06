import React from "react";
import useLoadOrders from "../hooks/useLoadOrders";
import OrderCard from "./OrderCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OrdersPage = () => {
  const { user_id } = useParams();
  const { orders } = useLoadOrders(user_id);

  return (
    <div className=" flex flex-col gap-3 w-[90%]">
      <h4 className="flex text-black">Pedidos en Camino <span className="ml-2"><svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="25"
      fill="none"
      viewBox="0 0 33 25"
    >
      <path
        fill="#000"
        d="M25.25 21.98a2.188 2.188 0 110-4.376 2.188 2.188 0 010 4.375zm2.188-13.126l2.858 3.646h-6.504V8.854M7.75 21.98a2.188 2.188 0 110-4.375 2.188 2.188 0 010 4.375zM28.167 6.667h-4.375V.833H3.375A2.907 2.907 0 00.458 3.75v16.042h2.917a4.375 4.375 0 008.75 0h8.75a4.375 4.375 0 108.75 0h2.917V12.5l-4.375-5.833z"
      ></path>
    </svg></span></h4>

    <ul className="flex flex-col w-full gap-2 ">
        {orders.map((orden, index) => (
          <li className="text-black border-b-[1px] border-black w-full pb-2 min-h-[150px]" key={orden.orden_id}>
            <OrderCard
              date={orden.date}
              estado={orden.estado}
              id={orden.orden_id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;

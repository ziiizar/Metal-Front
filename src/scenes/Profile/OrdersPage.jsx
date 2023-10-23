import React from "react";
import useLoadOrders from "./hooks/useLoadOrders";
import OrderCard from "./OrderCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const OrdersPage = () => {

  const {user_id} = useParams();
  const { orders } = useLoadOrders(user_id);

  return (
    <div className="">
      <ul className="flex flex-col gap-y-4 ">
        {orders.map((orden, index) => (
          <li className="" key={orden.orden_id}>
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

import { useEffect, useState } from "react";
import axios from "axios";
import { useLoged } from "../../../hooks/useLoged";
import { loadOrders } from "../services/loadOrders";

export function useLoadOrders(user_id) {
  const [orders, setOrders] = useState([]);
  const token = window.localStorage.getItem("token");
  // console.log(user_id);

  useEffect(() => {
    
    // console.log("token");
   loadOrders(token,user_id).then(setOrders)
  }, [token, user_id]);

  // console.log("data");
  // console.log(orders);
  return { orders };
}

export default useLoadOrders;

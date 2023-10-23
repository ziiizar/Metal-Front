import { useEffect, useState } from "react";
import axios from "axios";
import { useLoged } from "../../../hooks/useLoged";
import { loadOrders } from "../services/loadOrders";

export function useLoadOrders(user_id) {
  const [orders, setOrders] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    loadOrders(token, user_id).then(setOrders);
  }, [token, user_id]);

  return { orders };
}

export default useLoadOrders;

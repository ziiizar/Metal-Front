import { useEffect, useState } from "react";
import { loadDetailledOrder } from "../services/loadDetailledOrder";

export function useDetailledOrder(orden_id) {
  const [ordenData, setOrdenData] = useState([]);
  const token = window.localStorage.getItem("token");

  //arreglado ----> esta esperando un valor por el que tiene que esperar
  // por eso se usa asynch-await
  useEffect(() => {
    const fetchData = async () => {
      const newOrder = await loadDetailledOrder(token, orden_id);
      setOrdenData(newOrder);
    };
    fetchData();
  }, [orden_id]);
  return { ordenData };
}

export default useDetailledOrder;

import { useEffect, useState } from "react";
import { loadProductsInOrden } from "../services/loadProductsInOrden";

export default function useDetailledProducts({ ordenData }) {
  const [data, setData] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const newData = await loadProductsInOrden(token, ordenData);
      setData(newData);
    };
    fetchData();
  }, [token,ordenData]);

  return { data };
}

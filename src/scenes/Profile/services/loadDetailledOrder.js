import axios from "axios";

export const loadDetailledOrder = async (token, orden_id) => {
  const resp = await axios.get(
    `http://127.0.0.1:8000/Orden/MyOrders/${orden_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const setDetailledOrder = resp.data;
  return setDetailledOrder;
};
//esta llamada funciona correctamente 

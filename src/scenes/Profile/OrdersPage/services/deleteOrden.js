import axios from "axios";

export const deleteOrden = async (token, orden_id) => {
  console.log(orden_id)
  const resp = await axios.delete(
    `http://127.0.0.1:8000/api/Users/Orden/DeleteOrden/${orden_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const deletedOrden = resp.data;
  return deletedOrden;
};
import metalconf from "../../../api/metalconf"

export const loadDetailledOrder = async (token, orden_id) => {
  console.log(orden_id)
  const resp = await metalconf.get(
    `Orden/MyOrders/${orden_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const setDetailledOrder = resp.data;
  return setDetailledOrder;
};
//esta llamada funciona correctamente 

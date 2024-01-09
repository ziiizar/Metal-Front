import metalconf from "../../../../api/metalconf";

export const deleteOrden = async (token, orden_id) => {
  console.log(orden_id)
  const resp = await metalconf.delete(
    `Users/Orden/DeleteOrden/${orden_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const deletedOrden = resp.data;
  return deletedOrden;
};
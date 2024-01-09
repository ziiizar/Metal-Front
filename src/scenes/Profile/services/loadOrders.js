import metalconf from "../../../api/metalconf"


export const loadOrders = async (token,user_id) => {
    
   const resp = await metalconf
    .get(`Users/Orden/MyOrders/${user_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const setOrders = resp.data

    return setOrders
}

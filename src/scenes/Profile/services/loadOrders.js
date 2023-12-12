import axios from "axios";


export const loadOrders = async (token,user_id) => {
    
   const resp = await axios
    .get(`http://127.0.0.1:8000/api/Users/Orden/MyOrders/${user_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const setOrders = resp.data

    return setOrders
}

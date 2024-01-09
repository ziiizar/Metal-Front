import axios from "axios";

//TODO falta hacerlo en el backend para cambiarlo en axios por metalconf

export const loadProfile = async (user_id,token) => {
    
   const resp = await axios
   .get(`http://127.0.0.1:8000/Users/Profile/${user_id}`, {
     headers: { Authorization: `Bearer ${token}` },
   })
   console.log(resp)
    const setData = resp.data

    return setData
}
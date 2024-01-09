import axios from "axios";

//?Creo q no se esta usando

export const loadMe = async (token) => {
    
   const resp = await axios
   .get("http://127.0.0.1:8000/Users/Me", {
     headers: { Authorization: `Bearer ${token}` },
   })
   console.log(resp)
    const setData = resp.data

    return setData
}
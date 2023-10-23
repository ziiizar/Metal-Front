// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useLoged } from "../../../hooks/useLoged";


// export function useProductById({product_id}) {
//   const [data, setData] = useState([]);
//   const {token} = useLoged()

//   useEffect(() => {
//     console.log(token)
//     axios.get(`http://127.0.0.1:8000/Products/${product_id}`, {headers: {"Authorization": `Bearer ${token}` }}).then(setData);
//   }, [token, product_id]);



  
//   return { data };

// }


// export default useProductById;
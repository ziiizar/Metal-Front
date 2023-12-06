// import { useEffect } from "react";
// import { makeOrder } from "../services/makeOrder";

// export function useMakeOrder() {
//   const token = window.localStorage.getItem("token");

//   useEffect(() => makeOrder(token), [token]);

  
// }



import { useEffect, useState } from "react";
import { makeOrder } from "../services/makeOrder";

export function useMakeOrder(token, orden, products_ids) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("efwe")
    makeOrder(token, orden, products_ids).then(setData);
  }, [token, orden, products_ids]);


  return { data };
}

export default useMakeOrder;

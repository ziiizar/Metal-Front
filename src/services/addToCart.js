import metalconf from "../api/metalconf"



// export async function addToCart (token, id, user_id, quantity)  {
//   console.log(token, id, user_id, quantity)
//     const resp = await axios.post(
//       `http://127.0.0.1:8000/api/add?user_id=${user_id}&product_id=${id}&quantity=${quantity}`,
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     const addedProduct = resp.data;
//     return addedProduct;
//   }


  
export async function addToCart (token, product_id, user_id, quantity)  {
  console.log(token, product_id, user_id, quantity)
    const resp = await metalconf.post(
      `add`,{product_id,user_id,quantity},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const addedProduct = resp.data;
    return addedProduct;
  }
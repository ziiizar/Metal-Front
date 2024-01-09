import metalconf from "../../../api/metalconf"


export const loadProductById = async (token, product_id) => {
  const resp = await metalconf.get(`Products/${product_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const setProducts = resp.data;
  return setProducts;
};
//esta llamada funciona correctamente

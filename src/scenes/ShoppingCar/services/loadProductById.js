import metalconf from "../../../api/metalconf";

export const loadProductById = async ( product_id) => {
  const resp = await metalconf.get(`Products/${product_id}`);
  const setProducts = resp.data;
  return setProducts;
};

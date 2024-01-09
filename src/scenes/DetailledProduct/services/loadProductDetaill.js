import metalconf from "../../../api/metalconf"


export const loadProductDetaill = async (token, product_id) => {
  const resp = await metalconf.get(
    `Products/${product_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const setProductDetaill = resp.data;
  return setProductDetaill;
};
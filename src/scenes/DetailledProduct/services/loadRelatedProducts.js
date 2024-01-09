import metalconf from "../../../api/metalconf"

export const loadRelatedProducts = async (token, category) => {
  const resp = await metalconf.get(
    `Products/Category/${category}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  const setRelatedProducts = resp.data;
  return setRelatedProducts;
};
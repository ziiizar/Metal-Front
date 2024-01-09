import metalconf from "../../../api/metalconf";

export const load = async () => {
  const resp = await metalconf.get("Products");
  const setProducts = resp.data;

  return setProducts;
};

// , {
//   headers: { "Access-Control-Allow-Origin": "*" },
// }
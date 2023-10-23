import { loadProductById } from "./loadProductById";

// arreglado ----> en el loadProductById se está returnando un valor
// y no se estaba trabajando con el
export async function loadProductsInOrden(token, ordenData) {
  const productPromises = ordenData.map((product) => {
    return loadProductById(token, product.product_id);
  });

  try {
    const productData = await Promise.all(productPromises);
    return productData;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
// supuestamente pincha bien
import { loadProductById } from "./loadProductById";

// arreglado ----> en el loadProductById se está returnando un valor
// y no se estaba trabajando con el
export async function loadProductsInCart(token, cartData) {
  const productPromises = cartData.map((product) => {
    return loadProductById(token, product.product_id);
  });

  try {
    const productData = await Promise.all(productPromises);
    // console.log("productData")
    // console.log(productData)
    const productDataPlusQuantity = productData.map((product, index) => ({
      ...product,
      quantity: cartData[index].quantity,
    }));
    // console.log("productDataPlusQuantity")
    // console.log(productDataPlusQuantity)
    return productDataPlusQuantity;
    // return productData
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
// supuestamente pincha bien







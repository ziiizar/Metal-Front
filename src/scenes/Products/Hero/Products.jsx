import ProductCard from "./ProductCards/ProductCard";
import FavIcon from "./ProductCards/FavIcon";
import PropTypes from "prop-types";
import Best_product from "../../home/Best_product";

const Products = ({ products }) => {
  console.log(products);
  return (
    <>
      {products.map((producto) => (
        <li className="  text-black flex" key={producto.product_id}>
          <ProductCard
            name={producto.name}
            color={"bg-gris"}
            // category={producto.category}
            price={producto.price}
            // description={producto.description}
            image={producto.image}
            id={producto.product_id}
            btnText={"Ordenar"}
          />

          {/* <FavIcon className="" fav={producto.favorite} /> */}
        </li>
      ))}
    </>
  );
};

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;

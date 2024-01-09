import PropTypes from "prop-types";
import { useCart } from "../../../../hooks/useCart";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../../../services/addToCart";
import { motion } from "framer-motion";
import Cart from "../../../Icons/Cart";

const ProductCard = ({
  name,
  image,
  description,
  price,
  btnIcon,
  id,
  color,
}) => {
  const [hover, setHover] = useState(false);
  const [isOrdened, setOrdened] = useState(false);
  const [svgColor, setSvgColor] = useState("black");
  const [buttonColor, setButtonColor] = useState("white");


  useEffect(() => {
    if (isOrdened) {
      setSvgColor("white");
      setButtonColor("naranja")
    } else {
      setSvgColor("black");
      setButtonColor("white")
    }
    
  }, [isOrdened]);

  const navigate = useNavigate();

  const handleCart = () => {
    setOrdened(!isOrdened);
  };

  // const handleClickCart = (token, id, user_id, quantity) => {
  //   // isOnCart(i)
  //   //   ? (removeFromCart(i), setOrdened(false))
  //   //   :
  //   // (setOrdened(true),
  //   addToCart(token, id, user_id, quantity);
  //   // console.log(cart);
  // };

  const handleClick = () => {
    navigate(`/Products/${id}`);
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-[220px] h-[250px] p-3 flex flex-col gap-2 bg-payneGray/90 rounded-lg text-white productCardBorder"
    >
      <picture className="w-full h-[75%] rounded-md">
        <img className="w-full h-full" src={image} alt="" />
      </picture>

      <div className="flex w-full justify-between ">
        <div>
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        {hover || isOrdened ? (
          <motion.button
            onClick={handleCart}
            initial={{ rotate: -40 }}
            animate={{ x: "-20px", rotate: 0 }}
            transition={{
              type: "spring",
              duration: 0.3,
              bounce: 0.5,
              stiffness: 200,
              damping: 10,
            }}
            className={`bg-${buttonColor} rounded-full p-1 h-10 w-10 flex place-content-center items-center hover:scale-110`}
          >
            <Cart color={svgColor}></Cart>
          </motion.button>
        ) : null}
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  btnText: PropTypes.string,
};

export default ProductCard;

// const { addToCart, removeFromCart, isOnCart, cart } = useCart();

// const item = {
//   image: image,
//   name: name,
//   price: price,
//   product_id: id,
// };

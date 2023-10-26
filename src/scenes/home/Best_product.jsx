import PropTypes from "prop-types";

const Best_product = ({ name, img, description, price, btnText }) => {
  return (
    <article className=" flex flex-col  shadow-xl h-full  w-full bg-gradient-to-br from-zinc-400 to-zinc-300 text-black rounded-md place-content-center items-center">
      <div className=" h-[50%]  w-[90%] flex relative">
        <img
          src={img}
          alt="evento"
          className="h-[150%] w-full absolute top-[-60%]"
        />
      </div>
      <div className="w-[90%] h-[50%] flex flex-col justify-between px-1  gap-1 place-content-center">
        <div className="flex flex-col gap-1 w-full place-content-center items-center">
          <h3 className=" font-sans font-bold text-12  text-black">
            {name}
          </h3>
          <p className="text-8 text-black leading-chiquita ">
            {description}
          </p>
        </div>

        <div className="flex justify-between ">
          <span className="text-8">{price}CUP</span>
          <button>
            <img src="/assets/Vector.png" alt="" />
          </button>
        </div>
        <div className="flex place-content-center items-center">
          <button className="bg-gray-600 text-white px-2 rounded-full">{btnText}</button>
        </div>
      </div>
    </article>
  );
};

Best_product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  btnText: PropTypes.string,
};

export default Best_product;

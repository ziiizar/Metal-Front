import PropTypes from "prop-types";

const Best_product = ({ name, description, price, btnText }) => {
  return (
    <div className=" flex   border-2 border-gray-800 rounded-md  shadow-xl h-full  w-3/5 ">
      <div className=" h-full  w-full  ">
        <img
          src="src/assets/59d922b8-84b7-41cc-bf35-52a90adc906e.jpg"
          alt="evento"
          className="h-full w-full"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between  p-1  gap-2 place-content-center bg-gray-800">
        <div className="flex flex-col gap-4 w-full place-content-center items-center">
          <span className=" font-sans font-bold text-2xl max-sm:text-sm hyphens-auto text-white">
            {name}
          </span>
          <p className="max-sm:text-xs hyphens-auto max-[400px]:text-ellipsis text-white">
            {description}
            <span className="cursor-pointer text-sm text-blue-900">
              {" "}
              Ver mas
            </span>
          </p>
        </div>

        <div className="flex justify-between mr-6">
          <span className="max-sm:text-sm"> ${price}</span>

          <button className="hover:bg-red-600 bg-orange-500 p-2 rounded-md transition-all ">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

Best_product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  btnText: PropTypes.string,
};

export default Best_product;

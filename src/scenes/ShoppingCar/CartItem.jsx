const CartItem = ({ image, price, name, id, children}) => {
  return (
    <article className="w-full h-[150px] flex gap-3  relative">
      <div className=" flex w-[40%] bg-gris place-content-center items-center rounded-md shadow-lg shadow-gris">
        <img className="w-[90%] h-[80%]" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-between py-1">
        <h2>{name}</h2>
        {children}
        {/* <span>{id}</span> */}
      </div>

      <svg 
      className="absolute top-1 right-1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#clip0_519_253)">
        <path
          fill="#000"
          fillRule="evenodd"
          d="M12 14.121l5.303 5.304a1.5 1.5 0 102.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 00-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 10-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 002.122 2.122L12 14.12v.001z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_519_253">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
    </article>
  );
};

export default CartItem;

const ProductCard = ({image, description, price, name, total}) => {
  return (
    <article className="flex flex-col text-black">
      <div className="flex w-full h-[40%]">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#F99406"
        d="M12 24l-1.74-1.726C4.08 16.166 0 12.124 0 7.194 0 3.151 2.904 0 6.6 0c2.088 0 4.092 1.06 5.4 2.72C13.308 1.06 15.312 0 17.4 0 21.096 0 24 3.152 24 7.193c0 4.931-4.08 8.973-10.26 15.08L12 24z"
      ></path>
    </svg>


        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="flex">
        <strong> {name}</strong>
        <p> {price}</p>
      </div>
      <div className="flex flex-col">
        <div></div>
        <p>{description} </p>
      </div>
      <div className="flex justify-between">
        <button></button>
        <button></button>
        <strong>{total}</strong>
        <button></button>
      </div>
    </article>
  );
};

export default ProductCard;

const ProductCard = ({image, description, price, name, total}) => {
  return (
    <section className="flex flex-col text-black w-[90%] h-[68%]">
      <div className="flex w-full h-[50%]">

    {/* <svg
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
    </svg> */}


        <img className="w-full flex h-full" src={image} alt="" />
      </div>
      <div className="flex h-[10%] justify-between ">
        <strong className=""> {name}</strong>
        <p> {price}CUP</p>
      </div>
      <div className="flex flex-col h-[30%]">
        <div> <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      fill="none"
      viewBox="0 0 16 15"
    >
      <path
        fill="#F99406"
        d="M15.111 6.458a.987.987 0 00-.573-1.778l-4-.151a.102.102 0 01-.09-.067L9.068.73a.987.987 0 00-1.854 0L5.836 4.476a.102.102 0 01-.09.066l-4 .151a.987.987 0 00-.573 1.778l3.138 2.467a.102.102 0 01.036.106l-1.08 3.827a.987.987 0 001.502 1.089l3.315-2.222a.098.098 0 01.112 0l3.315 2.222a.978.978 0 001.134 0 .978.978 0 00.368-1.067l-1.088-3.84a.097.097 0 01.035-.106l3.151-2.49z"
      ></path>
    </svg></div>
        <p>{description} </p>
      </div>
      <div className="flex justify-between h-[10%]">
        <button className="bg-orange-400 flex rounded-full place-content-center items-center px-2 py-1 h-[90%] w-[70%] text-white">Anadir al carrito</button>
        <button className="bg-orange-400 flex rounded-full place-content-center items-center px-2 py-1 h-[90%] w-[10%]">+</button>
        <strong>{total}</strong>
        <button className="bg-orange-400 flex rounded-full place-content-center items-center px-2 py-1 h-[90%] w-[10%]">-</button>
      </div>
    </section>
  );
};

export default ProductCard;

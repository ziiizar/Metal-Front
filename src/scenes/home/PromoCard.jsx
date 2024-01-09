const PromoCard = ({ title, price, img }) => {
  return (
    <article className="flex flex-col w-full h-full  p-1 bg-babyPowder shadow-md rounded-md">
      <div className="flex h-[70%] w-full  gap-2 rounded-md">
        <img className="rounded-md" src={img} alt="" />
      </div>
      <div className="flex  w-full text-black rounded-md  justify-between">
        <div className="flex flex-col gap-2 ">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
        <button className="w-8 h-8 bg-naranja rounded-full">C</button>
      </div>
    </article>
  );
};

export default PromoCard;

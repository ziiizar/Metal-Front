const PromoCard = ({ title, decription, img }) => {
  return (
    <article className="flex  w-full h-full relative ">
      <div className="flex w-[30%] h-full absolute z-10 place-content-center items-center">
        <img className="h-[180px] w-[150px]" src={img} alt="" />
      </div>
      <div className="flex flex-col bg-gradient-to-br from-zinc-400 to-zinc-300 items-end gap-4  w-[70%] h-full text-black rounded-md absolute ">
        <h3>{title}</h3>
        <p>{decription}</p>
      </div>
    </article>
  );
};

export default PromoCard;

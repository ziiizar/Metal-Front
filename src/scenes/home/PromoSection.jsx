import { useState, useEffect } from "react";
import Wall from "./Wall";

const PromoSection = () => {
  const [currentWindow, setCurrentWindow] = useState("");

  // useEffect(() => {}, [currentWindow]);

  const handleMouseEnter = (id) => {
    setCurrentWindow(id);
  };

  const handleMouseLeave = () => {
    setCurrentWindow("");
  };

  return (
    <section
      data-header-color="black"
      className="landing flex w-full h-screen flex-col text-black relative"
    >
      {/* <div className="w-full h-screen flex flex-col md:flex-row bg-columbiaBlue dark:bg-payneGray gap-2 place-content-center items-center">
      <div className="flex  place-content-center items-center w-[90%] md:w-1/2">
          <img className="" src="/assets/cajas.png" alt="" />
        </div>
        <div className=" flex flex-col place-content-center items-center gap-4 w-1/2">
          <h4 className="font-bold text-3xl self-start">Transforme su comodidad con nuestra seguridad</h4>
          <p className="line-clamp-3">Echele un vistazo a nuestras puertas , ventanas y rejas de aluminio.</p>
          <button className="bg-naranja flex py-2 px-4 rounded-xl text-white">Explora nuestra fundicion</button>
        </div>
      </div> */}

      <img
        className="w-screen h-screen  absolute blur-[2px] "
        src="/assets/vista-frontal.jpg"
        alt=""
      />

      <div className="absolute top-[30%] right-[10%] h-20 w-20 cursor-pointer peer-hover:h-10 peer-hover:w-10 peer-hover:bg-red-500 z-20 flex ">
        <button 
          onMouseEnter={() => handleMouseEnter("ventana")}
          onMouseLeave={() => handleMouseLeave()}
          className="bg-naranja/80 rounded-full h-8 w-8 peer m-auto "
        ></button>
      </div>
      <div className="absolute top-[50%] left-[45%]  z-20">
        <button 
          onMouseEnter={() => handleMouseEnter("puerta")}
          onMouseLeave={() => handleMouseLeave()}
          className="bg-naranja rounded-full h-10 w-10 "
        ></button>
      </div>
      <div className="absolute bottom-[20%] right-[20%]  z-20">
        <button 
          onMouseEnter={() => handleMouseEnter("reja")}
          onMouseLeave={() => handleMouseLeave()}
          className="bg-naranja rounded-full h-10 w-10 "
        ></button>
      </div>
 
{
  currentWindow === "ventana" ? (<Wall img={"/assets/ventana.jpg"} price={50} title={"ventana"}></Wall>) : currentWindow === "puerta" ? (<Wall img={"/assets/puerta.png"} price={150} title={"puerta"}></Wall>) : currentWindow === "reja" ? (<Wall img={"/assets/reja.png"} price={10} title={"reja"}></Wall>) : null
}
      
    </section>
  );
};

export default PromoSection;

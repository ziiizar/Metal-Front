import { useState, useEffect } from "react";
import {motion} from "framer-motion"

const NewHero = () => {
  // const [textIndex, setTextIndex] = useState(0);
  // const texts = ["Confianza", "Calidad", "Innovacion"];
  // const colors = ["#4F6D7A", "#DD6E42", "#494850"];

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 8000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <section data-header-color='white' className="landing w-[98.5vw] h-screen flex flex-col md:flex-row place-content-center items-center  relative">
      <div className=" w-[90%]  flex flex-col place-content-center  items-center  gap-8 z-10">
        <div className="flex w-full place-content-center items-center ">
          <motion.h4  className="w-full  [font-size:3rem] text-center  ">
            {/* <span style={{ color: colors[textIndex] }} className="ml-4 ">
              {texts[textIndex]}
            </span> */}
            <h4 className="font-bold [font-size:3rem]">Elige la excelencia del aluminio para tu hogar</h4>
            <span className="text-xl">Productos de aluminio de primera calidad con durabilidad garantizada</span>
            
          </motion.h4>
        </div>
        <div className="flex place-content-center items-center w-[70%]">
          {/* <p className="hidden md:flex text-xl text-gray-900">
            Líderes en ventanas y puertas de aluminio con estilo cubano. Calidad
            y diseño que transforman hogares. ¡Descubre nuestra excelencia
            metálica hoy mismo!
          </p> */}
        </div>
        <button
          // style={{ backgroundColor: colors[textIndex] }}
          className="py-1 px-6 rounded-full bg-white text-black text-2xl flex text-center "
        >
          Productos <span></span>
        </button>
      </div>
      {/* <picture className='object-cover'> */}
      <img
        className="w-screen h-screen object-cover absolute blur-[2px] "
        src="/assets/logo_make.jpg"
        alt=""
      />
      <div className="w-screen h-screen bg-black/50 absolute  "> </div>
      {/* </picture> */}
    </section>
  );
};

export default NewHero;

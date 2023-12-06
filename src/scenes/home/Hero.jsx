import { useState, useEffect } from 'react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Confianza', 'Calidad', 'Innovacion'];
  const colors = ['#276234BF', '#F99406', '#9747FF']; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="h-[90vh] w-full flex flex-col md:flex-row place-content-center items-center ">
      <div className="h-[60%] md:h-[80%] w-[90%] md:w-1/2 flex flex-col place-content-center md:place-content-center items-center text-black gap-8">
        <div className='flex w-full self-start'>
          <h4 className="text-5xl font-bold  ml-10">
            Metalconf es<span style={{ color: colors[textIndex] }}  className="ml-4" >{texts[textIndex]}</span>
          </h4>
        </div>
        <div className="flex place-content-center items-center w-[70%]">
          <p className="hidden md:flex text-xl ">
            Líderes en ventanas y puertas de aluminio con estilo cubano. Calidad y diseño que transforman hogares. ¡Descubre nuestra excelencia metálica hoy mismo!
          </p>
        </div>
        <button style={{ backgroundColor: colors[textIndex] }}
          className="py-3 px-6 rounded-xl text-white text-2xl flex text-center"
        >
          Descubrir productos
        </button>
      </div>
      <div className="h-[40%] md:h-[80%] w-[90%] md:w-1/2 flex place-content-center">
        <img src="/assets/Muneco 1.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;



// import React, { useState, useEffect } from 'react';

// const Hero = () => {
//   const [textIndex, setTextIndex] = useState(0);
//   const texts = ['Confianza', 'Calidad', 'Innovacion'];
//   const colors = ['#276234BF', '#F99406', '#9747FF']; // verde, violeta, naranja

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <section className="h-screen w-full flex place-content-center items-center">
//       <div className="h-[80%] w-1/2 flex flex-col place-content-center items-center text-black gap-8">
//         <div>
//           <h4 className="text-5xl font-bold">
//             Metalconf es<span style={{ color: colors[textIndex] }} className="ml-4">
//               {texts[textIndex]}
//             </span>
//           </h4>
//         </div>
//         <div className="flex place-content-center items-center w-[70%]">
//           <p className="text-xl">
//             Líderes en ventanas y puertas de aluminio con estilo cubano. Calidad y diseño que transforman hogares. ¡Descubre nuestra excelencia metálica hoy mismo!
//           </p>
//         </div>
//         <button
//           style={{ backgroundColor: colors[textIndex] }}
//           className="py-3 px-6 rounded-xl text-white text-2xl flex text-center"
//         >
//           Descubrir productos
//         </button>
//       </div>
//       <div className="h-[80%] w-1/2 flex place-content-center">
//         <img src="/assets/Muneco 1.png" alt="" />
//       </div>
//     </section>
//   );
// };

// export default Hero;

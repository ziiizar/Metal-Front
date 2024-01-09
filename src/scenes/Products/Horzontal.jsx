// import { useEffect } from "react";

// const HorizontalScroll = () => {
//   const Array = [
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },
//     { name: "Ventana 1", price: 5000, image: "/assets/ventanaex 1.png" },

//   ];

//   useEffect(() => {
//     const container = document.getElementById("horizontal-scroll");

//     window.addEventListener("wheel", (e) => {
//       if (e.target.id === "horizontal-scroll") {
//         e.preventDefault();
//         container.scrollLeft += e.deltaY;
//       }
//     });
//   }, []);

//   return (
//     <div id="horizontal-scroll" className="horizontal-scroll">
//       {Array.map((car, i) => (
//           <div  key={i}  className="snap-start w-[300px]">
//             <picture><img src={car.image} alt="" /></picture>
//             <h3>{car.name}</h3>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default HorizontalScroll;

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import ProductCard from "./Hero/ProductCards/ProductCard";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 0.9], ["1%", "-45%"]);
  
    return (
      <section ref={targetRef} className="relative h-[150vh] bg-columbiaBlue dark:bg-payneGray">
      <ul className="sticky top-0 flex h-screen items-center overflow-hidden">
      
        <motion.div style={{ x }} className="flex gap-8">
          <li className="h-full flex">
            <ProductCard
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard>
          </li>
          <li className="h-full flex">
            <ProductCard
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard>
          </li>
          <li className="h-full flex">
            <ProductCard
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard>
          </li>
          <li className="h-full flex">
            <ProductCard
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard>
          </li>
          <li className="h-full flex">
            <ProductCard
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard>
          </li>
          <li className="h-full flex">
            <ProductCard
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard>
          </li>
          </motion.div>
        </ul>
      </section>
    );
  };

  export default HorizontalScrollCarousel
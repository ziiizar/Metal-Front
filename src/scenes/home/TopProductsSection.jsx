import PromoCard from "./PromoCard"


const TopProductsSection = () => {
  return (
    <section  data-header-color='white' className="landing grid grid-cols-12 grid-rows-6 gap-3 w-full h-screen bg-dark  pt-14 pb-6 px-24">



      <picture className="col-span-6 row-span-6 col-start-1 rounded-lg shadow-md ">
        <img className="w-full h-full object-cover rounded-lg" src="/assets/ventana.jpg" alt="" />
      </picture>
      {/* <h4 className=" col-span-5 row-span-1 col-start-1 row-start-6 text-5xl font-serif tracking-widest text-naranja"> Mas Vendido</h4> */}

      {/* <h4 className="col-span-1 col-start-12 row-span-6 escribepabajo text-5xl tracking-widest font-serif text-naranja">Mejores Ofertas</h4> */}

     
        <div className="col-span-3 row-span-3 col-start-7 row-start-1"><PromoCard img={"/assets/tornillos.png"} title={"tornillos"} price={50}></PromoCard></div>
        <div className="col-span-3 row-span-3 col-start-10 row-start-1"><PromoCard></PromoCard></div>
        <div className="col-span-6 row-span-3 col-start-7 row-start-"><PromoCard></PromoCard></div>

     


      {/* <h4 className="text-xl font-bold">Lo mas vendido</h4>
        <ul className=" flex  justify-between w-[90%] h-[40%] gap-8 overflow-x-auto overflow-y-hidden pb-2 border-b-[1px]">
          <li className="">
            <ProductCard
              name={"Ventana 1"}
              price={5000}
              description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
              color={"bg-grisHome"}
          ></ProductCard>
          </li>
          <li className="min-w-[180px] flex-grow h-full flex">
            <ProductCard
              name={"Ventana 2"}
              price={5000}
              description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={2}
              color={"bg-grisHome"}
            ></ProductCard>
          </li>

          <li className=" min-w-[180px] flex-grow h-full flex">
            <ProductCard
              name={"Ventana 2"}
              price={5000}
              description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={3}
              color={"bg-grisHome"}
            ></ProductCard>
          </li>
        </ul>

        <h4>Ahora con Nuestras ofertas</h4>
        <ul className=" flex  justify-between w-[90%] h-[40%] gap-8 overflow-x-auto overflow-y-hidden">
          <li className="text-white flex-grow min-w-[180px] h- flex">
            <ProductCard
            color={"bg-grisHome"}
              name={"Ventana 1"}
              price={5000}
              description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
          ></ProductCard>
          </li>
          <li className=" min-w-[180px] flex-grow h-full flex">
            <ProductCard
            color={"bg-grisHome"}
              name={"Ventana 2"}
              price={5000}
              description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={2}
            ></ProductCard>
          </li>

          <li className=" min-w-[180px] flex-grow h-full flex">
            <ProductCard
            color={"bg-grisHome"}
              name={"Ventana 2"}
              price={5000}
              description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={3}
            ></ProductCard>
          </li>
        </ul> */}
      </section>
  )
}

export default TopProductsSection
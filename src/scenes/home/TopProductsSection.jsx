import ProductCard from "../Products/Hero/ProductCards/ProductCard.jsx";


const TopProductsSection = () => {
  return (
    <section className="flex flex-col gap-3 w-full h-screen bg-negro place-content-center items-center ">

      <h4 className="text-xl font-bold">Lo mas vendido</h4>
        <ul className=" flex  justify-between w-[90%] h-[40%] gap-8 overflow-x-auto overflow-y-hidden pb-2 border-b-[1px]">
          <li className=" min-w-[180px] flex-grow flex">
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
        </ul>
      </section>
  )
}

export default TopProductsSection
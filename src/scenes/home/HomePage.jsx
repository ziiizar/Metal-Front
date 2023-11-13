import Hero from "./Hero.jsx";
import Best_product from "./Best_product.jsx";
import PromoCard from "./PromoCard.jsx";

function HomePage() {
  return (
    <div className=" w-full min-h-screen h-full flex flex-col gap-20 mt-8  items-center">
      <div className="flex w-[90%]  place-content-center items-center">
        <img
          className="w-full h-full"
          src="/assets/hombre-trabajando-fabrica-metal-soldando-trozo-riel-herramientas-especiales 1.png"
          alt=""
        />
      </div>
      {/* SEPARAR ESTO DE AQUI ABAJO EN UN COMPONENTE */}
      <section className="flex w-[90%] h-[180px]">
        <ul className=" flex flex-wrap  justify-between w-full h-full">
          <li className=" w-[48%] h- flex">
            <Best_product
              btnText={"Comprar"}
              name={"Ventana 1"}
              price={5000}
              description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></Best_product>
          </li>
          <li className=" w-[48%] h-full flex">
            <Best_product
              btnText={"Comprar"}
              name={"Ventana 2"}
              price={5000}
              description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={2}
            ></Best_product>
          </li>
        </ul>
      </section>

      {/* <section className="w-[90%] h-[800px] flex">
        <ul className="w-full h-full flex flex-col">
          <li className="w-full h-[30%] flex items-end">
            <PromoCard
              title={"Nuestras Ventanas"}
              decription={"ASDDDDDDDDDDDDDASSSSSSsSAAAAAAAAA"}
              key={1}
              img={"/assets/ventana.jpg"}
            ></PromoCard>
          </li>
          <li>
            <PromoCard
              title={"Nuestras Ventanas"}
              decription={"ASDDDDDDDDDDDDDASSSSSSsSAAAAAAAAA"}
              key={1}
              img={"/assets/ventana.jpg"}
            ></PromoCard>
          </li>
          <li>
            <PromoCard
              title={"Nuestras Ventanas"}
              decription={"ASDDDDDDDDDDDDDASSSSSSsSAAAAAAAAA"}
              key={1}
              img={"/assets/ventana.jpg"}
            ></PromoCard>
          </li>
        </ul>
      </section> */}
    </div>
  );
}

export default HomePage;

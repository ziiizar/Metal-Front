import Hero from "./Hero.jsx";
import Best_product from "./Best_product.jsx";

function HomePage() {
  return (
    <div className=" w-full h-full flex flex-col gap-20 mt-8 place-content-center items-center">
      
        <div className="flex w-[90%] h-[200px] place-content-center items-center">
          <img
            className="w-full h-full"
            src="/assets/hombre-trabajando-fabrica-metal-soldando-trozo-riel-herramientas-especiales 1.png"
            alt=""
          />
        </div>
{/* SEPARAR ESTO DE AQUI ABAJO EN UN COMPONENTE */}
        <section className="flex w-[90%] h-[180px]">
          <ul className=" flex flex-wrap  justify-between w-full h-full">
            <li className=" w-[48%] h-full flex">
              <Best_product btnText={"Comprar"} name={"Ventana 1"} price={5000} description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"} img={"/assets/ventanaex 1.png"} key={1}></Best_product>
            </li>
            <li className=" w-[48%] h-full flex">
            <Best_product btnText={"Comprar"} name={"Ventana 2"} price={5000} description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"} img={"/assets/ventanaex 1.png"} key={2}></Best_product>
            </li>
          </ul>
        </section>
      </div>
    
  );
}

export default HomePage;

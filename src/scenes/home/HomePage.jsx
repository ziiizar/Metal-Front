import CommentSection from "./CommentSection.jsx";
import Hero from "./Hero.jsx";
import PromoCard from "./PromoCard.jsx";
import PromoSection from "./PromoSection.jsx";
import TopProductsSection from "./TopProductsSection.jsx";

function HomePage() {
  return (
    <div className=" w-full min-h-screen h-full flex flex-col  items-center">
      {/* <div className="flex w-[90%]  place-content-center items-center">
        <img
          className="w-full h-full"
          src="/assets/hombre-trabajando-fabrica-metal-soldando-trozo-riel-herramientas-especiales 1.png"
          alt=""
        />
      </div> */}

      <Hero></Hero>
      {/* SEPARAR ESTO DE AQUI ABAJO EN UN COMPONENTE */}
      <TopProductsSection></TopProductsSection>
      <PromoSection></PromoSection>
      <CommentSection></CommentSection>

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

import HeaderAndMain from "../../Layouts/HeaderAndMain.jsx";
import CommentSection from "./CommentSection.jsx";
import NewHero from "./NewHero.jsx";
import Promo2 from "./Promo2.jsx";
import Promo3 from "./Promo3.jsx";
import PromoSection from "./PromoSection.jsx";
import TopProductsSection from "./TopProductsSection.jsx";

function HomePage() {
  return (
    <HeaderAndMain>
      <>
        {/* <div className="flex w-[90%]  place-content-center items-center">
        <img
          className="w-full h-full"
          src="/assets/hombre-trabajando-fabrica-metal-soldando-trozo-riel-herramientas-especiales 1.png"
          alt=""
        />
      </div> */}
        {/* SEPARAR ESTO DE AQUI ABAJO EN UN COMPONENTE */}
        <div className="relative w-full h-screen overflow-auto snap-y snap-mandatory">
          <div className="snap-center">
            <NewHero></NewHero>
          </div>

          <div className="snap-center">
            <PromoSection></PromoSection>
          </div>
          <div className="snap-center">
            <Promo2></Promo2>
          </div>
          <div className="snap-center">
            <Promo3></Promo3>
          </div>
          {/* <div className="snap-center">
            <TopProductsSection></TopProductsSection>
          </div> */}
          <div className="snap-center">
            <CommentSection></CommentSection>
          </div>
        </div>
        {/* <div>uiygygy</div> */}

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
      </>
    </HeaderAndMain>
  );
}

export default HomePage;

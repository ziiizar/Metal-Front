import Hero from "./Hero.jsx";
import Best_product from "./Best_product.jsx";

function HomePage() {
  return (
    <div className=" w-full h-full flex flex-col gap-10 mt-8">
      {/* <Hero /> */}
      <div className="w-full h-[450px] flex place-content-center ">
        <Best_product
          name={"Ventana de Cristal"}
          price={500}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quo voluptate vitae! Non, at eos in expedita eligendi quis hic "
          }
          btnText={"Comprar"}
        />
      </div>
    </div>
  );
}

export default HomePage;

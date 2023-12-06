const PromoSection = () => {
  return (
    <section className="flex w-full h-auto flex-col text-black">
      <div className="w-full h-screen flex flex-col md:flex-row bg-green-50 gap-2 place-content-center items-center">
      <div className="flex  place-content-center items-center w-[90%] md:w-1/2">
          <img className="" src="/assets/cajas.png" alt="" />
        </div>
        <div className=" flex flex-col place-content-center items-center gap-4 w-1/2">
          <h4 className="font-bold text-3xl self-start">Transforme su comodidad con nuestra seguridad</h4>
          <p className="line-clamp-3">Echele un vistazo a nuestras puertas , ventanas y rejas de aluminio.</p>
          <button className="bg-verde flex py-2 px-4 rounded-xl text-white">Explora nuestra fundicion</button>
        </div>
      </div>
      <div className="w-full h-screen flex flex-col-reverse md:flex-row bg-limon px-4 gap-2 place-content-center items-center">

        <div className=" flex flex-col place-content-center items-center gap-4 w-1/2">
          <h4 className="font-bold text-3xl self-start">Construye tus sueños desde los cimientos</h4>
          <p className="line-clamp-3">Echele un vistazo a nuestros materiales de construcción que van desde bloques, ladrillos hasta tanques de agua para su hogar.</p>
          <button className="bg-verde flex py-2 px-4 rounded-xl text-white">Explora nuestros materiales</button>
        </div>
        <div className="flex  place-content-center items-center w-[90%] md:w-1/2
        ">
          <img src="/assets/materiales.png" alt="" />
        </div>
      </div>
      <div className="w-full h-screen flex flex-col md:flex-row bg-green-50 gap-2 px-4 place-content-center items-center">
        <div className="flex  place-content-center items-center w-[90%] md:w-1/2">
          <img src="/assets/ventaypuerta 2.png" alt="" />
        </div>
        <div className=" flex flex-col place-content-center items-center gap-4 w-1/2">
          <h4 className="font-bold text-3xl self-start">Personaliza esas pequeñas cosas</h4>
          <p className="line-clamp-3">Echele un vistazo a nuestras manualidades , carpetas, sobres de pago, todo lo que usted necesita.</p>
          <button className="bg-verde flex py-2 px-4 rounded-xl text-white">Explora nuestras manualidades</button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

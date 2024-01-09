const Promo3 = () => {
  return (
    <section
      data-header-color="black"
      className="landing flex w-full h-screen flex-col text-black"
    >
      {/* {" "}
      <div className="w-full h-screen flex flex-col md:flex-row bg-columbiaBlue dark:bg-payneGray gap-2 px-4 place-content-center items-center">
        <div className="flex  place-content-center items-center w-[90%] md:w-1/2">
          <img src="/assets/ventaypuerta 2.png" alt="" />
        </div>
        <div className=" flex flex-col place-content-center items-center gap-4 w-1/2">
          <h4 className="font-bold text-3xl self-start">
            Personaliza esas pequeñas cosas
          </h4>
          <p className="line-clamp-3">
            Echele un vistazo a nuestras manualidades , carpetas, sobres de
            pago, todo lo que usted necesita.
          </p>
          <button className="bg-naranja flex py-2 px-4 rounded-xl text-white">
            Explora nuestras manualidades
          </button>
        </div>
      </div> */}

      <img
        className="w-screen h-screen  absolute blur-[2px] "
        src="/assets/contaminacion-ambiental.jpg"
        alt=""
      />
    </section>
  );
};

export default Promo3;
